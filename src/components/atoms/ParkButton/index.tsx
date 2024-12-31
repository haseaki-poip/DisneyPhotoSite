import Palette from "@/components/styles/Palette";
import { Park } from "@/store/type";
import styled from "styled-components";

const Button = styled.button<{ park: Park }>`
  border: 1px solid
    ${({ park }) => (park === "land" ? Palette.land : Palette.sea)};
  border-radius: 4px;
  width: 144px;
  height: 56px;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.5;
  }
`;

const ParkIcon = styled.img`
  width: 100%;
  height: 36px;
  object-fit: contain;
`;

type Props = {
  park: Park;
  handleClickButton: () => void;
  className?: string; // 親コンポーネントからスタイルを上書きするため
};
const ParkButton = ({ park, handleClickButton, className }: Props) => {
  return (
    <Button
      aria-label={
        park === "land"
          ? "東京ディズニーランドを選択"
          : "東京ディズニーシーを選択"
      }
      className={className}
      onClick={handleClickButton}
      park={park}
    >
      <ParkIcon
        alt={park === "land" ? "TokyoDisneyLand icon" : "TokyoDisneySea icon"}
        src={park === "land" ? "/images/icon_tdl.png" : "/images/icon_tds.png"}
      />
    </Button>
  );
};

export default ParkButton;
