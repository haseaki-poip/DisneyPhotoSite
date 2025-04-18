import styled from "styled-components";
import { useState } from "react";

import Palette from "@/components/styles/Palette";
import Button from "@/components/atoms/Button";
import LikeButton from "@/components/molecules/LikeButton";
import Time from "@/components/atoms/Time";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Container = styled.div`
  display: flex;
  gap: 80px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;

const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 400px) {
    width: 100%;
    aspect-ratio: 1 / 1;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
  flex-shrink: 1;
`;

const InfomationHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-direction: column-reverse;
  }
`;

const LikeButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const InfomationBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 1;
  color: ${Palette.gray.main};
  word-break: break-all;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: ${Palette.gray.main};
`;

const Area = styled.p`
  font-size: 24px;
  color: ${Palette.gray.main};
`;

const PostLink = styled(Button).attrs({ as: "a" })`
  width: 100%;
`;

const Description = styled.p`
  font-size: 24px;
  line-height: 1.2;
  color: ${Palette.gray.main};
  word-wrap: break-word;
`;

const InfomationFooter = styled.div`
  display: flex;
`;

const InsertText = styled.span`
  font-size: 16px;
  color: ${Palette.gray.main};
`;

const PhotoDetailSection = () => {
  const photoDetail = useSelector(
    (state: RootState) => state.photoDetail.result!
  );
  const [isLike, setIsLike] = useState(false);

  return (
    <Container>
      <ImageWrapper>
        <Image
          src={photoDetail.imageUrl}
          alt={photoDetail.title}
          loading="eager"
          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // 下記画像が取得できない場合の無限ループを防ぐため、nullを代入
            target.src = "/images/dummy.png";
          }}
        />
      </ImageWrapper>
      <Information>
        <InfomationHeader>
          <Title>{photoDetail.title}</Title>
          <LikeButtonWrapper>
            <LikeButton
              isActive={isLike}
              likeCount={photoDetail.like}
              onClickButton={() => setIsLike(!isLike)}
            />
          </LikeButtonWrapper>
        </InfomationHeader>
        <InfomationBody>
          <Box>
            <Label>エリア</Label>
            <Area>{photoDetail.area.name}</Area>
          </Box>
          <PostLink href={`#`}>同じ写真を投稿する</PostLink>
          <Box>
            <Label>説明</Label>
            <Description>{photoDetail.description}</Description>
          </Box>
        </InfomationBody>
        <InfomationFooter>
          <Time time={photoDetail.createdAt} />
          <InsertText>に投稿</InsertText>
        </InfomationFooter>
      </Information>
    </Container>
  );
};

export default PhotoDetailSection;
