"use client";

import Link from "next/link";
import { pote } from "@/data/pote";
import {
  ArrowLeft,
  Compass,
  ExternalLink,
  Globe,
  Landmark,
  Tag
} from "lucide-react";
import { useLanguage } from "@/lib/language";
const features = pote.features.map((feature, index) => ({ ...feature, Icon: [Compass, Globe, Tag, Landmark][index] }));

const copyByLanguage = {
  kr: {
    back: "프로젝트",
    badge: "ART GALLERY · CONNECTOR PLATFORM",
    heroKicker: "ART GALLERY · MULTILINGUAL WEB APP",
    heroTitle: "작가와 구매자를",
    heroTitle2: "연결하는 갤러리, Pote",
    heroBody: pote.description.kr,
    liveApp: "배포 앱 보기",
    processLink: "제작 과정 보기",
    productScope: "PRODUCT SCOPE",
    productScopeTitle: "현재 직접 작동하는 핵심 기능",
    decisionHistory: "DECISION HISTORY",
    decisionHistoryTitle: "기능보다 먼저 정한 원칙",
    reasonLabel: "배경",
    decisionLabel: "결정",
    statusTitle: "현재 상태와 다음 단계",
    statusBody: pote.status.kr,
    next: pote.next.map((item) => item.kr),
    preview: { name: "신진 작가 온라인 갤러리", price: "판매가", priceHelper: "작가 직접 설정", nav: ["갤러리", "취향찾기", "전시", "작가지원"] }
  },
  en: {
    back: "Projects",
    badge: "ART GALLERY · CONNECTOR PLATFORM",
    heroKicker: "ART GALLERY · MULTILINGUAL WEB APP",
    heroTitle: "Pote, a gallery connecting",
    heroTitle2: "artists and buyers",
    heroBody: pote.description.en,
    liveApp: "View Live App",
    processLink: "See Build Process",
    productScope: "PRODUCT SCOPE",
    productScopeTitle: "Core Features That Work Today",
    decisionHistory: "DECISION HISTORY",
    decisionHistoryTitle: "Principles Set Before Features",
    reasonLabel: "Context",
    decisionLabel: "Decision",
    statusTitle: "Current Status & Next Steps",
    statusBody: pote.status.en,
    next: pote.next.map((item) => item.en),
    preview: { name: "Online Gallery for Emerging Artists", price: "Price", priceHelper: "Set by the artist", nav: ["Gallery", "Match", "Exhibitions", "Submit"] }
  }
};

