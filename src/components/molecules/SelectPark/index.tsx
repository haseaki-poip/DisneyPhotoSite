import ParkButton from "@/components/atoms/ParkButton";
import { Park } from "@/store/type";
import styled from "styled-components";

const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const Legend = styled.legend`
  font-size: 1em;
  font-weight: 600;
  margin-bottom: 16px;
`;

const FlexButtons = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledParkButton = styled(ParkButton)<{ selectedPark: Park }>`
  opacity: ${({ park, selectedPark }) => (park === selectedPark ? 1 : 0.3)};
`;

type Props = {
  selectedPark: Park;
  handleClickButton: (park: Park) => void;
};

const SelectPark = ({ selectedPark, handleClickButton }: Props) => {
  return (
    <Container>
      <Legend>パーク</Legend>
      <FlexButtons>
        <StyledParkButton
          selectedPark={selectedPark}
          park="land"
          handleClickButton={() => handleClickButton("land")}
        />
        <StyledParkButton
          selectedPark={selectedPark}
          park="sea"
          handleClickButton={() => handleClickButton("sea")}
        />
      </FlexButtons>
    </Container>
  );
};

export default SelectPark;
