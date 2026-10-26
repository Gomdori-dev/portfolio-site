"use client";

import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { useLanguage } from "@/lib/language";
import { hemily } from "@/data/hemily";

export default function HemilyHealthPage() {
  const { language } = useLanguage();
  const kr = language === "kr";
  return (
    <main className="min-h-screen bg-[#F1EEE7] text-[#1A1B20]">
      <SiteHeader />
      <header className="border-b border-[#CAC4B8] bg-[#EAF2F0]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-bold tracking-widest text-[#1E7067]">HEALTHCARE · BACKEND · INFRASTRUCTURE</p>
          <h1 className="mt-5 max-w-4xl text-3xl font-black leading-tight sm:text-5xl">{hemily.title[language]}</h1>
          <p className="mt-5 text-sm font-bold text-[#355B56]">{hemily.period[language]} · {hemily.role[language]}</p>
          <p className="mt-6 max-w-3xl leading-8">{hemily.description[language]}</p>
          <div className="mt-7 flex flex-wrap gap-2">{hemily.stack.map((s) => <span key={s} className="rounded border border-[#BFD4CF] bg-white/60 px-3 py-2 text-xs font-bold">{s}</span>)}</div>
          <nav aria-label={kr ? "사례 목차" : "Case study navigation"} className="mt-8 flex flex-wrap gap-4 text-sm underline underline-offset-4">{hemily.sections.map((s) => <a key={s.id} href={`#${s.id}`}>{s.title[language]}</a>)}</nav>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8">
        <section className="rounded-lg border border-[#BFD4CF] bg-white/60 p-6 sm:p-8">
          <h2 className="text-xl font-black">{kr ? "확인된 결과" : "Verified Results"}</h2>
          <p className="mt-4 leading-8">{hemily.outcome[language]}</p>
          <p className="mt-4 text-sm leading-7 text-[#5E5B55]">{hemily.disclosure[language]}</p>
        </section>
        {hemily.sections.map((s) => (
          <section id={s.id} key={s.id} className="scroll-mt-24 border-b border-[#CAC4B8] py-12">
            <h2 className="text-2xl font-black sm:text-3xl">{s.title[language]}</h2>
            <dl className="mt-7 grid gap-6">{[
              [kr ? "문제" : "Problem", s.problem[language]],
              [kr ? "담당한 일" : "My Contribution", s.action[language]],
              [kr ? "결과·검증 범위" : "Result & Verification Scope", s.result[language]]
            ].map(([label, value]) => <div key={label} className="grid gap-2 sm:grid-cols-[9rem_1fr]"><dt className="text-sm font-bold text-[#1E7067]">{label}</dt><dd className="min-w-0 text-sm leading-8 text-[#4B4A44]">{value}</dd></div>)}</dl>
          </section>
        ))}
        <section className="py-10"><h2 className="text-xl font-black">{kr ? "작업 방식" : "Working Approach"}</h2><p className="mt-4 text-sm leading-8 text-[#5E5B55]">{hemily.ai[language]}</p></section>
        <Link href="/#projects" className="inline-flex min-h-11 items-center rounded bg-[#1A1B20] px-5 text-sm font-bold text-white">{kr ? "프로젝트 목록으로" : "Back to projects"} →</Link>
      </div>
    </main>
  );
}
