import Palette from "@/components/styles/Palette";
import styled from "styled-components";

const Image = styled.img`
  width: 25%;
  height: 25%;
  object-fit: contain;
`;

const ImageWrapper = styled.div<{ size: Props["size"] }>`
  flex-shrink: 0; // flexの場合親要素のサイズによってwidthが潰れることがあるため
  width: ${({ size = "medium" }) => {
    if (typeof size === "number") {
      return `${size}px`;
    }

    switch (size) {
      case "large":
        return "300px";
      case "medium":
        return "200px";
      case "small":
        return "100px";
      default:
        return "200px";
    }
  }};
  height: ${({ size = "medium" }) => {
    if (typeof size === "number") {
      return `${size}px`;
    }
    switch (size) {
      case "large":
        return "300px";
      case "medium":
        return "200px";
      case "small":
        return "100px";
      default:
        return "200px";
    }
  }};
  overflow: hidden;
  border-radius: 8px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 640px) {
    width: ${({ size = "medium" }) => {
      if (typeof size === "number") {
        return `${size}px`;
      }

      switch (size) {
        case "large":
          return "150px";
        case "medium":
          return "100px";
        case "small":
          return "75px";
        default:
          return "100px";
      }
    }};
    height: ${({ size = "medium" }) => {
      if (typeof size === "number") {
        return `${size}px`;
      }

      switch (size) {
        case "large":
          return "150px";
        case "medium":
          return "100px";
        case "small":
          return "75px";
        default:
          return "100px";
      }
    }};
  }
`;

type Props = {
  size?: "small" | "medium" | "large" | number;
  className?: string;
};

const LoadingPhoto = (props: Props) => {
  const { size, className } = props;
  return (
    <ImageWrapper size={size} className={className}>
      <Image src="/images/loading.svg" alt="loading" loading="eager" />
    </ImageWrapper>
  );
};

export default LoadingPhoto;
