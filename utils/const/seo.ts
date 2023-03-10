type MetaNames = "TITLE" | "DESC" | "KEYWORDS";

export const META_CONTENT: {
  [pagePath: string]: Record<MetaNames, string | Array<string>>;
} = {
  "/_error": {
    TITLE: "Error",
    DESC: "에러 페이지",
    KEYWORDS: [],
  },
  "/": {
    TITLE: "Home",
    DESC: "현재 페이지는 홈 입니다.",
    KEYWORDS: [],
  },
  "/profile": {
    TITLE: "프로필",
    DESC: "현재 페이지는 프로필 입니다.",
    KEYWORDS: [],
  },
};
