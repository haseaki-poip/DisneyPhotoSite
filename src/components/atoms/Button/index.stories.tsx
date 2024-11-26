import Button from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  name: "Default Button",
  args: {
    children: "同じ写真を投稿する",
  },
};
