import SectionTitle from "@/components/atoms/SectionTitle";
import LikedPhoto from "@/components/molecules/LikedPhoto";
import { ListWrapper } from "@/components/templates/list";
import Link from "next/link";
import styled from "styled-components";

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
];

const Component = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const List = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// storeからデータを取得するようにする
const LikedSection = () => {
  const slicedItems = items.slice(1);

  return (
    <Component>
      <SectionTitle title="人気のフォトスポット" />
      <ListWrapper>
        <List>
          <Link href={items[0].itemLink}>
            <LikedPhoto
              imageUrl={items[0].imageUrl}
              name={items[0].name}
              numOfLike={items[0].like}
              size="large"
            />
          </Link>

          {slicedItems.map((item) => (
            <Link href={item.itemLink} key={item.id}>
              <LikedPhoto
                imageUrl={item.imageUrl}
                name={item.name}
                numOfLike={item.like}
              />
            </Link>
          ))}
        </List>
      </ListWrapper>
    </Component>
  );
};

export default LikedSection;
