import Time from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Time> = {
  title: "Atoms/Time",
  component: Time,
};
export default meta;

export const Hour: StoryObj<typeof Time> = {
  name: "one hour ago",
  args: {
    time: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
  },
};

export const Day: StoryObj<typeof Time> = {
  name: "one day ago",
  args: {
    time: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
};
