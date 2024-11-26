import React from "react";
import Photo from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Photo> = {
  title: "Atoms/Photo",
  component: Photo,
};
export default meta;

export const Medium: StoryObj<typeof Photo> = {
  name: "medium",
  args: {
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/9ae780fb-2607-4610-bbe0-79fa5836dfe9/90c7d3a1-db79-4e41-953a-3afa2eb12001/BeautyAndBeast.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241103T024352Z&X-Amz-Expires=3600&X-Amz-Signature=29f970355eb82d7caca288a11325e4c56fa19dea31f5ab05e6e0e7f3ec35524e&X-Amz-SignedHeaders=host&x-id=GetObject",
    name: "シンデレラ城",
    size: "medium",
  },
};

export const Small: StoryObj<typeof Photo> = {
  name: "small",
  args: {
    ...Medium.args,
    size: "small",
  },
};

export const Large: StoryObj<typeof Photo> = {
  name: "large",
  args: {
    ...Medium.args,
    size: "large",
  },
};
