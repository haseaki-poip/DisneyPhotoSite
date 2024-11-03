import SectionTitle from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SectionTitle> = {
  title: "Atoms/SectionTitle",
  component: SectionTitle,
};
export default meta;

export const Default: StoryObj<typeof SectionTitle> = {
  name: "デフォルト",
  args: {
    title: "人気のフォトスポット",
  },
};
