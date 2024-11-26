import styled from "styled-components";

import Photo from "@/components/atoms/Photo";
import Time from "@/components/atoms/Time";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

type Props = {
  time: Date | string;
} & React.ComponentProps<typeof Photo>;

const RecentlyPhoto = ({ time, ...photoProps }: Props) => {
  return (
    <Container>
      <Photo {...photoProps} />
      <Time time={time} />
    </Container>
  );
};

export default RecentlyPhoto;
