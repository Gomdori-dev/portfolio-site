import type { Bilingual } from "@/types/portfolio";

const bi = (kr: string, en: string): Bilingual => ({ kr, en });

// Shared by the home card, case study, build process and deterministic chatbot.
// Source: KimPooh/pote at c004af74, reviewed 2026-10-21. Avoid live catalogue counts.
export const pote = {
  reviewedAt: "2026-10-21",
  liveHref: "https://potegallery.com",
  description: bi(
    "작품 탐색·공간 미리보기부터 작가 포털, AI 검토 보조와 관리자 승인까지 연결한 실제 운영 온라인 갤러리입니다.",
    "A live online gallery connecting artwork discovery and room preview with an artist portal, AI-assisted review, and admin approval."
  ),
  outcome: bi(
    "한국어·영어 작품 카탈로그에 작가 직접 등록·수정, 운영자 공개 승인, 전시 데이터 자동 갱신과 방문·문의 분석을 연결해 Vercel에서 운영합니다.",
    "Operated on Vercel with a Korean/English catalogue, artist uploads and edits, operator-controlled publication, scheduled exhibition updates, and visit/inquiry analytics."
  ),
  stack: ["Next.js 16", "React 19", "TypeScript", "Neon Postgres", "Vercel Blob", "Gemini", "Resend", "GitHub Actions"],
  points: bi("작가 포털 · 관리자 승인 · AI 검토 보조 · 방문·문의 분석", "Artist portal · Admin approval · AI-assisted review · Visit/inquiry analytics"),
  status: bi(
    "2026년 10월 21일 코드 확인 기준입니다. 작가가 포털에서 작품을 등록·수정하고, Gemini가 사진 검토·한영 번역·빈 주요 색과 설명 작성을 보조합니다. 검토 통과가 공개를 뜻하지는 않으며 운영자가 최종 승인합니다. 관리자 방문·문의 분석도 구현했습니다. 작가·작품 수와 판매 실적은 실시간으로 조회하지 않아 고정 수치로 제시하지 않습니다.",
    "Based on code reviewed on October 21, 2026. Artists upload and edit work in their portal; Gemini assists with photo review, Korean/English translation, and missing colour tags and descriptions. Passing review does not publish a work: the operator gives final approval. Admin visit/inquiry analytics is also implemented. Artist, artwork and sales counts are not queried live and are not presented as current figures."
  ),
  features: [
    { title: bi("작품 탐색과 공간 미리보기", "Discovery & Room Preview"), body: bi("한국어·영어 작품·작가 정보, 검색·필터, 찜, 취향 퀴즈와 공간 미리보기를 구매 문의로 연결합니다.", "Connects Korean/English artist and artwork information, search, filters, favourites, a taste quiz, and room preview to purchase inquiries.") },
    { title: bi("작가 포털과 공개 승인", "Artist Portal & Publication"), body: bi("작가별 로그인 후 작품 등록·수정, 대표·실물 사진 관리와 반려 보완을 지원합니다. 운영자는 관리자 화면에서 검토·공개 승인하고 작가 대리보기로 지원합니다.", "Artists sign in to upload and edit work, manage main and supporting photos, and revise rejected submissions. Operators review, approve publication, and assist through an admin artist view.") },
    { title: bi("AI 검토·번역 보조", "AI Review & Translation"), body: bi("Gemini가 사진과 등록 정보를 검토하고 한영 번역, 빈 주요 색·설명 작성을 보조합니다. 작가 입력은 보존하며 최종 공개는 운영자가 결정합니다.", "Gemini assists with photo and registration checks, Korean/English translation, and missing colour tags and descriptions. Artist input is preserved; the operator decides publication.") },
    { title: bi("전시·이미지·운영 분석", "Exhibitions, Images & Analytics"), body: bi("전시 JSON은 매일 갱신을 예약하고 실패 시 기존 데이터를 보존합니다. Sharp WebP·CDN 이미지 제공과 방문→작품 탐색→문의 흐름을 보는 관리자 분석을 구현했습니다.", "Exhibition JSON refreshes are scheduled daily and preserve the previous data on failure. Images use Sharp WebP and CDN caching, with admin analytics for the visit-to-artwork-to-inquiry flow.") }
  ],
  steps: [
    {
      question: bi("구매 전 어떤 정보를 먼저 보여줘야 하나?", "What should visitors see before inquiring?"),
      reason: bi("작품을 처음 구매하는 방문자는 작가, 작품 크기와 재료, 공간에 놓인 모습을 함께 검토할 수 있어야 합니다.", "First-time buyers need to review the artist, dimensions, materials, and how the work could look in a room."),
      decision: bi("작품·작가 탐색, 검색·필터, 찜, 취향 퀴즈와 공간 미리보기를 문의 흐름으로 연결했습니다. 구매 대금은 구매자가 작가에게 직접 입금하며 Pote가 보관하지 않습니다.", "Connected artist/artwork discovery, search, filters, favourites, a taste quiz, and room preview to inquiries. Buyers pay artists directly; Pote does not hold purchase funds.")
    },
    {
      question: bi("작가가 직접 수정해도 공개 품질을 유지하려면?", "How can artists edit work while publication stays controlled?"),
      reason: bi("운영자가 모든 작품 정보를 대신 입력하면 등록과 수정이 밀릴 수 있습니다. 직접 업로드한 자료도 공개 전 검토가 필요합니다.", "Having the operator enter every artwork can delay uploads and corrections. Artist uploads still need review before publication."),
      decision: bi("작가별 로그인과 등록·수정·반려 보완, 관리자 공개 승인·대리보기를 구현했습니다. 정적 작품과 승인된 DB 제출을 공통 카탈로그로 합쳐 보여줍니다.", "Implemented artist sign-in, uploads, edits and revisions, plus admin approval and artist assistance. The public catalogue merges static works with approved database submissions.")
    },
    {
      question: bi("AI에 맡길 범위와 사람이 결정할 범위는?", "Which tasks can AI assist with, and who decides publication?"),
      reason: bi("사진 검토와 번역은 반복되지만, 사진만으로 작품 권리·상태·판매 정보를 확정할 수는 없습니다.", "Photo checks and translation repeat across uploads, but a photo cannot establish ownership, condition, or sale details."),
      decision: bi("Gemini 검토 결과를 통과·보류로 기록하고 한영 번역과 빈 색·설명만 보조합니다. 작가 입력을 보존하고 운영자가 공개를 승인합니다. 실행 상태·재시도 기록으로 중단된 검토도 추적합니다.", "Records Gemini review as pass or hold and assists with translation and missing colours/descriptions. Artist input is preserved, the operator approves publication, and run/retry records help trace interrupted reviews.")
    },
    {
      question: bi("외부 전시 API가 실패해도 카탈로그를 제공하려면?", "How can the catalogue remain available when an exhibition API fails?"),
      reason: bi("KCISA 전시 API가 Vercel 환경에서 안정적으로 응답하지 않아 방문자 요청마다 호출하는 방식에 제약이 있었습니다.", "The KCISA exhibition API did not respond reliably from Vercel, making request-time calls unsuitable."),
      decision: bi("GitHub Actions에 매일 07:30 KST 수집·정제를 예약했습니다. 타임아웃·재시도를 적용하고 수집 실패·빈 결과에서는 기존 JSON을 보존합니다. 변경분 푸시로 Vercel Git 자동 배포를 한 번 실행합니다.", "Scheduled collection and cleaning in GitHub Actions for 07:30 KST daily. Timeouts and retries handle transient failures; failed or empty collections retain the previous JSON. A changed-data push triggers one Vercel Git deployment.")
    },
    {
      question: bi("작품 이미지를 보존하면서 전송량을 줄이려면?", "How can images retain the artwork while using less bandwidth?"),
      reason: bi("큰 원본을 그대로 전달하면 전송량이 늘고, 화면을 채우려고 자르면 작품 일부가 사라집니다.", "Serving originals increases transfer size, while cropping to fill a frame can hide part of the artwork."),
      decision: bi("작품 전체를 contain으로 표시하고 Sharp로 긴 쪽 2048px 이하 WebP를 제공합니다. 이미지 응답에 하루 CDN 캐시를 적용하고 허용한 이미지 출처만 처리합니다.", "Displays the whole artwork with contain and serves Sharp-generated WebP with a maximum 2048px long edge. Image responses use one-day CDN caching and only accept approved image sources.")
    },
    {
      question: bi("문의가 어디서 발생하는지 어떻게 확인하나?", "How can the operator trace where inquiries originate?"),
      reason: bi("방문 수만으로는 어떤 유입·작가·작품이 문의로 이어졌는지 확인하기 어렵습니다.", "Visit totals alone do not show which sources, artists, or artworks lead to inquiries."),
      decision: bi("익명 방문·세션·작품 탐색·문의 이벤트와 관리자 드릴다운 분석을 구현했습니다. 문의는 메일 제공자가 발송을 수락한 뒤 기록하며 메일 도착·구매 성사와 구분합니다. 수집 오류가 문의 발송을 막지 않게 했습니다.", "Implemented anonymous visit, session, artwork-view and inquiry events with admin drill-down analytics. Inquiries are recorded after the mail provider accepts sending, separately from delivery and completed sales. Collection errors do not block inquiries.")
    }
  ],
  flow: [
    bi("작품·작가 탐색과 구매 문의 흐름 설계", "Designed artwork/artist discovery and purchase inquiries"),
    bi("한국어·영어 카탈로그, 찜·취향 퀴즈·공간 미리보기 구현", "Built the Korean/English catalogue, favourites, taste quiz, and room preview"),
    bi("작가 포털 등록·수정과 관리자 공개 승인 연결", "Connected artist uploads and edits to admin publication approval"),
    bi("Gemini 사진 검토·번역·빈 색·설명 작성 보조", "Added Gemini assistance for photo review, translation, and missing colours/descriptions"),
    bi("전시 스냅샷 재시도·보존과 이미지 전송 최적화", "Added exhibition snapshot retries/preservation and optimised image delivery"),
    bi("방문·문의 분석 구현과 Git 연동 Vercel 운영", "Implemented visit/inquiry analytics and operated through Vercel Git deployments")
  ],
  implemented: [
    bi("한국어·영어 작품·작가 카탈로그와 구매 문의", "Korean/English artwork and artist catalogue with purchase inquiries"),
    bi("찜·검색·필터·취향 퀴즈·공간 미리보기", "Favourites, search, filters, taste quiz, and room preview"),
    bi("작가 포털 업로드·수정·사진 관리·반려 보완", "Artist uploads, edits, photo management, and revisions"),
    bi("관리자 공개 승인·작가 대리보기", "Admin publication approval and artist assistance"),
    bi("Gemini 검토·한영 번역·빈 색·설명 보조", "Gemini-assisted review, translation, and missing colours/descriptions"),
    bi("전시 JSON 갱신 예약·실패 시 기존 데이터 보존", "Scheduled exhibition JSON refreshes with previous-data preservation"),
    bi("Sharp WebP·CDN 이미지 제공과 Resend 문의 메일", "Sharp WebP/CDN image delivery and Resend inquiry mail"),
    bi("관리자 방문·문의 퍼널과 날짜·작가·작품·유입 드릴다운", "Admin visit/inquiry funnel and date, artist, artwork and source drill-downs")
  ],
  next: [
    bi("운영 데이터를 축적해 유입·작품 탐색·문의 흐름 검증", "Accumulate operational data to validate acquisition, discovery and inquiry flows"),
    bi("신규 작가 첫 작품 등록·보완과 온보딩 지원", "Support new artists through their first upload, revisions and onboarding"),
    bi("검색 색인과 전시 데이터 갱신 상태 후속 확인", "Follow up on search indexing and exhibition refresh status")
  ]
};
