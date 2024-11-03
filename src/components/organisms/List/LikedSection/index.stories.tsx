import LikedSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LikedSection> = {
  title: "Organisms/List/LikedSection",
  component: LikedSection,
};
export default meta;

const items = [
  {
    id: "DP-1",
    imageUrl: "",
    name: "シンデレラ城",
    like: 100,
    itemLink: "/detail/DP-1",
  },
  {
    id: "DP-2",
    imageUrl: "",
    name: "シンデレラ城",
    like: 90,
    itemLink: "/detail/DP-2",
  },
  {
    id: "DP-3",
    imageUrl: "",
    name: "シンデレラ城",
    like: 80,
    itemLink: "/detail/DP-3",
  },
  {
    id: "DP-4",
    imageUrl: "",
    name: "シンデレラ城",
    like: 70,
    itemLink: "/detail/DP-4",
  },
  {
    id: "DP-5",
    imageUrl: "",
    name: "シンデレラ城",
    like: 60,
    itemLink: "/detail/DP-5",
  },
  {
    id: "DP-6",
    imageUrl: "",
    name: "シンデレラ城",
    like: 50,
    itemLink: "/detail/DP-6",
  },
  {
    id: "DP-7",
    imageUrl: "",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-7",
  },
];
export const Default: StoryObj<typeof LikedSection> = {
  name: "人気のフォトスポット",
  args: {
    items: items,
  },
};
