import ListTemplate from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { RootState, rootReducer } from "@/store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

const mockData = [
  {
    id: "DP-1",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 100,
    itemLink: "/detail/DP-1",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "DP-2",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 90,
    itemLink: "/detail/DP-2",
    createdAt: new Date(Date.now() - 23 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "DP-3",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 80,
    itemLink: "/detail/DP-3",
    createdAt: new Date(Date.now() - 22 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "DP-4",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 70,
    itemLink: "/detail/DP-4",
    createdAt: new Date(Date.now() - 21 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "DP-5",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 60,
    itemLink: "/detail/DP-5",
    createdAt: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "DP-6",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 50,
    itemLink: "/detail/DP-6",
    createdAt: new Date(Date.now() - 19 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "DP-7",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-7",
    createdAt: new Date(Date.now() - 18 * 60 * 60 * 1000).toISOString(),
  },
];

const mockAreaData = {
  land: [
    {
      id: "AL1",
      name: "ワールドバザール",
    },
    {
      id: "AL2",
      name: "シンデレラ城前",
    },
    {
      id: "AL3",
      name: "アドベンチャーランド",
    },
    {
      id: "AL4",
      name: "ウエスタンランド",
    },
    {
      id: "AL5",
      name: "クリッターカントリー",
    },
    {
      id: "AL6",
      name: "ファンタジーランド",
    },
    {
      id: "AL7",
      name: "トゥーンタウン",
    },
    {
      id: "AL8",
      name: "トゥモローランド",
    },
    {
      id: "AL9",
      name: "その他",
    },
  ],
  sea: [
    {
      id: "AS1",
      name: "メディテレーニアンハーバー",
    },
    {
      id: "AS2",
      name: "アメリカンウォーターフロント",
    },
    {
      id: "AS3",
      name: "ポートディスカバリー",
    },
    {
      id: "AS4",
      name: "ロストリバーデルタ",
    },
    {
      id: "AS5",
      name: "ファンタジースプリングス",
    },
    {
      id: "AS6",
      name: "アラビアンコースト",
    },
    {
      id: "AS7",
      name: "マーメイドラグーン",
    },
    {
      id: "AS8",
      name: "ミステリアスアイランド",
    },
    {
      id: "AS9",
      name: "その他",
    },
  ],
};

const mockStoreDefault = configureStore({
  reducer: rootReducer,
  preloadedState: {
    likedRecommends: {
      results: mockData,
      isLoading: false,
      isError: false,
    },
    recentlyRecommends: {
      results: mockData,
      isLoading: false,
      isError: false,
    },
    areaPhotos: {
      results: mockData,
      isLoading: false,
      isError: false,
    },
    areas: {
      result: mockAreaData,
      isError: false,
    },
  } as unknown as RootState,
});

const meta: Meta<typeof ListTemplate> = {
  title: "Templates/list",
  component: ListTemplate,
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

export const Default: StoryObj<typeof ListTemplate> = {
  name: "default",
  args: {},
};

// ローディング中の場合
const mockStoreLoading = configureStore({
  reducer: rootReducer,
  preloadedState: {
    likedRecommends: {
      results: [] as PhotoDetail[],
      isLoading: true,
      isError: false,
    },
    recentlyRecommends: {
      results: [] as PhotoDetail[],
      isLoading: true,
      isError: false,
    },
    areaPhotos: {
      results: [] as PhotoDetail[],
      isLoading: true,
      isError: false,
    },
    areas: {
      result: mockAreaData,
      isError: false,
    },
  } as RootState,
});

export const Loading: StoryObj<typeof ListTemplate> = {
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
    likedRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: true,
    },
    recentlyRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: true,
    },
    areaPhotos: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: true,
    },
    areas: {
      result: mockAreaData,
      isError: true,
    },
  } as RootState,
});

export const Error: StoryObj<typeof ListTemplate> = {
  name: "error",
  decorators: [
    (Story) => (
      <Provider store={mockStoreError}>
        <Story />
      </Provider>
    ),
  ],
};

// 結果0件の場合
const mockStoreEmpty = configureStore({
  reducer: rootReducer,
  preloadedState: {
    likedRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: false,
    },
    recentlyRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: false,
    },
    areaPhotos: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: false,
    },
    areas: {
      result: mockAreaData,
      isError: false,
    },
  } as RootState,
});

export const Empty: StoryObj<typeof ListTemplate> = {
  name: "empty",
  decorators: [
    (Story) => (
      <Provider store={mockStoreEmpty}>
        <Story />
      </Provider>
    ),
  ],
};
