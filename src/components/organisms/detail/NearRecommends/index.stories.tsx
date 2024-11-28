import NearRecommends from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NearRecommends> = {
  title: "Organisms/Detail/NearRecommends",
  component: NearRecommends,
};
export default meta;

export const Default: StoryObj<typeof NearRecommends> = {
  name: "写真近くのおすすめ",
  args: {},
};
