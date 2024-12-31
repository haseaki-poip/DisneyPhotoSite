import Link from "next/link";
import { useCallback, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import ParkButton from "@/components/atoms/ParkButton";
import Photo from "@/components/atoms/Photo";
import RadioButton from "@/components/atoms/RadioButton";
import SectionTitle from "@/components/atoms/SectionTitle";
import { Park } from "@/store/type";
import { AppDispatch, RootState } from "@/store/store";
import LoadingPhoto from "@/components/atoms/Photo/loading";
import ErrorMessage from "@/components/molecules/ErrorMessage";
import Palette from "@/components/styles/Palette";
import { csrAreaPhotos } from "@/store/AreaPhotos/areaPhotoSlice";
import { AreasResult } from "@/store/Area/areaSlice";

const StyledParkButton = styled(ParkButton)<{ selectedPark: Park }>`
  opacity: ${({ park, selectedPark }) => (park === selectedPark ? 1 : 0.3)};
`;

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
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CategoryArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryTitle = styled.h3`
  font-size: 1em;
  font-weight: 600;
`;

const CategoryButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Grid = styled.div`
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
`;

const StyledLink = styled.a`
  color: ${Palette.blue.main};
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
  selectedArea: string;
  lastSelectedLandArea: string;
  lastSelectedSeaArea: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_SELECTED_PARK":
      if (action.payload === "land") {
        return {
          ...state,
          selectedArea: state.lastSelectedLandArea,
          selectedPark: action.payload,
        };
      } else {
        return {
          ...state,
          selectedArea: state.lastSelectedSeaArea,
          selectedPark: action.payload,
        };
      }
    case "SET_SELECTED_AREA":
      if (state.selectedPark === "land") {
        return {
          ...state,
          lastSelectedLandArea: action.payload,
          selectedArea: action.payload,
        };
      } else {
        return {
          ...state,
          lastSelectedSeaArea: action.payload,
          selectedArea: action.payload,
        };
      }
    default:
      return state;
  }
};

type Props = {
  areaData: AreasResult;
};

const AreaSection = ({ areaData }: Props) => {
  const {
    results: areaPhotoItems,
    isLoading,
    isError,
  } = useSelector((state: RootState) => state.areaPhotos);
  const dispatch = useDispatch<AppDispatch>();
  const [selectAreaState, selectAreaDispatch] = useReducer(reducer, {
    selectedPark: "land",
    selectedArea: areaData.land[0].id,
    lastSelectedLandArea: areaData.land[0].id,
    lastSelectedSeaArea: areaData.sea[0].id,
  });

  const handleClickRefetchButton = useCallback(() => {
    dispatch(
      csrAreaPhotos({
        areaId: selectAreaState.selectedArea,
        // TODO: pagesでのところと同時にここの値も定数化する
        limit: 16,
      })
    );
  }, [dispatch, selectAreaState.selectedArea]);

  const handleClickParkButton = useCallback(
    (park: Park) => {
      selectAreaDispatch({ type: "SET_SELECTED_PARK", payload: park });
      dispatch(
        csrAreaPhotos({
          areaId:
            park === "land"
              ? selectAreaState.lastSelectedLandArea
              : selectAreaState.lastSelectedSeaArea,
          // TODO: pagesでのところと同時にここの値も定数化する
          limit: 16,
        })
      );
    },
    [
      dispatch,
      selectAreaState.lastSelectedLandArea,
      selectAreaState.lastSelectedSeaArea,
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
          <CategoryArea>
            <CategoryTitle>パーク</CategoryTitle>
            <CategoryButtons>
              <StyledParkButton
                selectedPark={selectAreaState.selectedPark}
                park="land"
                handleClickButton={() => handleClickParkButton("land")}
              />
              <StyledParkButton
                selectedPark={selectAreaState.selectedPark}
                park="sea"
                handleClickButton={() => handleClickParkButton("sea")}
              />
            </CategoryButtons>
          </CategoryArea>
          <CategoryArea>
            <CategoryTitle>エリア</CategoryTitle>
            <CategoryList>
              {selectAreaState.selectedPark == "land" ? (
                <>
                  {areaData.land.map((area) => (
                    <li key={area.id}>
                      <RadioButton
                        label={area.name}
                        isChecked={area.id === selectAreaState.selectedArea}
                        handleCheckButton={() => handleClickAreaButton(area.id)}
                      />
                    </li>
                  ))}
                </>
              ) : (
                <>
                  <>
                    {areaData.sea.map((area) => (
                      <li key={area.id}>
                        <RadioButton
                          label={area.name}
                          isChecked={area.id === selectAreaState.selectedArea}
                          handleCheckButton={() =>
                            handleClickAreaButton(area.id)
                          }
                        />
                      </li>
                    ))}
                  </>
                </>
              )}
            </CategoryList>
          </CategoryArea>
        </Filter>
        <Grid>
          {isLoading || isError === undefined ? (
            <>
              {Array.from({ length: 5 }).map((_, index) => (
                <LoadingPhoto size="medium" key={index} />
              ))}
            </>
          ) : isError ? (
            <ErrorMessage
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
            <ErrorMessage
              message="まだこのエリアの投稿がありません。このエリアのパイオニアになりましょう！"
              actionContent={<StyledLink href="#">投稿する</StyledLink>}
            />
          )}
        </Grid>
      </FlexContainer>
    </Component>
  );
};

export default AreaSection;
