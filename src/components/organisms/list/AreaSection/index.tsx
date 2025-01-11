import Link from "next/link";
import { useCallback, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Photo from "@/components/atoms/Photo";
import SectionTitle from "@/components/atoms/SectionTitle";
import { Park } from "@/store/type";
import { AppDispatch, RootState } from "@/store/store";
import LoadingPhoto from "@/components/atoms/Photo/loading";
import ErrorMessage from "@/components/molecules/ErrorMessage";
import { csrAreaPhotos } from "@/store/AreaPhotos/areaPhotoSlice";
import StyledLink from "@/components/atoms/StyledLink";
import SelectPark from "@/components/molecules/SelectPark";
import SelectArea from "@/components/molecules/SelectArea";
import { ListWrapper } from "@/components/templates/list";

const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const FlexContainer = styled.div`
  display: flex;
  gap: 96px;
  height: 440px;

  @media (max-width: 1280px) {
    flex-direction: column;
    height: auto;
    gap: 24px;
  }
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Grid = styled.div<{ count: number }>`
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  align-content: flex-start;
  position: relative;
  &::after {
    content: "";
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 24px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    );
  }

  @media (max-width: 1280px) {
    height: auto;
    ${({ count }) =>
      count > 8
        ? `
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-auto-flow: column;
    `
        : `flex-wrap: nowrap;`}
    gap: 16px;
    overflow-x: scroll;
    width: 100%;
    &::after {
      content: none;
    }
  }

  @media (max-width: 640px) {
    gap: 8px;
  }
`;

// 画像の高さを設定
const CustomErrorMessage = styled(ErrorMessage)`
  height: 200px;

  @media (max-width: 640px) {
    height: 100px;
  }
`;

type Action =
  | {
      type: "SET_SELECTED_PARK";
      payload: Park;
    }
  | {
      type: "SET_SELECTED_AREA";
      payload: string;
    };

type State = {
  selectedPark: Park;
  selectedAreaId: string;
  lastSelectedLandAreaId: string;
  lastSelectedSeaAreaId: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_SELECTED_PARK":
      if (action.payload === "land") {
        return {
          ...state,
          selectedAreaId: state.lastSelectedLandAreaId,
          selectedPark: action.payload,
        };
      } else {
        return {
          ...state,
          selectedAreaId: state.lastSelectedSeaAreaId,
          selectedPark: action.payload,
        };
      }
    case "SET_SELECTED_AREA":
      if (state.selectedPark === "land") {
        return {
          ...state,
          lastSelectedLandAreaId: action.payload,
          selectedAreaId: action.payload,
        };
      } else {
        return {
          ...state,
          lastSelectedSeaAreaId: action.payload,
          selectedAreaId: action.payload,
        };
      }
    default:
      return state;
  }
};

const AreaSection = () => {
  const areaData = useSelector((state: RootState) => state.areas.result!);
  const {
    results: areaPhotoItems,
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.areaPhotos);
  const dispatch = useDispatch<AppDispatch>();
  const [selectAreaState, selectAreaDispatch] = useReducer(reducer, {
    selectedPark: "land",
    selectedAreaId: areaData.land[0].id,
    lastSelectedLandAreaId: areaData.land[0].id,
    lastSelectedSeaAreaId: areaData.sea[0].id,
  });

  const handleClickRefetchButton = useCallback(() => {
    dispatch(
      csrAreaPhotos({
        areaId: selectAreaState.selectedAreaId,
        // TODO: pagesでのところと同時にここの値も定数化する
        limit: 16,
      })
    );
  }, [dispatch, selectAreaState.selectedAreaId]);

  const handleClickParkButton = useCallback(
    (park: Park) => {
      selectAreaDispatch({ type: "SET_SELECTED_PARK", payload: park });
      dispatch(
        csrAreaPhotos({
          areaId:
            park === "land"
              ? selectAreaState.lastSelectedLandAreaId
              : selectAreaState.lastSelectedSeaAreaId,
          // TODO: pagesでのところと同時にここの値も定数化する
          limit: 16,
        })
      );
    },
    [
      dispatch,
      selectAreaState.lastSelectedLandAreaId,
      selectAreaState.lastSelectedSeaAreaId,
    ]
  );

  const handleClickAreaButton = useCallback(
    (areaId: string) => {
      selectAreaDispatch({ type: "SET_SELECTED_AREA", payload: areaId });
      dispatch(
        csrAreaPhotos({
          areaId: areaId,
          // TODO: pagesでのところと同時にここの値も定数化する
          limit: 16,
        })
      );
    },
    [dispatch]
  );

  return (
    <Component>
      <SectionTitle title="エリア別検索" />
      <FlexContainer>
        <Filter>
          <SelectPark
            selectedPark={selectAreaState.selectedPark}
            handleClickButton={handleClickParkButton}
          />
          <SelectArea
            areas={
              selectAreaState.selectedPark == "land"
                ? areaData.land
                : areaData.sea
            }
            selectedAreaId={selectAreaState.selectedAreaId}
            handleClickButton={handleClickAreaButton}
          />
        </Filter>
        <ListWrapper>
          <Grid count={areaPhotoItems.length === 0 ? 4 : areaPhotoItems.length}>
            {isLoading || isError === undefined ? (
              <>
                {Array.from({ length: 4 }).map((_, index) => (
                  <LoadingPhoto size="medium" key={index} />
                ))}
              </>
            ) : isError ? (
              <CustomErrorMessage
                message="エラーが発生し、写真を取得できませんでした。"
                actionContent={
                  <StyledLink as="button" onClick={handleClickRefetchButton}>
                    再取得する
                  </StyledLink>
                }
              />
            ) : areaPhotoItems.length > 0 ? (
              <>
                {areaPhotoItems.map((item) => (
                  <Link key={item.id} href={`/detail/${item.id}`}>
                    <Photo imageUrl={item.imageUrl} size="medium" />
                  </Link>
                ))}
              </>
            ) : (
              <CustomErrorMessage
                message="まだこのエリアの投稿がありません。このエリアのパイオニアになりましょう！"
                actionContent={<StyledLink href="#">投稿する</StyledLink>}
              />
            )}
          </Grid>
        </ListWrapper>
      </FlexContainer>
    </Component>
  );
};

export default AreaSection;
