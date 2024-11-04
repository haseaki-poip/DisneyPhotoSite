import AreaSection from "@/components/organisms/list/AreaSection";
import LikedSection from "@/components/organisms/list/LikedSection";
import RecentlySection from "@/components/organisms/list/RecentlySection";
import styled from "styled-components";

const layoutPaddingPx = 72;
const Component = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 72px;
  padding: 0 ${layoutPaddingPx}px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: ${layoutPaddingPx}px;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.8) calc(${layoutPaddingPx}px / 2),
      rgba(255, 255, 255, 0)
    );
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: ${layoutPaddingPx}px;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0)
    );
  }
`;

// レイアウトに関わるstyleをここで定義してOrganismsで使用できるようにする
export const ListWrapper = styled.div`
  margin: 0 -${layoutPaddingPx}px;
  & > * {
    padding: 0 ${layoutPaddingPx}px;
  }
`;

const ListTemplate = () => {
  return (
    <Component>
      <LikedSection />
      <AreaSection />
      <RecentlySection />
    </Component>
  );
};

export default ListTemplate;
