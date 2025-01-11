import Link from "next/link";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useCallback } from "react";

import SectionTitle from "@/components/atoms/SectionTitle";
import { ListWrapper } from "@/components/templates/list";
import RecentlyPhoto from "@/components/molecules/ExtraPhoto/RecentlyPhoto";
import { csrRecentlyRecommends } from "@/store/RecentlyRecommends/recentlyRecommendsSlice";
import ErrorMessage from "@/components/molecules/ErrorMessage";
import LoadingExtraPhoto from "@/components/molecules/ExtraPhoto/LoadingExtraPhoto";
import StyledLink from "@/components/atoms/StyledLink";

const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

// 画像200px + gap4px + テキストの高さを設定
const CustomErrorMessage = styled(ErrorMessage)`
  height: 228px;

  @media (max-width: 640px) {
    height: 128px;
  }
`;

const RecentlySection = () => {
  const {
    results: recentlyRecommendItems,
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.recentlyRecommends);
  const dispatch = useDispatch<AppDispatch>();

  const handleClickRefetchButton = useCallback(() => {
    dispatch(csrRecentlyRecommends("NEW"));
  }, [dispatch]);

  return (
    <Component>
      <SectionTitle title="最近投稿されたフォトスポット" />
      <ListWrapper>
        {isLoading || isError === undefined ? (
          <List>
            {Array.from({ length: 5 }).map((_, index) => (
              <LoadingExtraPhoto size="medium" key={index} />
            ))}
          </List>
        ) : isError ? (
          <CustomErrorMessage
            message="エラーが発生し、写真を取得できませんでした。"
            actionContent={
              <StyledLink as="button" onClick={handleClickRefetchButton}>
                再取得する
              </StyledLink>
            }
          />
        ) : recentlyRecommendItems.length > 0 ? (
          <List>
            {recentlyRecommendItems.map((item) => (
              <Link href={`/detail/${item.id}`} key={item.id}>
                <RecentlyPhoto
                  imageUrl={item.imageUrl}
                  name={item.title}
                  time={item.createdAt}
                />
              </Link>
            ))}
          </List>
        ) : (
          <CustomErrorMessage
            message="まだ人気の投稿がありません。人気者になるチャンスですね！"
            actionContent={<StyledLink href="#">投稿する</StyledLink>}
          />
        )}
      </ListWrapper>
    </Component>
  );
};

export default RecentlySection;
