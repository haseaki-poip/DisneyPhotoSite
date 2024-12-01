import Palette from "@/components/styles/Palette";
import ErrorMessage from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import styled from "styled-components";
const meta: Meta<typeof ErrorMessage> = {
  title: "Atoms/ErrorMessage",
  component: ErrorMessage,
};
export default meta;

const Link = styled.a`
  color: ${Palette.blue.main};
`;

const PostLink = () => {
  return <Link href="#">投稿する</Link>;
};

export const Default: StoryObj<typeof ErrorMessage> = {
  name: "default",
  args: {
    message:
      "この条件の写真が見つかりませんでした。あなたが投稿してみませんか？",
    actionContent: <PostLink />,
  },
};
