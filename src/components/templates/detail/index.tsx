import styled from "styled-components";

import PhotoDetailSection from "@/components/organisms/detail/PhotoDetailSection";
import NearRecommends from "@/components/organisms/detail/NearRecommends";
import Location from "@/components/organisms/detail/Location";
import type { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

const Container = styled.div`
  width: 100%;
  max-width: 1064px;
  margin: 24px auto;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  gap: 72px;
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

type Props = {
  photoDetail: PhotoDetail;
};

const DetailTemplate = ({ photoDetail }: Props) => {
  return (
    <Container>
      <DetailSection>
        <PhotoDetailSection photoDetail={photoDetail} />
        <Location />
      </DetailSection>
      <NearRecommends areaId={photoDetail.area.id} />
    </Container>
  );
};

export default DetailTemplate;
