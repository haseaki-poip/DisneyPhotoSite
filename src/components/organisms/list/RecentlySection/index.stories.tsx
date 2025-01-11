import { rootReducer } from "@/store/rootReducer";
import RecentlySection from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Provider } from "react-redux";
import { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

const mockStoreDefault = configureStore({
  reducer: rootReducer,
  preloadedState: {
    recentlyRecommends: {
      results: [
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
      ],
      isLoading: false,
      isError: false,
    },
  } as unknown as RootState,
});

const meta: Meta<typeof RecentlySection> = {
  title: "Organisms/List/RecentlySection",
  component: RecentlySection,
  decorators: [
    (Story) => (
      <Provider store={mockStoreDefault}>
        <Story />
      </Provider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof RecentlySection> = {
  name: "default",
  args: {},
};

// ローディング中の場合
const mockStoreLoading = configureStore({
  reducer: rootReducer,
  preloadedState: {
    recentlyRecommends: {
      results: [] as PhotoDetail[],
      isLoading: true,
      isError: false,
    },
  } as RootState,
});

export const Loading: StoryObj<typeof RecentlySection> = {
  name: "loading",
  decorators: [
    (Story) => (
      <Provider store={mockStoreLoading}>
        <Story />
      </Provider>
    ),
  ],
  args: {
    areaId: "test",
  },
};

// エラーの場合
const mockStoreError = configureStore({
  reducer: rootReducer,
  preloadedState: {
    recentlyRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: true,
    },
  } as RootState,
});

export const Error: StoryObj<typeof RecentlySection> = {
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
    recentlyRecommends: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: false,
    },
  } as RootState,
});

export const Empty: StoryObj<typeof RecentlySection> = {
  name: "empty",
  decorators: [
    (Story) => (
      <Provider store={mockStoreEmpty}>
        <Story />
      </Provider>
    ),
  ],
};
