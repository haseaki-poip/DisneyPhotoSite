import ExpandButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ExpandButton> = {
  title: "Atoms/ExpandButton",
  component: ExpandButton,
};
export default meta;

export const Expand: StoryObj<typeof ExpandButton> = {
  name: "expand",
  args: {
    type: "expand",
    handleClickButton: () => {},
  },
};

export const Collapse: StoryObj<typeof ExpandButton> = {
  name: "collapse",
  args: {
    type: "collapse",
    handleClickButton: () => {},
  },
};
