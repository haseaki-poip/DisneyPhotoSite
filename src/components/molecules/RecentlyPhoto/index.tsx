import styled from "styled-components";

import Photo from "@/components/atoms/Photo";
import icon_time from "./icon_time.svg";
import Palette from "@/components/styles/Palette";
import { getTimeAgo } from "@/components/utilities/time";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const TimeInfo = styled.p`
  color: ${Palette.gray.main};
  margin: 0;
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: block;
    background-image: url(${icon_time.src});
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
  time: Date | string;
} & React.ComponentProps<typeof Photo>;

const RecentlyPhoto = ({ time, ...photoProps }: Props) => {
  return (
    <Container>
      <Photo {...photoProps} />
      <TimeInfo>{getTimeAgo(time)}</TimeInfo>
    </Container>
  );
};

export default RecentlyPhoto;
