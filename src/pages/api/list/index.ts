import type { NextApiRequest, NextApiResponse } from "next";

import { PhotoListData } from "@/store/type";

const mockDetail = {
  id: "DP-1",
  title: "クリスマス期間中のシンデレラ城",
  name: "シンデレラ城",
  description:
    "ランドの象徴であるシンデレラ城です。昼に取っても良いですし、夜にとっても美しいです。夕方に撮る時が意外と赤い夕陽が反射して映えますが、キャッスルプロジェクション上映期間中は封鎖されているためトゥモローランド側の橋で横から撮ることをお勧めします。",
  imageUrl: "https://example.com/image.jpg",
  location: {
    longitude: 35.632381,
    latitude: 139.880577,
  },
  area: {
    id: "AL1",
    name: "シンデレラ城前",
  },
  like: 10,
  park: "land",
  isNight: false,
  createdAt: "createdAt",
};

interface IQuery {
  sort?: "NEW" | "LIKE";
  areaId?: string;
  isNight?: string;
  limit?: number;
}

interface ErrorResponse {
  message: string;
}

export default function handler(
  req: NextApiRequest & { query: IQuery },
  res: NextApiResponse<PhotoListData | ErrorResponse>
) {
  const { sort, areaId, isNight, limit = 7 } = req.query;

  let results = Array.from({ length: limit }, (_, index) => ({
    ...mockDetail,
    id: `DP-${index + 1}`,
  }));

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  wait(2000).then(() => {
    res.status(200).json({
      results: results,
    });
    // res.status(500).json({
    //   message: "Internal Server Error",
    // });
  });
}
