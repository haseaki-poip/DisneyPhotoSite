import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import DetailTemplate from "@/components/templates/detail";
import { csrNearRecommends } from "@/store/NearRecommends/nearRecommendsSlice";
import {
  PhotoDetail,
  ssrPhotoDetail,
} from "@/store/PhotoDetail/photoDetailSlice";
import { AppDispatch, RootState } from "@/store/store";

type Props = {
  photoDetail: PhotoDetail;
};

// 近くのおすすめの写真を取得する際のデフォルトの取得数
const nearRecommendLimit = 30;

const DetailPage = ({ photoDetail }: Props) => {
  const areaId = photoDetail.area.id;
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(
      csrNearRecommends({
        areaId,
        limit: nearRecommendLimit,
      })
    );
  }, [dispatch, areaId]);

  return (
    <>
      <Head>
        <title>{photoDetail.title}の写真紹介ページ</title>
      </Head>
      <DetailTemplate />
    </>
  );
};

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const photoDetailResult = await ssrPhotoDetail(id);
  if (photoDetailResult.isError || !photoDetailResult.result) {
    return {
      redirect: {
        destination: "/error",
        permanent: false,
      },
    };
  }

  const photoDetail = photoDetailResult.result;
  return {
    props: { photoDetail },
  };
}

export default DetailPage;
