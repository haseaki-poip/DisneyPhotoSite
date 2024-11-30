import DetailTemplate from "@/components/templates/detail";
import {
  PhotoDetail,
  ssrPhotoDetail,
} from "@/store/PhotoDetail/photoDetailSlice";

type Props = {
  photoDetail: PhotoDetail;
};
const DetailPage = ({ photoDetail }: Props) => {
  return <DetailTemplate photoDetail={photoDetail} />;
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const photoDetailResult = await ssrPhotoDetail(id);
  if (photoDetailResult.isError) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }

  const photoDetail = photoDetailResult.result!;
  return {
    props: { photoDetail },
  };
}

export default DetailPage;
