import type { NextApiRequest, NextApiResponse } from "next";

import { PhotoDetail } from "@/store/PhotoDetail/photoDetailSlice";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PhotoDetail>
) {
  res.status(200).json({
    id: "DP-1",
    title: "クリスマス期間中のシンデレラ城",
    description:
      "ランドの象徴であるシンデレラ城です。昼に取っても良いですし、夜にとっても美しいです。夕方に撮る時が意外と赤い夕陽が反射して映えますが、キャッスルプロジェクション上映期間中は封鎖されているためトゥモローランド側の橋で横から撮ることをお勧めします。",
    imageUrl: "https://example.com/image.jpg",
    location: {
      longitude: 35.632381,
      latitude: 139.880577,
    },
    area: {
      id: "a1",
      name: "シンデレラ城前",
    },
    like: 10,
    park: "land",
    isNight: false,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  });
}
