import styled from "styled-components";
import Palette from "@/components/styles/Palette";

const Component = styled.label`
  display: flex;
  gap: 8px;
  align-items: start;
  cursor: pointer;
`;

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${Palette.gray.main};
  border-radius: 50%;
  margin: 0;
  cursor: pointer;
  position: relative;

  &:checked {
    border-color: ${Palette.blue.main};

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background-color: ${Palette.blue.main};
      border-radius: 50%;
    }
  }

  &:hover {
    border-color: ${Palette.blue.main};
  }
`;

const Label = styled.span`
  line-height: 1.25;
  word-break: break-word;
  color: ${Palette.gray.main};
  flex: 1;
`;

type Props = {
  label: string;
  isChecked: boolean;
  handleCheckButton: () => void;
};

const RadioButton = ({ label, isChecked, handleCheckButton }: Props) => {
  const handleChange = () => {
    if (!isChecked) {
      handleCheckButton();
    }
  };

  return (
    <Component onClick={handleChange}>
      <Input type="radio" checked={isChecked} />
      <Label>{label}</Label>
    </Component>
  );
};

export default RadioButton;
