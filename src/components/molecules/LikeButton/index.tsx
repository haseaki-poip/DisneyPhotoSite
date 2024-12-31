import styled from "styled-components";

import Palette from "@/components/styles/Palette";
import icon_heart_active from "./icon_heart_active.svg";
import icon_heart_default from "./icon_heart_default.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const IconButton = styled.button<{ isActive: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  background-image: ${({ isActive }) =>
    isActive
      ? `url(${icon_heart_active.src})`
      : `url(${icon_heart_default.src})`};
  background-size: 24px;
  background-position: center;
  background-repeat: no-repeat;
`;

const Count = styled.p`
  font-size: 12px;
  color: ${Palette.gray.main};
`;

type Props = {
  isActive: boolean;
  likeCount: number;
  onClickButton: () => void;
};

const LikeButton = ({ isActive, likeCount, onClickButton }: Props) => {
  return (
    <Container>
      <IconButton
        aria-label="いいね"
        isActive={isActive}
        onClick={onClickButton}
      />
      <Count>{likeCount}</Count>
    </Container>
  );
};

export default LikeButton;
