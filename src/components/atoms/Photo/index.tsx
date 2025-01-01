import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div<{ size: Props["size"] }>`
  width: ${({ size = "medium" }) => {
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

  @media (max-width: 640px) {
    width: ${({ size = "medium" }) => {
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
  imageUrl: string;
  name?: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

const Photo = (props: Props) => {
  const { imageUrl, name, size, className } = props;
  return (
    <ImageWrapper size={size} className={className}>
      <Image
        src={imageUrl}
        alt={name || "photo"}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null; // 下記画像が取得できない場合の無限ループを防ぐため、nullを代入
          target.src = "/images/dummy.png";
        }}
      />
    </ImageWrapper>
  );
};

export default Photo;
