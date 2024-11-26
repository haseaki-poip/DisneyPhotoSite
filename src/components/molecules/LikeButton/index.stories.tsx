import LikeButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LikeButton> = {
  title: "Molecules/LikeButton",
  component: LikeButton,
};
export default meta;

export const Default: StoryObj<typeof LikeButton> = {
  name: "default",
  args: {
    isActive: false,
    likeCount: 100,
    onClickButton: () => {},
  },
};

export const Activet: StoryObj<typeof LikeButton> = {
  name: "active",
  args: {
    isActive: true,
    likeCount: 100,
    onClickButton: () => {},
  },
};
