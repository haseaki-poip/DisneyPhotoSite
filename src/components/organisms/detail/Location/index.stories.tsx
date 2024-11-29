import Location from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Location> = {
  title: "Organisms/Detail/Location",
  component: Location,
};
export default meta;

export const Map: StoryObj<typeof Location> = {
  name: "map",
  args: {},
};
