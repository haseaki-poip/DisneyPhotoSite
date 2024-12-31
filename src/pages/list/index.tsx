import { GetStaticProps } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListTemplate from "@/components/templates/list";
import { csrLikedRecommend } from "@/store/LikedRemmends/likedRecommendSlice";
import { AppDispatch } from "@/store/store";
import { csrAreaPhotos } from "@/store/AreaPhotos/areaPhotoSlice";
import { AreasResult, ssgAreas } from "@/store/Area/areaSlice";
import Head from "next/head";

type Props = {
  areaData: AreasResult;
};

export default function ListPage({ areaData }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // TODO: 初期パラメータ関係は定数化する
    dispatch(csrLikedRecommend("LIKE"));
    dispatch(
      csrAreaPhotos({
        areaId: "AL1",
        limit: 16,
      })
    );
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>ディズニー写真投稿一覧ページ</title>
      </Head>
      <ListTemplate areaData={areaData} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const areaData = await ssgAreas();

  return {
    props: {
      areaData,
    },
  };
};
