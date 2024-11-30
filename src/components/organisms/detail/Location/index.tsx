import { LatLngExpression } from "leaflet";
import styled from "styled-components";

import Map from "@/components/molecules/Map";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const MapWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const position: LatLngExpression = [35.632381, 139.880577];

const Location = () => {
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
      <Map position={position} />
    </MapWrapper>
  );
};

export default Location;
