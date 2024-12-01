import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DetailTemplate from "@/components/templates/detail";
import { csrNearRecommends } from "@/store/NearRecommends/nearRecommendsSlice";
import {
  PhotoDetail,
  ssrPhotoDetail,
} from "@/store/PhotoDetail/photoDetailSlice";
import { AppDispatch } from "@/store/store";

type Props = {
  photoDetail: PhotoDetail;
};

const DetailPage = ({ photoDetail }: Props) => {
  const areaId = photoDetail.area.id;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(csrNearRecommends(areaId));
  }, [dispatch, areaId]);

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
