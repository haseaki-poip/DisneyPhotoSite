import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Link from "next/link";
import { useCallback } from "react";

import SectionTitle from "@/components/atoms/SectionTitle";
import LikedPhoto from "@/components/molecules/ExtraPhoto/LikedPhoto";
import { ListWrapper } from "@/components/templates/list";
import { RootState } from "@/store/rootReducer";
import { AppDispatch } from "@/store/store";
import { csrLikedRecommends } from "@/store/LikedRecommends/likedRecommendsSlice";
import LoadingExtraPhoto from "@/components/molecules/ExtraPhoto/LoadingExtraPhoto";
import ErrorMessage from "@/components/molecules/ErrorMessage";
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

// 画像 + gap4px + テキストの高さを24pxを設定
const CustomErrorMessage = styled(ErrorMessage)`
  height: 328px;

  @media (max-width: 640px) {
    height: 178px;
  }
`;

const LikedSection = () => {
  const {
    results: likedRecommendItems,
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.likedRecommends);
  const dispatch = useDispatch<AppDispatch>();
  const slicedItems = likedRecommendItems.slice(1);

  const handleClickRefetchButton = useCallback(() => {
    dispatch(csrLikedRecommends("LIKE"));
  }, [dispatch]);

  return (
    <Component>
      <SectionTitle title="人気のフォトスポット" />
      <ListWrapper>
        {isLoading || isError === undefined ? (
          <List>
            <LoadingExtraPhoto size="large" />
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
        ) : likedRecommendItems.length > 0 ? (
          <List>
            <Link href={`/detail/${slicedItems[0].id}`}>
              <LikedPhoto
                imageUrl={likedRecommendItems[0].imageUrl}
                name={likedRecommendItems[0].title}
                numOfLike={likedRecommendItems[0].like}
                size="large"
              />
            </Link>

            {slicedItems.map((item) => (
              <Link href={`/detail/${item.id}`} key={item.id}>
                <LikedPhoto
                  imageUrl={item.imageUrl}
                  name={item.title}
                  numOfLike={item.like}
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

export default LikedSection;
