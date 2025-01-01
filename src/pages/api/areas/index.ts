import type { NextApiRequest, NextApiResponse } from "next";

import { AreaData } from "@/store/type";

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

interface ErrorResponse {
  message: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<AreaData | ErrorResponse>
) {
  res.status(200).json(mockAreaData);
  // res.status(500).json({
  //   message: "Internal Server Error",
  // });
}
