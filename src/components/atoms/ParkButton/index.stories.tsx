import ParkButton from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ParkButton> = {
  title: "Atoms/ParkButton",
  component: ParkButton,
};
export default meta;

export const Land: StoryObj<typeof ParkButton> = {
  name: "ディズニーランド",
  args: {
    park: "land",
    handleClickButton: () => {},
  },
};

export const Sea: StoryObj<typeof ParkButton> = {
  name: "ディズニーシー",
  args: {
    park: "sea",
    handleClickButton: () => {},
  },
};
