export type ArchiveDocument = {
  number: string;
  title: string;
  code: string;
  description: string;
  href: string;
  keywords: string[];
};

export const archiveDocuments: ArchiveDocument[] = [
  {
    number: "01",
    title: "세계관",
    code: "WORLD",
    description:
      "최초의 게이트 출현 이후 변화한 세계와 잔존 인류의 현황에 관한 기록.",
    href: "/notice/world",
    keywords: [
      "세계관",
      "게이트",
      "인류",
      "서울",
      "부산",
      "제주",
      "잔존 인류",
      "문명 붕괴",
    ],
  },
  {
    number: "02",
    title: "게이트",
    code: "GATE",
    description:
      "현실과 이계를 연결하는 통로와 공략 규칙에 관한 공식 기록.",
    href: "/notice/gate",
    keywords: [
      "게이트",
      "균열",
      "이계",
      "던전",
      "공략",
      "마나",
      "레드 게이트",
    ],
  },
  {
    number: "03",
    title: "헌터",
    code: "HUNTER",
    description:
      "마나에 각성한 헌터의 등급과 능력, 활동 기준에 관한 기록.",
    href: "/notice/hunter",
    keywords: [
      "헌터",
      "각성자",
      "등급",
      "S급",
      "A급",
      "B급",
      "능력",
      "전투력",
    ],
  },
  {
    number: "04",
    title: "기관",
    code: "INSTITUTION",
    description:
      "대한민국 헌터협회와 중앙기록국에 관한 공식 기록.",
    href: "/notice/factions",
    keywords: [
      "기관",
      "협회",
      "헌터협회",
      "중앙기록국",
      "운영본부",
      "대응본부",
      "연구본부",
    ],
  },
  {
    number: "05",
    title: "마물",
    code: "MAGICAL BEAST",
    description:
      "이계에서 출현하는 마물의 분류와 위험성에 관한 기록.",
    href: "/notice/mamul",
    keywords: [
      "마물",
      "보스",
      "네임드",
      "잡졸",
      "S급 마물",
      "백두산",
      "후지산",
      "에베레스트",
      "디날리",
      "엘브루스",
    ],
  },
  {
    number: "06",
    title: "플레이어블 헌터",
    code: "PLAYABLE HUNTER",
    description:
      "플레이어가 직접 운용하는 헌터의 신원과 능력에 관한 기록.",
    href: "/notice/playable-hunter",
    keywords: [
      "플레이어블 헌터",
      "캐릭터",
      "프로필",
      "능력",
      "신체 능력",
      "인명부",
    ],
  },
  {
    number: "07",
    title: "가이드라인",
    code: "PLAYER GUIDELINE",
    description:
      "쾌적한 역극 진행을 위해 관리진이 제시하는 운영 규정.",
    href: "/notice/guideline",
    keywords: [
      "가이드라인",
      "규칙",
      "금지",
      "운영",
      "신체 능력",
      "능력 제한",
      "전투력",
      "프로필",
    ],
  },
];
