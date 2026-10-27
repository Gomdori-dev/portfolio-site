import { pote } from "../data/pote";
import type { PortfolioLanguage } from "./portfolioChat";

// Uses only checked-in facts. This portfolio assistant does not call Gemini.
export function getPoteAnswer(question: string, language: PortfolioLanguage) {
  const text = question.toLowerCase().replace(/[^0-9a-z가-힣]+/g, "");
  const matches = (...words: string[]) => words.some((word) => text.includes(word));
  if (matches("창업", "도전", "참여", "증명서", "startup", "certificate")) {
    return `${pote.startupExperience.title[language]} · ${pote.startupExperience.record[language]}. ${pote.startupExperience.summary[language]} ${pote.startupExperience.evidence[language]}.`;
  }
  if (matches("몇명", "몇점", "몇개", "작가수", "작품수", "howmany", "count", "매출", "sales", "수익", "성과")) {
    return pote.status[language];
  }
  if (matches("스택", "기술", "구조", "stack", "technolog", "architect", "database", "데이터베이스", "db")) {
    return language === "en"
      ? `Pote uses ${pote.stack.join(", ")}. ${pote.status.en}`
      : `Pote는 ${pote.stack.join(", ")}를 사용합니다. ${pote.status.kr}`;
  }
  if (matches("전시", "스냅샷", "exhibition", "snapshot", "kcisa", "actions")) {
    return pote.steps[3].decision[language];
  }
  if (matches("분석", "퍼널", "전환", "통계", "analytics", "funnel", "conversion", "tracking", "추적")) {
    return pote.steps[5].decision[language];
  }
  if (/\bai\b/i.test(question) || matches("자동", "gemini", "제미나이", "번역", "검토", "심사", "승인", "approv", "review", "translat")) {
    return pote.steps[2].decision[language];
  }
  if (matches("포털", "업로드", "등록", "수정", "portal", "upload", "submission", "edit", "artist")) {
    return pote.steps[1].decision[language];
  }
  if (matches("이미지", "사진", "image", "photo", "webp", "sharp", "cdn")) {
    return pote.steps[4].decision[language];
  }
  if (matches("결제", "배송", "구매", "문의", "메일", "payment", "shipping", "purchase", "inquir", "mail")) {
    return language === "en"
      ? "Visitors can explore artwork and send inquiries. Internal payment, shipping, and settlement policies are not published in this portfolio."
      : "방문자가 작품을 살펴보고 구매 문의를 보낼 수 있습니다. 결제·배송·정산의 내부 운영 정책은 포트폴리오에 공개하지 않습니다.";
  }
  if (matches("다음", "계획", "예정", "미구현", "next", "plan", "future")) {
    return pote.next.map((item) => item[language]).join(language === "en" ? "; " : ", ");
  }
  if (matches("왜", "이유", "계기", "과정", "구현", "제작", "process", "why", "build", "implement")) {
    return `${pote.outcome[language]} ${language === "en" ? "The build process covers user needs, core features, AI tool assistance, and usability." : "제작 과정에는 사용자 문제, 핵심 기능, AI 도구 활용과 사용성 개선을 정리했습니다."}`;
  }
  return `${pote.description[language]} ${pote.outcome[language]} ${pote.liveHref}`;
}
