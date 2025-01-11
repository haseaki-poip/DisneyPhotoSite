import { rootReducer, RootState } from "@/store/rootReducer";
import DetailTemplate from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

const mockPhotoDetail = {
  result: {
    id: "DP-1",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    title: "シンデレラ城",
    like: 100,
    itemLink: "/detail/DP-1",
    location: {
      latitude: 35.632381,
      longitude: 139.880577,
    },
    area: {
      id: "AL2",
      name: "シンデレラ城前",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    description:
      "ランドの象徴であるシンデレラ城です。昼に取っても良いですし、夜にとっても美しいです。夕方に撮る時が意外と赤い夕陽が反射して映えますが、キャッスルプロジェクション上映期間中は封鎖されているためトゥモローランド側の橋で横から撮ることをお勧めします。",
  },
  isError: false,
};

const mockStoreDefault = configureStore({
  reducer: rootReducer,
  preloadedState: {
    photoDetail: mockPhotoDetail,
    nearRecommends: {
      results: [
        {
          id: "DP-1",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 100,
          itemLink: "/detail/DP-1",
        },
        {
          id: "DP-2",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 90,
          itemLink: "/detail/DP-2",
        },
        {
          id: "DP-3",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 80,
          itemLink: "/detail/DP-3",
        },
        {
          id: "DP-4",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 70,
          itemLink: "/detail/DP-4",
        },
        {
          id: "DP-5",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 60,
          itemLink: "/detail/DP-5",
        },
        {
          id: "DP-6",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 50,
          itemLink: "/detail/DP-6",
        },
        {
          id: "DP-7",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 40,
          itemLink: "/detail/DP-7",
        },
        {
          id: "DP-8",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 30,
          itemLink: "/detail/DP-8",
        },
        {
          id: "DP-9",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 20,
          itemLink: "/detail/DP-9",
        },
        {
          id: "DP-10",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 10,
          itemLink: "/detail/DP-10",
        },
        {
          id: "DP-11",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-11",
        },
        {
          id: "DP-12",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-12",
        },
        {
          id: "DP-13",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-13",
        },
        {
          id: "DP-14",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-14",
        },
        {
          id: "DP-15",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-15",
        },
        {
          id: "DP-16",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-16",
        },
        {
          id: "DP-17",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-17",
        },
        {
          id: "DP-18",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-18",
        },
        {
          id: "DP-19",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-19",
        },
        {
          id: "DP-20",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-20",
        },
        {
          id: "DP-21",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-21",
        },
        {
          id: "DP-22",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-22",
        },
        {
          id: "DP-23",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-23",
        },
        {
          id: "DP-24",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-24",
        },
        {
          id: "DP-25",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-25",
        },
        {
          id: "DP-26",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-26",
        },
        {
          id: "DP-27",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-27",
        },
        {
          id: "DP-28",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-28",
        },
        {
          id: "DP-29",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-29",
        },
        {
          id: "DP-30",
          imageUrl:
            "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
          name: "シンデレラ城",
          like: 0,
          itemLink: "/detail/DP-30",
        },
      ],
      isLoading: false,
      isError: false,
    },
  } as unknown as RootState,
});

const meta: Meta<typeof DetailTemplate> = {
  title: "Templates/detail",
  component: DetailTemplate,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Provider store={mockStoreDefault}>
        <Story />
      </Provider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof DetailTemplate> = {
  name: "default",
  args: {},
};

// ローディング中の場合
const mockStoreLoading = configureStore({
  reducer: rootReducer,
  preloadedState: {
    photoDetail: mockPhotoDetail,
    nearRecommends: {
      results: [] as PhotoDetail[],
      isLoading: true,
      isError: false,
    },
  } as unknown as RootState,
});

export const Loading: StoryObj<typeof DetailTemplate> = {
  name: "loading",
  decorators: [
    (Story) => (
      <Provider store={mockStoreLoading}>
        <Story />
      </Provider>
    ),
  ],
  args: {},
};

// エラーの場合
const mockStoreError = configureStore({
  reducer: rootReducer,
  preloadedState: {
    photoDetail: mockPhotoDetail,
    nearRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: true,
    },
  } as unknown as RootState,
});

export const Error: StoryObj<typeof DetailTemplate> = {
  name: "error",
  decorators: [
    (Story) => (
      <Provider store={mockStoreError}>
        <Story />
      </Provider>
    ),
  ],
  args: {},
};
