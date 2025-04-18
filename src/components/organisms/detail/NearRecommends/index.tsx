import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

import ExpandButton from "@/components/atoms/ExpandButton";
import Photo from "@/components/atoms/Photo";
import SectionTitle from "@/components/atoms/SectionTitle";
import { RootState } from "@/store/rootReducer";
import LoadingPhoto from "@/components/atoms/Photo/loading";
import ErrorMessage from "@/components/molecules/ErrorMessage";
import { AppDispatch } from "@/store/store";
import { csrNearRecommends } from "@/store/NearRecommends/nearRecommendsSlice";
import StyledLink from "@/components/atoms/StyledLink";

const imageSize = 100;
const gridGap = 16;
const baseGridHeight = 2 * (imageSize + gridGap);

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${imageSize}px);
  gap: ${gridGap}px;
  column-gap: 8px;
  justify-content: space-between;
  width: 100%;
  font-size: 0;
  overflow-y: hidden;
  transition: height 0.3s ease-in-out;
`;

const Item = styled.li``;

const ExpandButtonWrapper = styled.div<{ type: "expand" | "collapse" }>`
  display: flex;
  justify-content: center;
  padding-top: ${({ type }) => (type === "expand" ? "0" : `${gridGap}px`)};
`;

const CustomErrorMessage = styled(ErrorMessage)`
  height: ${imageSize}px;
`;

const NearRecommends = () => {
  const areaId = useSelector(
    (state: RootState) => state.photoDetail.result!.area.id
  );
  const {
    results: nearRecommendItems,
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.nearRecommends);
  const dispatch = useDispatch<AppDispatch>();

  const gridRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState(baseGridHeight);
  const [isExpand, setIsExpand] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);

  useEffect(() => {
    if (gridRef.current && gridRef.current.clientHeight > baseGridHeight) {
      setMaxHeight(gridRef.current.clientHeight);
      gridRef.current.style.height = `${baseGridHeight}px`;
      setShowExpandButton(true);
    }
  }, [nearRecommendItems]);

  const handleClickRefetchButton = useCallback(() => {
    // TODO: pagesでのところと同時にここの値も定数化する
    dispatch(csrNearRecommends({ areaId, limit: 30 }));
  }, [dispatch, areaId]);

  const handleClickExpandButton = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.style.height = isExpand
        ? `${baseGridHeight}px`
        : `${maxHeight}px`;
      setIsExpand(!isExpand);
    }
  }, [maxHeight, isExpand]);

  return (
    <Container>
      <SectionTitle title="この写真と近いおすすめ" />
      <Content>
        {isLoading || isError === undefined ? (
          <Grid ref={gridRef}>
            {[...Array(3)].map((_, index) => (
              <Item key={index}>
                <LoadingPhoto size={imageSize} />
              </Item>
            ))}
          </Grid>
        ) : isError ? (
          <CustomErrorMessage
            message="エラーが発生し、写真を取得できませんでした。"
            actionContent={
              <StyledLink as="button" onClick={handleClickRefetchButton}>
                再取得する
              </StyledLink>
            }
          />
        ) : nearRecommendItems.length > 0 ? (
          <Grid ref={gridRef}>
            {nearRecommendItems.map((item) => (
              <Item key={item.id}>
                <Link href={`/detail/${item.id}`}>
                  <Photo imageUrl={item.imageUrl} size={imageSize} />
                </Link>
              </Item>
            ))}
          </Grid>
        ) : (
          <CustomErrorMessage
            message="この条件の写真が見つかりませんでした。あなたが投稿してみませんか？"
            actionContent={<StyledLink href="#">投稿する</StyledLink>}
          />
        )}
        {showExpandButton && (
          <ExpandButtonWrapper type={isExpand ? "collapse" : "expand"}>
            <ExpandButton
              type={isExpand ? "collapse" : "expand"}
              handleClickButton={handleClickExpandButton}
            />
          </ExpandButtonWrapper>
        )}
      </Content>
    </Container>
  );
};

export default NearRecommends;
