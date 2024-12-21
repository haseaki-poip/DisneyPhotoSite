import { PhotoDetail } from "./PhotoDetail/photoDetailSlice";

export type PhotoListData = {
  results: PhotoDetail[];
};

export type ListParams = {
  sort?: SortType;
  areaId?: string;
  isNight?: string;
};

export type SortType = "NEW" | "LIKE";
