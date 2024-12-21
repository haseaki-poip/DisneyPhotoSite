import LoadingExtraPhoto from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingExtraPhoto> = {
  title: "Molecules/LoadingExtraPhoto",
  component: LoadingExtraPhoto,
};
export default meta;

export const Medium: StoryObj<typeof LoadingExtraPhoto> = {
  name: "medium",
  args: {
    size: "medium",
  },
};

export const Small: StoryObj<typeof LoadingExtraPhoto> = {
  name: "small",
  args: {
    size: "small",
  },
};

export const Large: StoryObj<typeof LoadingExtraPhoto> = {
  name: "large",
  args: {
    size: "large",
  },
};
