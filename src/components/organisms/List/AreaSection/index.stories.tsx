import AreaSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AreaSection> = {
  title: "Organisms/List/AreaSection",
  component: AreaSection,
};
export default meta;

export const Default: StoryObj<typeof AreaSection> = {
  name: "エリア別フォトスポット",
  args: {},
};
