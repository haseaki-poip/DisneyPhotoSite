import SectionTitle from "@/components/atoms/SectionTitle";
import RecentlyPhoto from "@/components/molecules/RecentlyPhoto";
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
    createdAt: new Date(Date.now() - 1000 * 60 * 30),
  },
  {
    id: "DP-2",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 90,
    itemLink: "/detail/DP-2",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 3),
  },
  {
    id: "DP-3",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 80,
    itemLink: "/detail/DP-3",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 6),
  },
  {
    id: "DP-4",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 70,
    itemLink: "/detail/DP-4",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12),
  },
  {
    id: "DP-5",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 60,
    itemLink: "/detail/DP-5",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
  },
  {
    id: "DP-6",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 50,
    itemLink: "/detail/DP-6",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
  },
  {
    id: "DP-7",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-7",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
  },
  {
    id: "DP-8",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 30,
    itemLink: "/detail/DP-8",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14),
  },
  {
    id: "DP-9",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 20,
    itemLink: "/detail/DP-9",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 28),
  },
  {
    id: "DP-10",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 10,
    itemLink: "/detail/DP-10",
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 56),
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

const RecentlySection = () => {
  return (
    <Component>
      <SectionTitle title="最近投稿されたフォトスポット" />
      <ListWrapper>
        <List>
          {items.map((item) => (
            <Link href={item.itemLink} key={item.id}>
              <RecentlyPhoto
                imageUrl={item.imageUrl}
                name={item.name}
                time={item.createdAt}
              />
            </Link>
          ))}
        </List>
      </ListWrapper>
    </Component>
  );
};

export default RecentlySection;
