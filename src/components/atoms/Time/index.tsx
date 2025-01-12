import styled from "styled-components";

import icon_time from "./icon_time.svg";
import Palette from "@/components/styles/Palette";
import { getTimeAgo } from "@/components/utilities/time";

const TimeInfo = styled.p`
  color: ${Palette.gray.main};
  margin: 0;
  position: relative;
  padding-left: 24px;
  display: flex;
  align-items: center;
  line-height: 1.5em;

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
};

const Time = ({ time }: Props) => {
  return <TimeInfo>{getTimeAgo(time)}</TimeInfo>;
};

export default Time;
