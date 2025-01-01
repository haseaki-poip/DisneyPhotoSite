import StyledLink from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StyledLink> = {
  title: "Atoms/StyledLink",
  component: StyledLink,
};
export default meta;

export const Default: StoryObj<typeof StyledLink> = {
  name: "default",
  args: {
    children: "投稿する",
    href: "/",
  },
};
