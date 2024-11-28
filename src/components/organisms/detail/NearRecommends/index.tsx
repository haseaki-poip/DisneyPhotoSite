import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";

import ExpandButton from "@/components/atoms/ExpandButton";
import Photo from "@/components/atoms/Photo";
import SectionTitle from "@/components/atoms/SectionTitle";
import Link from "next/link";

const items = [
  {
    id: "DP-1",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 100,
    itemLink: "/detail/DP-1",
  },
  {
    id: "DP-2",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 90,
    itemLink: "/detail/DP-2",
  },
  {
    id: "DP-3",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 80,
    itemLink: "/detail/DP-3",
  },
  {
    id: "DP-4",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 70,
    itemLink: "/detail/DP-4",
  },
  {
    id: "DP-5",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 60,
    itemLink: "/detail/DP-5",
  },
  {
    id: "DP-6",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 50,
    itemLink: "/detail/DP-6",
  },
  {
    id: "DP-7",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-7",
  },
  {
    id: "DP-8",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 30,
    itemLink: "/detail/DP-8",
  },
  {
    id: "DP-9",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 20,
    itemLink: "/detail/DP-9",
  },
  {
    id: "DP-10",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 10,
    itemLink: "/detail/DP-10",
  },
  {
    id: "DP-11",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-11",
  },
  {
    id: "DP-12",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-12",
  },
  {
    id: "DP-13",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-13",
  },
  {
    id: "DP-14",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-14",
  },
  {
    id: "DP-15",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-15",
  },
  {
    id: "DP-16",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-16",
  },
  {
    id: "DP-17",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-17",
  },
  {
    id: "DP-18",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-18",
  },
  {
    id: "DP-19",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-19",
  },
  {
    id: "DP-20",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-20",
  },
  {
    id: "DP-21",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-21",
  },
  {
    id: "DP-22",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-22",
  },
  {
    id: "DP-23",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-23",
  },
  {
    id: "DP-24",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-24",
  },
  {
    id: "DP-25",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-25",
  },
  {
    id: "DP-26",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-26",
  },
  {
    id: "DP-27",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-27",
  },
  {
    id: "DP-28",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-28",
  },
  {
    id: "DP-29",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-29",
  },
  {
    id: "DP-30",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 0,
    itemLink: "/detail/DP-30",
  },
];

const imageSize = 100;
const gridGap = 16;
const baseGridHeight = 2 * (imageSize + gridGap);

const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${gridGap}px;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${imageSize}px);
  gap: ${gridGap}px;
  justify-content: space-between;
  width: 100%;
  font-size: 0;
  overflow-y: hidden;
  transition: height 0.3s ease-in-out;
`;

const Item = styled.li``;

const ExpandButtonWrapper = styled.div<{ type: "expand" | "collapse" }>`
  display: flex;
  justify-content: center;
  padding-top: ${({ type }) => (type === "expand" ? "0" : `${gridGap}px`)};
`;

const NearRecommends = () => {
  const gridRef = useRef<HTMLUListElement>(null);
  const [maxHeight, setMaxHeight] = useState(baseGridHeight);
  const [isExpand, setIsExpand] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);

  useEffect(() => {
    if (gridRef.current && gridRef.current.clientHeight > baseGridHeight) {
      setMaxHeight(gridRef.current.clientHeight);
      gridRef.current.style.height = `${baseGridHeight}px`;
      setShowExpandButton(true);
    }
  }, [items]);

  const handleClickExpandButton = useCallback(() => {
    if (gridRef.current) {
      gridRef.current.style.height = isExpand
        ? `${baseGridHeight}px`
        : `${maxHeight}px`;
      setIsExpand(!isExpand);
    }
  }, [maxHeight, isExpand]);

  return (
    <Component>
      <SectionTitle title="この写真と近いおすすめ" />
      <Content>
        <Grid ref={gridRef}>
          {items.map((item) => (
            <Item key={item.id}>
              <Link href={item.itemLink}>
                <Photo imageUrl={item.imageUrl} size="small" />
              </Link>
            </Item>
          ))}
        </Grid>
        {showExpandButton && (
          <ExpandButtonWrapper type={isExpand ? "collapse" : "expand"}>
            <ExpandButton
              type={isExpand ? "collapse" : "expand"}
              handleClickButton={handleClickExpandButton}
            />
          </ExpandButtonWrapper>
        )}
      </Content>
    </Component>
  );
};

export default NearRecommends;
