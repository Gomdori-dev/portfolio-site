import { pote } from "../data/pote";
import type { PortfolioLanguage } from "./portfolioChat";

// Uses only checked-in facts. This portfolio assistant does not call Gemini.
export function getPoteAnswer(question: string, language: PortfolioLanguage) {
  const text = question.toLowerCase().replace(/[^0-9a-z가-힣]+/g, "");
  const matches = (...words: string[]) => words.some((word) => text.includes(word));
  if (matches("몇명", "몇점", "몇개", "작가수", "작품수", "howmany", "count", "매출", "sales", "수익", "성과")) {
    return pote.status[language];
  }
  if (matches("스택", "기술", "구조", "stack", "technolog", "architect", "database", "데이터베이스", "db")) {
    return language === "en"
      ? `Pote uses ${pote.stack.join(", ")}. The public catalogue merges static works with approved database submissions. Gemini assists with review and translation; the operator approves publication. The portfolio chatbot itself uses local rules and does not call Gemini.`
      : `Pote는 ${pote.stack.join(", ")}를 사용합니다. 공개 카탈로그는 정적 작품과 승인된 DB 제출을 합쳐 제공합니다. Gemini는 검토·번역을 보조하고 운영자가 공개를 승인합니다. 이 포트폴리오 챗봇 자체는 로컬 규칙으로 답하며 Gemini를 호출하지 않습니다.`;
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
      ? "Pote receives purchase inquiries through Resend mail. Buyers pay artists directly; Pote does not hold purchase funds. Shipping details and costs are agreed before payment. Inquiry tracking records mail-provider acceptance separately from delivery and completed sales. Integrated checkout and automated settlement are not implemented."
      : "Pote는 Resend 메일로 구매 문의를 받습니다. 구매자가 작가에게 직접 입금하며 Pote가 대금을 보관하지 않습니다. 배송 범위와 비용은 입금 전에 협의합니다. 문의 기록은 메일 제공자의 발송 수락 기준이며 도착·판매 완료와 구분합니다. 사이트 내 통합 결제·자동 정산은 구현하지 않았습니다.";
  }
  if (matches("다음", "계획", "예정", "미구현", "next", "plan", "future")) {
    return pote.next.map((item) => item[language]).join(language === "en" ? "; " : ", ");
  }
  if (matches("왜", "이유", "계기", "과정", "구현", "제작", "process", "why", "build", "implement")) {
    return `${pote.outcome[language]} ${language === "en" ? "The build process covers artist self-service, human approval, AI assistance, resilient exhibition snapshots, image delivery, and inquiry tracking." : "제작 과정에는 작가 직접 등록, 운영자 승인, AI 보조, 전시 스냅샷 실패 대응, 이미지 전송과 문의 추적의 판단을 정리했습니다."}`;
  }
  return `${pote.description[language]} ${pote.outcome[language]} ${pote.liveHref}`;
}
