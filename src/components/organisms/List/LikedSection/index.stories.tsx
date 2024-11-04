import LikedSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LikedSection> = {
  title: "Organisms/List/LikedSection",
  component: LikedSection,
};
export default meta;

export const Default: StoryObj<typeof LikedSection> = {
  name: "人気のフォトスポット",
  args: {},
};
