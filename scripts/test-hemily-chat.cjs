const assert = require("node:assert/strict");
const fs = require("node:fs");
const ts = require("typescript");
require.extensions[".ts"] = (module, filename) => {
  const { outputText } = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  });
  module._compile(outputText, filename);
};
const { getPortfolioAnswer } = require("../lib/portfolioChat.ts");
const cases = [
  ["해밀리 인턴십은?", "kr", "", /팀장·공통 백엔드·인프라/],
  ["해밀리 성능 개선 수치는?", "kr", "", /내부 수치는 공개하지/],
  ["해밀리 RAG도 혼자 만들었어?", "kr", "", /내부 구현은 팀원이 담당/],
  ["그건 운영 배포됐어?", "kr", "Pote는 뭐야?\n해밀리 인턴십은?", /개발 확인과 운영 반영을 구분/],
  ["Pote는 뭐야?", "kr", "해밀리 인턴십은?", /온라인 갤러리/],
  ["Hemily deployment status", "en", "", /Internal architecture.*excluded/],
  ["Hemily performance", "en", "", /Internal metrics are excluded/],
  ["What is the internship?", "en", "", /ongoing Hemily/],
  ["대표 프로젝트", "kr", "", /여덟.*해밀리.*개인 자산관리/],
  ["포트폴리오 PDF", "kr", "", /인턴십 이전 자료/]
];
for (const [q, lang, context, pattern] of cases) assert.match(getPortfolioAnswer(q, lang, context), pattern, q);
// Check the entire public case study and its shared surfaces, including files
// published with the repository, for details excluded from the public version.
for (const file of ["data/hemily.ts", "lib/portfolioChat.ts", "components/BackgroundContent.tsx", "components/TargetedPortfolio.tsx", "HANDOFF.md"]) {
  const source = fs.readFileSync(require("node:path").join(__dirname, "..", file), "utf8");
  assert.equal(/\b(?:OIDC|SSM)\b|\d[\d,]*\s*(?:바이트|bytes|KB\/s)/.test(source), false, file);
}
const { hemily } = require("../data/hemily.ts");
assert.doesNotMatch(JSON.stringify(hemily), /\d+(?:\.\d+)?%/);
console.log(`해밀리 챗봇 검증 ${cases.length}건 통과`);
