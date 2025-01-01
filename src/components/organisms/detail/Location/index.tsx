import styled from "styled-components";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

import { RootState } from "@/store/store";

const MapWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const Location = () => {
  const position = useSelector(
    (state: RootState) => state.photoDetail.result!.location
  );

  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/molecules/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <MapWrapper>
      <Map position={[position.latitude, position.longitude]} />
    </MapWrapper>
  );
};

export default Location;
