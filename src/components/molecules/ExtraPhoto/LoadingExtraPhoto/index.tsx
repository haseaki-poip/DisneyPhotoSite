import styled from "styled-components";

import Palette from "@/components/styles/Palette";
import LoadingPhoto from "@/components/atoms/Photo/loading";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: fit-content;
`;

const LoadingTextWrapper = styled.div`
  width: 100%;
  height: 1.5em;
  display: flex;
  align-items: center;
`;

const LoadingText = styled.div`
  width: 64%;
  height: 12px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    ${Palette.gray.bg} 25%,
    #fff 50%,
    ${Palette.gray.bg} 75%
  );
  background-size: 200% 100%;
  animation: loadingAnimation 3s infinite;

  @keyframes loadingAnimation {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

type Props = React.ComponentProps<typeof LoadingPhoto>;

const LoadingExtraPhoto = ({ ...loadingProps }: Props) => {
  return (
    <Container>
      <LoadingPhoto {...loadingProps} />
      <LoadingTextWrapper>
        <LoadingText />
      </LoadingTextWrapper>
    </Container>
  );
};

export default LoadingExtraPhoto;
