import styled from "styled-components";

import Photo from "@/components/atoms/Photo";
import icon_heart from "./icon_heart.svg";
import Palette from "@/components/styles/Palette";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LikeInfo = styled.p`
  color: ${Palette.gray.main};
  margin: 0;
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    background-image: url(${icon_heart.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 16px;
    width: 16px;
    height: 16px;
    position: absolute;
    left: 0;
  }
`;

type Props = {
  numOfLike: number;
} & React.ComponentProps<typeof Photo>;

const LikedPhoto = ({ numOfLike, ...photoProps }: Props) => {
  return (
    <Container>
      <Photo {...photoProps} />
      <LikeInfo>
        {numOfLike} {photoProps.size !== "small" && "likes"}
      </LikeInfo>
    </Container>
  );
};

export default LikedPhoto;
