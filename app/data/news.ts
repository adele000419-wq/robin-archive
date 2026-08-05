export type HunterNewsCategory =
  | "속보"
  | "협회"
  | "문서"
  | "운영";

export type HunterNewsItem = {
  category: HunterNewsCategory;
  message: string;
};

export const hunterNews: HunterNewsItem[] = [
  {
    category: "속보",
    message: "백두산 인근에서 대규모 마력 반응이 감지되었습니다.",
  },
  {
    category: "협회",
    message: "신규 플레이어블 가이드라인이 공개되었습니다.",
  },
  {
    category: "문서",
    message: "마물 문서가 추가되었습니다.",
  },
];