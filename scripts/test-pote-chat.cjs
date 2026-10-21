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
  ["Pote는 뭐야?", "kr", "", /작가 포털/],
  ["Pote 제작 과정 알려줘", "kr", "", /운영자 승인/],
  ["Pote 자동 승인이야?", "kr", "", /운영자가 공개를 승인/],
  ["Pote 작가 업로드는 구현됐어?", "kr", "", /등록·수정·반려 보완/],
  ["Pote 기술 스택", "kr", "", /Neon Postgres.*Gemini/],
  ["Pote 전시 데이터는 어떻게 갱신해?", "kr", "", /실패·빈 결과.*기존 JSON을 보존/],
  ["Pote 방문 분석", "kr", "", /메일 도착·구매 성사와 구분/],
  ["Pote 문의 이메일은?", "kr", "", /Resend/],
  ["Pote 사진 최적화", "kr", "", /2048px.*WebP/],
  ["Pote 몇명 작가 몇점이야?", "kr", "", /고정 수치로 제시하지/],
  ["Pote", "kr", "난임 프로젝트", /작가 포털/],
  ["그건 자동 승인이야?", "kr", "난임 프로젝트\nPote는 뭐야?", /운영자가 공개를 승인/],
  ["그럼 전시 갱신은?", "kr", "Pote는 뭐야?", /기존 JSON을 보존/],
  ["사랑", "kr", "Pote는 뭐야?", /확인할 수 없는/],
  ["난임 점수는?", "kr", "Pote는 뭐야?", /0\.74236/],
  ["What is Pote?", "en", "", /artist portal/],
  ["Does Pote approve automatically?", "en", "", /operator approves publication/],
  ["Pote shipping and payment", "en", "", /Buyers pay artists directly/],
  ["Pote email inquiry", "en", "", /Resend/],
  ["Pote image delivery", "en", "", /2048px/],
  ["Pote analytics", "en", "", /completed sales/],
  ["Pote AI", "en", "", /Gemini/],
  ["Pote how many artists?", "en", "", /not queried live/],
  ["Does it approve automatically?", "en", "난임 프로젝트\nWhat is Pote?", /operator approves publication/],
  ["ARTE는 뭐야?", "kr", "Pote는 뭐야?", /관람 프로토타입/]
];
for (const [question, language, context, pattern] of cases) {
  const answer = getPortfolioAnswer(question, language, context);
  assert.match(answer, pattern, question);
  if (question.includes("Pote") || context.includes("Pote") && !/난임|ARTE|사랑/.test(question)) {
    assert.doesNotMatch(answer, /98점|98 works|five artists|5명 작가/);
  }
}
console.log(`Pote 챗봇 회귀 검증 ${cases.length}건 통과`);
