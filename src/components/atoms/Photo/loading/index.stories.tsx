import Loading from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loading> = {
  title: "Atoms/Photo/Loading",
  component: Loading,
};
export default meta;

export const Medium: StoryObj<typeof Loading> = {
  name: "medium",
  args: {
    size: "medium",
  },
};

export const Small: StoryObj<typeof Loading> = {
  name: "small",
  args: {
    size: "small",
  },
};

export const Large: StoryObj<typeof Loading> = {
  name: "large",
  args: {
    size: "large",
  },
};
