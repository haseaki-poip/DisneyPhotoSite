import LoadingPhoto from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingPhoto> = {
  title: "Atoms/Photo/Loading",
  component: LoadingPhoto,
};
export default meta;

export const Medium: StoryObj<typeof LoadingPhoto> = {
  name: "medium",
  args: {
    size: "medium",
  },
};

export const Small: StoryObj<typeof LoadingPhoto> = {
  name: "small",
  args: {
    size: "small",
  },
};

export const Large: StoryObj<typeof LoadingPhoto> = {
  name: "large",
  args: {
    size: "large",
  },
};
