import SelectArea from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof SelectArea> = {
  title: "Molecules/SelectArea",
  component: SelectArea,
};
export default meta;

export const Default: StoryObj<typeof SelectArea> = {
  name: "default",
  args: {
    areas: [
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
    selectedAreaId: "AL1",
    handleClickButton: () => {},
  },
};
