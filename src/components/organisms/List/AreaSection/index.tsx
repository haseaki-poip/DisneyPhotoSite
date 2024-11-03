import ParkButton from "@/components/atoms/ParkButton";
import Photo from "@/components/atoms/Photo";
import RadioButton from "@/components/atoms/RadioButton";
import SectionTitle from "@/components/atoms/SectionTitle";
import { Park } from "@/components/types";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const items = [
  {
    id: "DP-1",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 100,
    itemLink: "/detail/DP-1",
  },
  {
    id: "DP-2",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 90,
    itemLink: "/detail/DP-2",
  },
  {
    id: "DP-3",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 80,
    itemLink: "/detail/DP-3",
  },
  {
    id: "DP-4",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 70,
    itemLink: "/detail/DP-4",
  },
  {
    id: "DP-5",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 60,
    itemLink: "/detail/DP-5",
  },
  {
    id: "DP-6",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 50,
    itemLink: "/detail/DP-6",
  },
  {
    id: "DP-7",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-7",
  },
];

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
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  flex: 1;
  align-content: flex-start;
`;

const AreaSection = () => {
  const [selectedPark, setSelectedPark] = useState<Park>("land");
  return (
    <Component>
      <SectionTitle title="エリア別検索" />
      <FlexContainer>
        <Filter>
          <CategoryArea>
            <CategoryTitle>パーク</CategoryTitle>
            <CategoryButtons>
              <StyledParkButton
                selectedPark={selectedPark}
                park="land"
                handleClickButton={() => setSelectedPark("land")}
              />
              <StyledParkButton
                selectedPark={selectedPark}
                park="sea"
                handleClickButton={() => setSelectedPark("sea")}
              />
            </CategoryButtons>
          </CategoryArea>
          <CategoryArea>
            <CategoryTitle>エリア</CategoryTitle>
            <CategoryList>
              {selectedPark == "land" ? (
                <>
                  <li>
                    <RadioButton
                      label="ワールドバザール"
                      isChecked={true}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="シンデレラ城前"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="アドベンチャーランド"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="ウエスタンランド"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="クリッターカントリー"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="ファンタジーランド"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="トゥーンタウン"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="トゥモローランド"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="その他"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <RadioButton
                      label="メディテレーニアンハーバー"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="アメリカンウォーターフロント"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="ポートディスカバリー"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="ロストリバーデルタ"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="ファンタジースプリングス"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="アラビアンコースト"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="マーメイドラグーン"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="ミステリアスアイランド"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                  <li>
                    <RadioButton
                      label="その他"
                      isChecked={false}
                      handleCheckButton={() => {}}
                    />
                  </li>
                </>
              )}
            </CategoryList>
          </CategoryArea>
        </Filter>

        <Grid>
          {items.map((item) => (
            <Link key={item.id} href={item.itemLink}>
              <Photo imageUrl={item.imageUrl} size="medium" />
            </Link>
          ))}
        </Grid>
      </FlexContainer>
    </Component>
  );
};

export default AreaSection;
