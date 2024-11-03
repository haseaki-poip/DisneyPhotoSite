import RadioButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioButton> = {
  title: "Atoms/RadioButton",
  component: RadioButton,
};
export default meta;

export const Default: StoryObj<typeof RadioButton> = {
  name: "デフォルト",
  args: {
    label: "シンデレラ城前",
    isChecked: false,
    handleCheckButton: () => {},
  },
};

export const Active: StoryObj<typeof RadioButton> = {
  name: "active",
  args: {
    label: "シンデレラ城前",
    isChecked: true,
    handleCheckButton: () => {},
  },
};
