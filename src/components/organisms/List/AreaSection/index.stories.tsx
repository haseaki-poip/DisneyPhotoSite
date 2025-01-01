import { RootState } from "@/store/store";
import AreaSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { rootReducer } from "@/store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

const meta: Meta<typeof AreaSection> = {
  title: "Organisms/List/AreaSection",
  component: AreaSection,
  decorators: [
    (Story) => (
      <Provider store={mockStoreDefault}>
        <Story />
      </Provider>
    ),
  ],
};
export default meta;

const mockData = [
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
    like: 40,
    itemLink: "/detail/DP-8",
  },
  {
    id: "DP-9",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-9",
  },
  {
    id: "DP-10",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-10",
  },
  {
    id: "DP-11",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-11",
  },
  {
    id: "DP-12",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-12",
  },
  {
    id: "DP-13",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-13",
  },
  {
    id: "DP-14",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-14",
  },
  {
    id: "DP-15",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-15",
  },
  {
    id: "DP-16",
    imageUrl:
      "https://prod-files-secure.s3.us-west-2.amazonaws.com/example.png",
    name: "シンデレラ城",
    like: 40,
    itemLink: "/detail/DP-16",
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

export const Default: StoryObj<typeof AreaSection> = {
  name: "default",
  args: {},
};

// スクロールなしの場合
const mockStoreNoScroll = configureStore({
  reducer: rootReducer,
  preloadedState: {
    areaPhotos: {
      results: mockData.slice(0, 4),
      isLoading: false,
      isError: false,
    },
    areas: {
      result: mockAreaData,
      isError: false,
    },
  } as unknown as RootState,
});

export const NoScroll: StoryObj<typeof AreaSection> = {
  name: "noScroll",
  decorators: [
    (Story) => (
      <Provider store={mockStoreNoScroll}>
        <Story />
      </Provider>
    ),
  ],
  args: {},
};

// ローディング中の場合
const mockStoreLoading = configureStore({
  reducer: rootReducer,
  preloadedState: {
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

export const Loading: StoryObj<typeof AreaSection> = {
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

export const Error: StoryObj<typeof AreaSection> = {
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

// 結果0件の場合
const mockStoreEmpty = configureStore({
  reducer: rootReducer,
  preloadedState: {
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

export const Empty: StoryObj<typeof AreaSection> = {
  name: "empty",
  decorators: [
    (Story) => (
      <Provider store={mockStoreEmpty}>
        <Story />
      </Provider>
    ),
  ],
  args: {},
};
