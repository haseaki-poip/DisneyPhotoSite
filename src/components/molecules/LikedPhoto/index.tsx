import styled from "styled-components";

import Photo from "@/components/atoms";
import icon_heart from "./icon_heart.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LikeInfo = styled.p`
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
  console.log(icon_heart);
  return (
    <Container>
      <Photo {...photoProps} />
      <LikeInfo>{numOfLike} likes</LikeInfo>
    </Container>
  );
};

export default LikedPhoto;
