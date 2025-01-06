import LikedSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { RootState, rootReducer } from "@/store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

const mockStoreDefault = configureStore({
  reducer: rootReducer,
  preloadedState: {
    likedRecommend: {
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
      ],
      isLoading: false,
      isError: false,
    },
  } as unknown as RootState,
});

const meta: Meta<typeof LikedSection> = {
  title: "Organisms/List/LikedSection",
  component: LikedSection,
  decorators: [
    (Story) => (
      <Provider store={mockStoreDefault}>
        <Story />
      </Provider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof LikedSection> = {
  name: "default",
  args: {},
};

// ローディング中の場合
const mockStoreLoading = configureStore({
  reducer: rootReducer,
  preloadedState: {
    likedRecommend: {
      results: [] as PhotoDetail[],
      isLoading: true,
      isError: false,
    },
  } as RootState,
});

export const Loading: StoryObj<typeof LikedSection> = {
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
    likedRecommend: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: true,
    },
  } as RootState,
});

export const Error: StoryObj<typeof LikedSection> = {
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
    likedRecommend: {
      results: [] as PhotoDetail[],
      isLoading: false,
      isError: false,
    },
  } as RootState,
});

export const Empty: StoryObj<typeof LikedSection> = {
  name: "empty",
  decorators: [
    (Story) => (
      <Provider store={mockStoreEmpty}>
        <Story />
      </Provider>
    ),
  ],
};
