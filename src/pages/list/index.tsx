import { GetStaticProps } from "next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListTemplate from "@/components/templates/list";
import { AppDispatch } from "@/store/store";
import { csrAreaPhotos } from "@/store/AreaPhotos/areaPhotoSlice";
import { ssgAreas } from "@/store/Area/areaSlice";
import Head from "next/head";
import { csrLikedRecommends } from "@/store/LikedRecommends/likedRecommendsSlice";

const ListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    // TODO: 初期パラメータ関係は定数化する
    dispatch(csrLikedRecommends("LIKE"));
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
      <ListTemplate />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const areaResult = await ssgAreas();

  if (areaResult.isError || !areaResult.result) {
    throw new Error("Failed to fetch area data in SSG");
  }

  return {
    props: {
      areaData: areaResult.result,
    },
  };
};

export default ListPage;
