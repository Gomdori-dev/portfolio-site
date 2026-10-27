// Public project overview; service code and operational details remain private.
export const pote = {
  "startupExperience": {
    "date": "2026-09-07",
    "title": {
      "kr": "모두의 창업 프로젝트 참여",
      "en": "Modoo Startup Project Participation"
    },
    "summary": {
      "kr": "무명 화가의 작품이 발견되고 구매로 이어질 기회를 넓히기 위해, 작품과 감상자의 취향을 중심으로 연결하는 AI 기반 미술 판매 플랫폼 아이디어를 제안했습니다.",
      "en": "Proposed an AI-based art sales platform to help lesser-known artists reach potential buyers by connecting artwork with viewers' tastes."
    },
    "record": {
      "kr": "아이디어 도전 · 2026.09.07",
      "en": "Startup idea submission · Sep 7, 2026"
    },
    "evidence": {
      "kr": "도전자 경력증명서 · 2026.10.27 발급",
      "en": "Certificate of Startup Experience · Issued Oct 27, 2026"
    }
  },
  "reviewedAt": "2026-10-21",
  "liveHref": "https://potegallery.com",
  "description": {
    "kr": "작품과 작가를 탐색하고 취향에 맞는 작품을 문의할 수 있는 온라인 갤러리입니다. AI 도구를 활용해 제작했습니다.",
    "en": "An online gallery for exploring artists and artwork and making inquiries. Built with assistance from AI tools."
  },
  "outcome": {
    "kr": "작품 탐색, 공간 미리보기, 작가 정보 관리와 공개 검토를 연결했습니다. 이 포트폴리오는 기능과 문제 해결 과정을 소개하며 실제 서비스 코드는 비공개로 관리합니다.",
    "en": "Connected discovery, room preview, artist information management, and publication review. This portfolio presents features and problem-solving decisions; service code remains private."
  },
  "stack": [
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Vercel"
  ],
  "points": {
    "kr": "작품 탐색 · 공간 미리보기 · 작가 정보 관리 · 구매 문의",
    "en": "Artwork discovery · Room preview · Artist information · Inquiries"
  },
  "status": {
    "kr": "공개 범위는 사용자 기능, 주요 기술과 제작 과정입니다. 실제 코드, 내부 운영 정책, 상세 사업 계획과 운영 수치는 공개하지 않습니다. 작가·작품 수와 판매 실적은 실시간으로 확인하지 않아 고정 수치로 제시하지 않습니다.",
    "en": "The public scope covers user features, core technologies, and build decisions. Service code, internal policies, detailed business plans, and operational metrics are not public. Artist, artwork, and sales counts are not queried live or presented as current figures."
  },
  "features": [
    {
      "title": {
        "kr": "작품 탐색과 공간 미리보기",
        "en": "Discovery & Room Preview"
      },
      "body": {
        "kr": "작품·작가 정보, 검색·필터, 찜, 취향 퀴즈와 공간 미리보기를 제공합니다.",
        "en": "Offers artwork and artist information, search, filters, favourites, a taste quiz, and room preview."
      }
    },
    {
      "title": {
        "kr": "작가 정보 관리",
        "en": "Artist Information"
      },
      "body": {
        "kr": "작가가 작품을 등록·수정하고 운영자가 공개 전 정보를 검토할 수 있습니다.",
        "en": "Artists can upload and edit artwork, with review before publication."
      }
    },
    {
      "title": {
        "kr": "AI 활용",
        "en": "AI Assistance"
      },
      "body": {
        "kr": "AI 도구를 활용해 반복적인 정보 정리와 번역을 보조하도록 구성했습니다.",
        "en": "AI tools assist repetitive information preparation and translation."
      }
    },
    {
      "title": {
        "kr": "사용 흐름 개선",
        "en": "Visitor Experience"
      },
      "body": {
        "kr": "모바일 작품 탐색과 구매 문의 흐름을 고려했습니다.",
        "en": "Considered mobile artwork discovery and purchase inquiries."
      }
    }
  ],
  "steps": [
    {
      "question": {
        "kr": "작품을 찾는 사람에게 어떤 정보가 필요할까?",
        "en": "What information helps visitors explore artwork?"
      },
      "reason": {
        "kr": "작품과 작가 정보를 여러 화면에서 찾는 불편을 줄이고 싶었습니다.",
        "en": "Visitors need a clear way to explore artwork and artists."
      },
      "decision": {
        "kr": "작품·작가 탐색과 검색·필터, 찜, 공간 미리보기를 문의 흐름으로 연결했습니다.",
        "en": "Connected artwork and artist browsing, search, filters, favourites, and room preview to inquiries."
      }
    },
    {
      "question": {
        "kr": "작가가 작품 정보를 직접 관리하려면?",
        "en": "How can artists manage their work?"
      },
      "reason": {
        "kr": "작품 정보를 편리하게 등록하고 수정할 수 있어야 했습니다.",
        "en": "Artists need a convenient way to keep artwork information up to date."
      },
      "decision": {
        "kr": "작가의 작품 등록·수정과 운영자의 공개 검토 흐름을 구성했습니다. 내부 관리 도구와 권한 설계는 공개하지 않습니다.",
        "en": "Built artist uploads and edits with an operator publication review. Internal management tools and permission design are not public."
      }
    },
    {
      "question": {
        "kr": "AI와 사람의 역할을 어떻게 나눌까?",
        "en": "How should AI and human responsibilities differ?"
      },
      "reason": {
        "kr": "반복 작업을 줄이되 중요한 공개 판단은 사람이 확인해야 했습니다.",
        "en": "AI can reduce repetitive work, while publication needs human review."
      },
      "decision": {
        "kr": "AI가 정보 정리와 번역을 보조하고 운영자가 공개를 승인하도록 구성했습니다. 내부 판정 규칙과 프롬프트는 공개하지 않습니다.",
        "en": "AI assists information preparation and translation; the operator approves publication. Internal decision rules and prompts are not public."
      }
    },
    {
      "question": {
        "kr": "외부 정보를 안정적으로 보여주려면?",
        "en": "How can external information remain useful?"
      },
      "reason": {
        "kr": "외부 데이터의 상태가 서비스 이용에 영향을 줄 수 있었습니다.",
        "en": "External data availability can affect the visitor experience."
      },
      "decision": {
        "kr": "전시 데이터 갱신과 실패 상황을 고려했습니다. 상세 수집 경로와 실행 일정은 공개하지 않습니다.",
        "en": "Considered exhibition updates and failure handling. Detailed collection routes and execution schedules are not public."
      }
    },
    {
      "question": {
        "kr": "작품을 다양한 화면에서 어떻게 보여줄까?",
        "en": "How should artwork appear across screens?"
      },
      "reason": {
        "kr": "작품의 전체 모습과 모바일 사용성을 함께 고려해야 했습니다.",
        "en": "The full artwork and mobile usability both matter."
      },
      "decision": {
        "kr": "작품 비율을 유지하고 이미지 전송 효율을 고려했습니다. 상세 변환 설정은 공개하지 않습니다.",
        "en": "Preserved artwork proportions and considered image delivery efficiency. Detailed conversion settings are not public."
      }
    },
    {
      "question": {
        "kr": "사용 흐름에서 무엇을 개선할까?",
        "en": "How can the visitor flow improve?"
      },
      "reason": {
        "kr": "방문자가 작품을 찾고 문의하기까지의 흐름을 살펴볼 필요가 있었습니다.",
        "en": "Understanding discovery and inquiry flows helps identify improvements."
      },
      "decision": {
        "kr": "작품 탐색과 문의 흐름을 점검했습니다. 운영 분석 지표와 상세 수집 규칙은 공개하지 않습니다.",
        "en": "Reviewed artwork discovery and inquiry flows. Operational metrics and detailed collection rules are not public."
      }
    }
  ],
  "flow": [
    {
      "kr": "작가와 방문자의 문제 정리",
      "en": "Framed artist and visitor needs"
    },
    {
      "kr": "작품 탐색과 문의 흐름 구성",
      "en": "Designed discovery and inquiry flows"
    },
    {
      "kr": "AI 도구를 활용한 구현",
      "en": "Implemented with AI tool assistance"
    },
    {
      "kr": "화면과 실패 상황 점검",
      "en": "Reviewed interfaces and failure cases"
    }
  ],
  "implemented": [
    {
      "kr": "작품·작가 탐색과 검색·필터",
      "en": "Artwork/artist browsing, search, and filters"
    },
    {
      "kr": "취향 퀴즈와 공간 미리보기",
      "en": "Taste quiz and room preview"
    },
    {
      "kr": "작가 작품 등록·수정과 공개 검토",
      "en": "Artist uploads, edits, and publication review"
    },
    {
      "kr": "한국어·영어 정보와 구매 문의",
      "en": "Korean/English information and inquiries"
    }
  ],
  "next": [
    {
      "kr": "사용자 피드백을 바탕으로 사용성 개선",
      "en": "Improve usability using visitor feedback"
    },
    {
      "kr": "직접 구현한 기능의 작동 원리와 개선점 학습",
      "en": "Study how implemented features work and how to improve them"
    }
  ]
};
