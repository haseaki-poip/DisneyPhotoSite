import PhotoDetail from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PhotoDetail> = {
  title: "Organisms/Detail/PhotoDetail",
  component: PhotoDetail,
};
export default meta;

export const Default: StoryObj<typeof PhotoDetail> = {
  name: "写真詳細",
  args: {},
};
