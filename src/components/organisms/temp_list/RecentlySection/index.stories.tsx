import RecentlySection from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RecentlySection> = {
  title: "Organisms/List/RecentlySection",
  component: RecentlySection,
};
export default meta;

export const Default: StoryObj<typeof RecentlySection> = {
  name: "最近投稿されたフォトスポット",
  args: {},
};
