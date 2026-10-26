import type { Bilingual, Project } from "@/types/portfolio";

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

export const hemily = {
  title: bi("해밀리 헬스 · 백엔드·인프라 인턴십", "Hemily Health · Backend & Infrastructure Internship"),
  role: bi("팀장 · 공통 백엔드 · 인프라", "Team Lead · Shared Backend · Infrastructure"),
  date: "2026-10-26",
  period: bi("2026.10 · 진행 중", "Oct 2026 · Ongoing"),
  description: bi(
    "기존 헬스케어 서비스를 인수인계받아 기획·API·데이터를 대조하고, 인증·관리자 API와 개발 환경·배포 절차를 개선한 팀 프로젝트입니다.",
    "An inherited healthcare service where I compared requirements, APIs, and data, improved authentication and admin APIs, and established a development environment and deployment workflow."
  ),
  outcome: bi(
    "개발 환경 분리와 자동 배포 절차를 구축하고, 정적 자산 압축으로 전송 효율을 개선했습니다. 변경 사항의 검증 범위와 반영 상태를 구분해 관리했습니다.",
    "Established a separate development environment and automated deployment workflow, improved static asset transfer efficiency, and tracked verification scope and release status for each change."
  ),
  stack: ["Python", "SQL", "REST API", "Docker", "CI/CD"],
  sections: [
    {
      id: "analysis", title: bi("기획·기능·데이터 분석", "Requirements, Functionality & Data"),
      problem: bi("기존 서비스를 이어서 개발하기 위해 문서·화면·API·데이터의 차이를 같은 기준으로 정리할 필요가 있었습니다.", "Continuing an existing service required a consistent view of differences across documentation, interfaces, APIs, and data."),
      action: bi("요구사항·API 명세·참고 앱을 대조하고 기능/API 대응표를 정리했습니다. 데이터는 자료별 기준과 검증 범위를 나누어 비교하고, 확인이 필요한 항목을 담당자 질문으로 구체화했습니다.", "Compared requirements, API specifications, and the reference app, documented feature/API mappings, and turned data discrepancies into focused questions while tracking source definitions and verification scope."),
      result: bi("문서에 적힌 상태와 직접 확인한 결과를 구분하고, 담당자 확인을 거쳐 변경 기준을 정리했습니다.", "Separated documented claims from verified findings and clarified change criteria with the responsible stakeholders.")
    },
    {
      id: "backend", title: bi("인증·관리자 API 개선", "Authentication & Admin APIs"),
      problem: bi("화면에서 필요한 기능과 백엔드 제공 범위를 맞추고, 인증·관리자 기능의 예외 흐름을 함께 다뤄야 했습니다.", "Frontend needs and backend capabilities had to align, including exception handling for authentication and administration."),
      action: bi("회원·관리자 인증과 계정 관리 API를 개선하고, 공통 정책과 반복 로직을 정리했습니다. 프론트엔드 담당자와 요청·응답 형식을 맞추고 정상·실패 시나리오를 검증했습니다.", "Improved authentication and account-management APIs, consolidated shared policy and repeated logic, aligned request/response contracts with the frontend developer, and verified success and failure scenarios."),
      result: bi("테스트와 변경 영향 확인을 거쳐 검증된 내용을 반영했습니다. 개발 확인과 운영 반영을 구분해 완료 범위를 관리했습니다.", "Applied verified changes after testing and impact review, distinguishing development verification from production release when reporting completion.")
    },
    {
      id: "delivery", title: bi("개발 환경 분리·자동 배포", "Development Isolation & Deployment"),
      problem: bi("운영에 영향을 주기 전에 변경 사항을 확인할 개발 환경과 반복 가능한 배포 절차가 필요했습니다.", "Changes needed a separate environment for verification before production and a repeatable deployment process."),
      action: bi("승인된 범위에서 개발 환경을 분리하고 자동 배포 절차를 구축했습니다. 코드 검사·빌드·백업·상태 확인을 배포 과정에 연결했습니다.", "Established a separate development environment and automated deployment within the approved scope, connecting code checks, builds, backups, and health verification."),
      result: bi("개발 환경의 자동 배포 결과를 확인하고, 변경 내용과 검증·복구 절차를 인계 자료로 남겼습니다.", "Verified automated deployment in development and documented changes, verification steps, and recovery procedures for handover.")
    },
    {
      id: "performance", title: bi("전송 효율·검증 환경 개선", "Transfer Efficiency & Verification Environment"),
      problem: bi("개선 효과를 측정으로 확인하고, 검증·배포 과정도 안정적으로 이어갈 필요가 있었습니다.", "Improvements needed measurable verification alongside a reliable testing and deployment process."),
      action: bi("정적 자산 압축을 적용하고 변경 전후 전송 결과를 비교했습니다. 기능별 동작에 미치는 영향을 확인하고 검증 환경의 의존성 구성도 정리했습니다.", "Applied static asset compression, compared transfer behavior before and after the change, checked feature impact, and refined dependencies in the verification environment."),
      result: bi("정적 자산 전송 효율을 개선하고 배포 결과를 확인했습니다. 측정하지 않은 전체 서비스 응답 속도까지 개선 성과로 확대하지 않았습니다.", "Improved static asset transfer efficiency and verified deployment results, without extending the claim to unmeasured whole-service latency.")
    },
    {
      id: "team", title: bi("팀 조율·검증 범위 관리", "Team Coordination & Verification"),
      problem: bi("기획 결정·API 계약·데이터 반영·개발/운영 상태를 팀이 같은 기준으로 이해해야 했습니다.", "The team needed a shared view of product decisions, API contracts, data updates, and development versus production status."),
      action: bi("당일 보고·회의 요약·확인 질문을 정리하고 프론트엔드 요청과 백엔드 응답을 대조했습니다. 팀원이 담당한 AI 기능은 배포 검토·인프라 지원·결과 확인을 맡았습니다.", "Maintained daily reports, meeting summaries, and focused questions, reconciled frontend requests with backend responses, and supported deployment review, infrastructure, and result verification for teammate-owned AI features."),
      result: bi("팀원이 담당한 AI 기능의 내부 구현과 본인의 기여를 구분했습니다. 확인된 결과와 미완료 업무를 나누어 팀에 공유했습니다.", "Distinguished teammate-owned AI implementation from my contribution and shared verified results separately from pending work.")
    }
  ],
  disclosure: bi("업무 기록을 기준으로 담당 범위와 확인된 결과를 정리했습니다. 회사 내부 구조·운영 수치·코드·원본 자료는 공개 범위에서 제외했습니다.", "Summarizes responsibilities and verified outcomes from work records. Internal architecture, operational metrics, code, and source documents are excluded from public disclosure."),
  ai: bi("분석·검증 정리에는 Codex를, 구현·테스트 보조에는 Claude를 활용했습니다. 도구가 제안한 내용과 실제 확인된 결과를 구분해 기록했습니다.", "Used Codex to support analysis and verification notes, and Claude to assist implementation and tests, distinguishing tool suggestions from verified outcomes.")
};

export const hemilyProject: Project = {
  slug: "hemily-health", title: hemily.title, year: "2026", category: "Healthcare / Backend / Infrastructure / Team Leadership",
  description: hemily.description, outcome: hemily.outcome, tags: hemily.stack,
  detailHref: "/projects/hemily-health", featured: true,
  summaryCards: hemily.sections.map((s) => ({ title: s.title.kr, items: [s.action, s.result] }))
};
