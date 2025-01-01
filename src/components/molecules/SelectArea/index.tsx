import RadioButton from "@/components/atoms/RadioButton";
import { Area } from "@/store/Area/areaSlice";
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

const RadioButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 1280px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

type Props = {
  areas: Area[];
  selectedAreaId: string;
  handleClickButton: (areaId: string) => void;
};

const SelectArea = ({ areas, selectedAreaId, handleClickButton }: Props) => {
  return (
    <Container>
      <Legend>エリア</Legend>
      <RadioButtonList>
        {areas.map((area) => (
          <li key={area.id}>
            <RadioButton
              label={area.name}
              isChecked={area.id === selectedAreaId}
              handleCheckButton={() => handleClickButton(area.id)}
            />
          </li>
        ))}
      </RadioButtonList>
    </Container>
  );
};

export default SelectArea;
