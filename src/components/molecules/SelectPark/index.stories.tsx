import SelectPark from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectPark> = {
  title: "Molecules/SelectPark",
  component: SelectPark,
};
export default meta;

export const Default: StoryObj<typeof SelectPark> = {
  name: "default",
  args: {
    selectedPark: "land",
    handleClickButton: () => {},
  },
};
