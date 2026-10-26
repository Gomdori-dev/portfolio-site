import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";

export const metadata: Metadata = { title: "개인 자산관리 제작 과정 | 김지현 Portfolio", description: "개인 자산관리의 사용자 문제와 핵심 기능, AI 도구 활용과 검증 과정을 소개합니다." };

export default function PersonalFinanceManagerProcessPage() {
  return <AppBuildCaseStudy {...{
  "theme": "finance",
  "eyebrow": {
    "kr": "PERSONAL FINANCE · PRODUCT BUILD",
    "en": "PERSONAL FINANCE · PRODUCT BUILD"
  },
  "title": {
    "kr": "개인 자산관리 제작 과정",
    "en": "Building the Personal Finance Manager"
  },
  "summary": {
    "kr": "흩어진 자산과 대출을 쉽게 기록하기 위한 개인용 웹 서비스입니다. AI 도구를 활용해 제작했으며, 여기서는 사용자 문제와 기능, 검증 과정을 소개합니다. 실제 코드와 운영 설정은 비공개입니다.",
    "en": "A personal web app for tracking assets and loans. Built with AI tool assistance. This page presents user needs, features, and validation; service code and operational settings remain private."
  },
  "demoHref": "https://personal-finance-manager-roan.vercel.app/demo",
  "problem": {
    "kr": "자산과 대출 정보가 흩어져 있고 금융 용어가 익숙하지 않으면 기록을 시작하기 어렵습니다.",
    "en": "Scattered financial information and unfamiliar terms make it hard to start tracking personal finances."
  },
  "goal": {
    "kr": "자산·대출·현금흐름을 한곳에서 확인하고, 방문자는 실제 개인 정보와 분리된 가상 데이터 데모로 기능을 살펴볼 수 있게 했습니다.",
    "en": "Bring assets, loans, and cash flow together, with a virtual-data demo separated from real personal information."
  },
  "steps": [
    {
      "question": {
        "kr": "어디까지 먼저 만들까?",
        "en": "What belongs in the first version?"
      },
      "reason": {
        "kr": "복잡한 연동보다 핵심 기록 기능부터 확인할 필요가 있었습니다.",
        "en": "Core tracking should be validated before complex integrations."
      },
      "decision": {
        "kr": "자산·대출 기록과 파일 가져오기를 중심으로 범위를 정했습니다.",
        "en": "Focused on asset and loan records and file import."
      }
    },
    {
      "question": {
        "kr": "처음 쓰는 사람도 입력할 수 있을까?",
        "en": "Can a beginner understand the inputs?"
      },
      "reason": {
        "kr": "금융 용어가 익숙하지 않으면 입력 기준이 모호합니다.",
        "en": "Unfamiliar financial terms can make input criteria unclear."
      },
      "decision": {
        "kr": "입력 항목에 쉬운 설명을 붙이고 모바일 사용 흐름을 점검했습니다.",
        "en": "Added plain-language input explanations and reviewed the mobile flow."
      }
    },
    {
      "question": {
        "kr": "실제 정보를 공개하지 않고 기능을 보여주려면?",
        "en": "How can features be demonstrated without exposing real data?"
      },
      "reason": {
        "kr": "개인 정보 보호와 방문자의 기능 확인을 함께 고려해야 했습니다.",
        "en": "Both privacy and an accessible feature demonstration matter."
      },
      "decision": {
        "kr": "가상 데이터 데모를 분리하고 데이터 복구와 오류 상황을 검증했습니다. 내부 보안 설정과 실제 데이터는 공개하지 않습니다.",
        "en": "Separated a virtual-data demo and verified recovery and error cases. Internal security settings and real data are not public."
      }
    }
  ],
  "flow": [
    {
      "kr": "기록 과정의 불편 파악",
      "en": "Identify tracking friction"
    },
    {
      "kr": "핵심 기능과 입력 설명 구성",
      "en": "Define core features and input guidance"
    },
    {
      "kr": "AI 도구를 활용해 구현",
      "en": "Implement with AI tool assistance"
    },
    {
      "kr": "모바일 사용성과 오류 상황 확인",
      "en": "Check mobile usability and error cases"
    }
  ],
  "implemented": [
    {
      "kr": "자산·대출·현금흐름 관리",
      "en": "Asset, loan, and cash-flow tracking"
    },
    {
      "kr": "상환 계획과 파일 가져오기",
      "en": "Repayment planning and file import"
    },
    {
      "kr": "백업·복원과 입력 도움말",
      "en": "Backup, recovery, and input guidance"
    },
    {
      "kr": "실제 정보와 분리된 가상 데이터 데모",
      "en": "Virtual-data demo separated from real information"
    }
  ],
  "next": [
    {
      "kr": "사용자 피드백을 바탕으로 입력 흐름 개선",
      "en": "Improve input flows using feedback"
    },
    {
      "kr": "구현한 기능의 작동 원리와 한계 학습",
      "en": "Study how implemented features work and their limits"
    }
  ]
}} />;
}