function ProductPreview({ copy }: { copy: (typeof copyByLanguage)["kr"] }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0D2822] p-5 text-white shadow-[0_30px_80px_rgb(13_40_34/0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div>
          <p className="text-[10px] font-black tracking-[0.18em] text-[#F0B36F]">POTE</p>
          <p className="mt-1 text-sm font-black">{copy.preview.name}</p>
        </div>
        <span className="rounded-full bg-[#F0B36F]/20 px-3 py-1 text-[10px] font-black text-[#F7D9B0]">LIVE APP</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-3">
        <span className="h-16 rounded-lg" style={{ background: "linear-gradient(135deg,#f6ca98,#985216)" }} />
        <span className="h-16 rounded-lg bg-[#173F3B]" />
        <span className="h-16 rounded-lg" style={{ background: "linear-gradient(135deg,#ec9951,#62320e)" }} />
      </div>
      <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <div className="flex justify-between">
          <p className="text-xs font-black">{copy.preview.price}</p>
          <p className="text-[10px] text-white/40">{copy.preview.priceHelper}</p>
        </div>
        <p className="mt-2 text-base font-black text-[#F0B36F]">350,000원</p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[9px] font-bold text-white/55">
          {["KO", "EN"].map((lang) => (
            <span key={lang} className="rounded bg-white/10 px-2 py-1">{lang}</span>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 border-t border-white/10 pt-4 text-center text-[9px] font-bold text-white/45">
        {copy.preview.nav.map((item, index) => (
          <span key={item} className={index === 0 ? "text-[#F0B36F]" : ""}>{item}</span>
        ))}
      </div>
    </div>
  );
}

export default function PoteGalleryPage() {
  const { language, setLanguage } = useLanguage();
  const copy = copyByLanguage[language];

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-[#202329]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F5EFE6]/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-bold text-black/65 hover:text-black"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> {copy.back}</Link>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs font-black text-[#A85A1E] sm:inline">{copy.badge}</span>
            <div className="flex overflow-hidden rounded-md border border-black/15 text-xs font-black">
              {(["kr", "en"] as const).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setLanguage(item)}
                  className={`min-w-9 px-2.5 py-1.5 transition ${language === item ? "bg-[#0D2822] text-white" : "text-black/60 hover:text-black"}`}
                  aria-pressed={language === item}
                >
                  {item === "kr" ? "KR" : "EN"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-black/10 bg-[#F7E6D3]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-[#A85A1E]">{copy.heroKicker}</p>
            <h1 className="text-center mt-5 text-4xl font-black leading-[1.12] [word-break:keep-all] sm:text-6xl">{copy.heroTitle}<br />{copy.heroTitle2}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">{copy.heroBody}</p>
            <div className="mt-8 flex flex-wrap gap-2">{pote.stack.map((tag) => <span key={tag} className="rounded-full border border-[#A85A1E]/25 bg-white/45 px-3 py-1.5 text-xs font-bold text-[#8A4A18]">{tag}</span>)}</div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={pote.liveHref} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-md bg-[#0D2822] px-5 text-sm font-black text-white transition hover:-translate-y-0.5">
                {copy.liveApp} <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <Link href="/projects/pote-gallery/process" className="inline-flex min-h-12 items-center gap-2 rounded-md border border-[#A85A1E]/35 bg-white/45 px-5 text-sm font-black text-[#8A4A18] transition hover:-translate-y-0.5 hover:bg-white/70">
                {copy.processLink} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <ProductPreview copy={copy} />
        </div>
      </section>

      <section id="startup-experience" aria-labelledby="startup-experience-title" className="border-b border-black/10 bg-white/40 py-10 sm:py-12">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#A85A1E]">{pote.startupExperience.record[language]}</p>
          <h2 id="startup-experience-title" className="mt-3 text-2xl font-black sm:text-3xl">{pote.startupExperience.title[language]}</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-black/65">{pote.startupExperience.summary[language]}</p>
          <p className="mt-3 text-xs text-black/50">{pote.startupExperience.evidence[language]}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#A85A1E]">{copy.productScope}</p><h2 className="text-center mt-3 text-3xl font-black sm:text-5xl">{copy.productScopeTitle}</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ Icon, title, body }) => <article key={title.kr} className="rounded-2xl border border-black/10 bg-white/55 p-5"><Icon className="h-6 w-6 text-[#A85A1E]" aria-hidden="true" /><h3 className="text-center mt-5 text-lg font-black [word-break:keep-all]">{title[language]}</h3><p className="mt-3 text-sm leading-7 text-black/55">{body[language]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#0D2822] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <p className="text-xs font-black text-[#F0B36F]">{copy.decisionHistory}</p><h2 className="text-center mt-3 text-3xl font-black sm:text-5xl">{copy.decisionHistoryTitle}</h2>
          <div className="mt-10">{pote.steps.map(({ question: title, reason: context, decision }, index) => (
            <article key={title.kr} className="grid gap-4 border-t border-white/15 py-7 lg:grid-cols-[4rem_18rem_1fr_1fr]">
              <span className="text-xs font-black text-white/35">{String(index + 1).padStart(2, "0")}</span><h3 className="text-center text-lg font-black leading-7 [word-break:keep-all]">{title[language]}</h3>
              <div><p className="text-[10px] font-black text-[#F0A58D]">{copy.reasonLabel}</p><p className="mt-3 text-sm leading-7 text-white/55">{context[language]}</p></div>
              <div><p className="text-[10px] font-black text-[#86EFAC]">{copy.decisionLabel}</p><p className="mt-3 text-sm leading-7 text-white/80">{decision[language]}</p></div>
            </article>))}</div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div><h2 className="text-center text-3xl font-black">{copy.statusTitle}</h2><p className="mt-5 text-sm leading-7 text-black/55">{copy.statusBody}</p></div>
          <div className="grid gap-3 sm:grid-cols-2">{copy.next.map((item, index) => <div key={item} className="rounded-xl border border-black/10 bg-[#F5EFE6] p-5"><span className="text-xs font-black text-[#A85A1E]">NEXT {index + 1}</span><p className="mt-3 text-sm font-bold leading-7 [word-break:keep-all]">{item}</p></div>)}</div>
        </div>
      </section>
    </main>
  );
}
