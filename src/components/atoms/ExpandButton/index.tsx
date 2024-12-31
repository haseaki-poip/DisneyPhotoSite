import styled from "styled-components";

import Palette from "../../styles/Palette";
import icon_down from "./icon_down.svg";
import icon_up from "./icon_up.svg";

const Component = styled.button`
  padding: 0 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.span`
  font-size: 14px;
  color: ${Palette.gray.main};
`;

const Icon = styled.img`
  width: 12px;
  height: 12px;
`;

type Props = {
  type?: "expand" | "collapse";
  handleClickButton: () => void;
};

const ExpandButton = ({ type = "expand", handleClickButton }: Props) => {
  return (
    <Component onClick={handleClickButton}>
      <Label>{type === "expand" ? "もっと見る" : "小さく表示する"}</Label>
      <Icon
        alt={type === "expand" ? "expand icon" : "collapse icon"}
        src={type === "expand" ? icon_down.src : icon_up.src}
      />
    </Component>
  );
};

export default ExpandButton;
