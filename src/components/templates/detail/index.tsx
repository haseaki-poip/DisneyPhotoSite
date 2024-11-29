import dynamic from "next/dynamic";
import { useMemo } from "react";
import styled from "styled-components";

import PhotoDetail from "@/components/organisms/detail/PhotoDetail";
import NearRecommends from "@/components/organisms/detail/NearRecommends";

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
  const Location = useMemo(
    () =>
      dynamic(() => import("@/components/organisms/detail/Location"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
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
