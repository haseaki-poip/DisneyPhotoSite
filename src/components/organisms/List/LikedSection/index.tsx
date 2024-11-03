import SectionTitle from "@/components/atoms/SectionTitle";
import LikedPhoto from "@/components/molecules/LikedPhoto";
import Link from "next/link";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const List = styled.div`
  display: flex;
  gap: 16px;
  align-items: end;
`;

// Todo: storeでitemの型の定義をして、ここに渡す
type Props = {
  items: {
    id: string;
    imageUrl: string;
    name: string;
    like: number;
    itemLink: string;
  }[];
};

const LikedSection = ({ items }: Props) => {
  const slicedItems = items.slice(1);

  return (
    <Component>
      <SectionTitle title="人気のフォトスポット" />
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
    </Component>
  );
};

export default LikedSection;
