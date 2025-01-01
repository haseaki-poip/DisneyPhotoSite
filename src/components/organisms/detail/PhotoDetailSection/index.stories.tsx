import { Provider } from "react-redux";
import PhotoDetailSection from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import { RootState } from "@/store/store";
import { rootReducer } from "@/store/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

// モックデータ
const mockStoreDefault = configureStore({
  reducer: rootReducer,
  preloadedState: {
    photoDetail: {
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
    },
  } as unknown as RootState,
});

const meta: Meta<typeof PhotoDetailSection> = {
  title: "Organisms/Detail/PhotoDetailSection",
  component: PhotoDetailSection,
  decorators: [
    (Story) => (
      <Provider store={mockStoreDefault}>
        <Story />
      </Provider>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof PhotoDetailSection> = {
  name: "default",
  args: {},
};
