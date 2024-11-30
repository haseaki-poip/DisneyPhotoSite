import styled from "styled-components";
import { useState } from "react";

import Palette from "@/components/styles/Palette";
import Button from "@/components/atoms/Button";
import LikeButton from "@/components/molecules/LikeButton";
import Time from "@/components/atoms/Time";

const Container = styled.div`
  display: flex;
  gap: 80px;
`;

const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
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

const photoDetail = {
  id: "DP-1",
  title: "美女と野獣の城",
  description:
    "美女と野獣エリアにあるお城の写真です。昼間は鮮やかなピンクと紫色ですが、夜になると魔女に呪いの魔法にかけられたかのような青色のお城へと変化します。Qラインから撮るか、アトラクション後の帰り道で撮るのがおすすめです。",
  like: 100,
  imageUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
  area: "美女と野獣エリア",
  createdAt: new Date(Date.now() - 1000 * 60 * 30),
};

const PhotoDetail = () => {
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
          <LikeButton
            isActive={isLike}
            likeCount={photoDetail.like}
            onClickButton={() => setIsLike(!isLike)}
          />
        </InfomationHeader>
        <InfomationBody>
          <Box>
            <Label>エリア</Label>
            <Area>{photoDetail.area}</Area>
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

export default PhotoDetail;
