const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");

// Run the same rule engine used by both the API and its client fallback.
require.extensions[".ts"] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  });
  module._compile(outputText, filename);
};
const { getPortfolioAnswer } = require("../lib/portfolioChat.ts");
const cases = [
  ["모두의 창업 참여 경험은?", "kr", "", /아이디어 도전.*2026\.09\.07/],
  ["Pote AI 창업 아이디어는?", "kr", "", /AI 기반 미술 판매 플랫폼 아이디어를 제안/],
  ["도전자 경력증명서는?", "kr", "난임 프로젝트", /2026\.10\.27 발급/],
  ["Pote startup participation", "en", "", /Startup idea submission.*Sep 7, 2026/],
  ["그럼 창업 증명서는?", "kr", "Pote는 뭐야?", /도전자 경력증명서/],
  ["난임 점수는?", "kr", "모두의 창업 참여 경험은?", /0\.74236/],
  ["Pote는 뭐야?", "kr", "", /온라인 갤러리/],
  ["Pote 제작 과정 알려줘", "kr", "", /사용자 문제/],
  ["Pote 자동 승인이야?", "kr", "", /운영자가 공개를 승인/],
  ["Pote 작가 업로드는 구현됐어?", "kr", "", /등록·수정/],
  ["Pote 기술 스택", "kr", "", /Next.js.*PostgreSQL/],
  ["Pote 전시 데이터는 어떻게 갱신해?", "kr", "", /상세 수집 경로.*공개하지/],
  ["Pote 방문 분석", "kr", "", /상세 수집 규칙.*공개하지/],
  ["Pote 문의 이메일은?", "kr", "", /내부 운영 정책.*공개하지/],
  ["Pote 사진 최적화", "kr", "", /상세 변환 설정.*공개하지/],
  ["Pote 몇명 작가 몇점이야?", "kr", "", /고정 수치로 제시하지/],
  ["Pote", "kr", "난임 프로젝트", /온라인 갤러리/],
  ["그건 자동 승인이야?", "kr", "난임 프로젝트\nPote는 뭐야?", /운영자가 공개를 승인/],
  ["그럼 전시 갱신은?", "kr", "Pote는 뭐야?", /상세 수집 경로.*공개하지/],
  ["사랑", "kr", "Pote는 뭐야?", /확인할 수 없는/],
  ["난임 점수는?", "kr", "Pote는 뭐야?", /0\.74236/],
  ["What is Pote?", "en", "", /online gallery/],
  ["Does Pote approve automatically?", "en", "", /operator approves publication/],
  ["Pote shipping and payment", "en", "", /policies are not published/],
  ["Pote email inquiry", "en", "", /policies are not published/],
  ["Pote image delivery", "en", "", /conversion settings are not public/],
  ["Pote analytics", "en", "", /collection rules are not public/],
  ["Pote AI", "en", "", /operator approves publication/],
  ["Pote how many artists?", "en", "", /not queried live/],
  ["Does it approve automatically?", "en", "난임 프로젝트\nWhat is Pote?", /operator approves publication/],
  ["ARTE는 뭐야?", "kr", "Pote는 뭐야?", /관람 프로토타입/]
];
for (const [question, language, context, pattern] of cases) {
  const answer = getPortfolioAnswer(question, language, context);
  assert.match(answer, pattern, question);
  if (question.includes("Pote") || context.includes("Pote") && !/난임|ARTE|사랑/.test(question)) {
    assert.doesNotMatch(answer, /98점|98 works|five artists|5명 작가|07:30|2048px|대리보기|Resend|직접 입금|static works with approved database/);
  }
}
assert.match(getPortfolioAnswer("깃허브 주소", "kr"), /https:\/\/github\.com\/Gomdori-dev/);
console.log(`Pote 챗봇 회귀 검증 ${cases.length}건 통과`);
