import PhotoDetailSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PhotoDetailSection> = {
  title: "Organisms/Detail/PhotoDetail",
  component: PhotoDetailSection,
};
export default meta;

// モックデータ
const mockPhotoDetail = {
  id: "DP-1",
  title: "美女と野獣の城",
  description:
    "美女と野獣エリアにあるお城の写真です。昼間は鮮やかなピンクと紫色ですが、夜になると魔女に呪いの魔法にかけられたかのような青色のお城へと変化します。Qラインから撮るか、アトラクション後の帰り道で撮るのがおすすめです。",
  like: 100,
  imageUrl: "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
  area: {
    id: "area-1",
    name: "美女と野獣エリア",
  },
  location: {
    longitude: 0,
    latitude: 0,
  },
  park: "land",
  isNight: false,
  createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
};

export const Default: StoryObj<typeof PhotoDetailSection> = {
  name: "写真詳細",
  args: {
    photoDetail: mockPhotoDetail,
  },
};
