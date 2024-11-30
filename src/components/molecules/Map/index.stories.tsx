import Map from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Map> = {
  title: "Molecules/Map",
  component: Map,
};
export default meta;

const StoryWrapper = (Story: any) => (
  <div style={{ height: "400px" }}>
    <Story />
  </div>
);

export const Default: StoryObj<typeof Map> = {
  name: "default",
  args: {
    position: [35.632381, 139.880577],
  },
  decorators: [StoryWrapper],
};
