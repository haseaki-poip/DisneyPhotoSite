import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ListTemplate from "@/components/templates/list";
import { csrLikedRecommend } from "@/store/LikedRemmends/likedRecommendSlice";
import { AppDispatch } from "@/store/store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(csrLikedRecommend("LIKE"));
  }, [dispatch]);

  return (
    <>
      <ListTemplate />
    </>
  );
}
