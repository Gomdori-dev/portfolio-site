import type { Metadata } from "next";
import { AppBuildCaseStudy } from "@/components/AppBuildCaseStudy";
import { pote } from "@/data/pote";

export const metadata: Metadata = {
  title: "Pote 제작 과정 | 김지현 Portfolio",
  description: "작품 탐색과 문의, AI 도구 활용과 사용성 개선을 중심으로 Pote 제작 과정을 소개합니다."
};

export default function PoteProcessPage() {
  return (
    <AppBuildCaseStudy
      theme="pote"
      eyebrow={{ kr: "POTE · ART GALLERY PRODUCT BUILD", en: "POTE · ART GALLERY PRODUCT BUILD" }}
      title={{ kr: "Pote 제작 과정", en: "Building Pote" }}
      summary={pote.status}
      demoHref={pote.liveHref}
      problem={{
        kr: "신진·아마추어 작가에게는 작품을 지속적으로 소개할 공간이, 구매자에게는 작품과 작가를 검토할 정보가 필요했습니다. 운영자가 모든 등록·수정과 문의를 직접 처리하면 작가가 늘수록 반복 업무도 늘어나는 문제가 있었습니다.",
        en: "Emerging and amateur artists need a lasting place to show their work, while buyers need information to review artists and artworks. Having the operator handle every upload, correction and inquiry also increases repetitive work as more artists join."
      }}
      goal={pote.outcome}
      steps={pote.steps}
      flow={pote.flow}
      implemented={pote.implemented}
      next={pote.next}
    />
  );
}
