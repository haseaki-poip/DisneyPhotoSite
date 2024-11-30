import dynamic from "next/dynamic";
import { useMemo } from "react";
import styled from "styled-components";

import PhotoDetail from "@/components/organisms/detail/PhotoDetail";
import NearRecommends from "@/components/organisms/detail/NearRecommends";
import Location from "@/components/organisms/detail/Location";

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

const DetailTemplate = () => {
  return (
    <Container>
      <DetailSection>
        <PhotoDetail />
        <Location />
      </DetailSection>
      <NearRecommends />
    </Container>
  );
};

export default DetailTemplate;
