"use client";

import Link from "next/link";
import { useState } from "react";

type HunterRank = {
  grade: string;
  title: string;
  english: string;
  designation: string;
  summary: string;
  descriptions: string[];
  powerLabel: string;
  powerDescription: string;
  comparisonLabel: string;
  comparisonDescription: string;
  status: string;
  tone: "normal" | "mid" | "high" | "critical" | "unknown";
};

const hunterRanks: HunterRank[] = [
  {
    grade: "E",
    title: "E급 헌터",
    english: "ENTRY RANK",
    designation: "초급 각성자",
    summary:
      "모든 헌터가 최초로 부여받는 시작 등급이다. 각성 직후의 적응과 성장을 위한 단계로 취급된다.",
    descriptions: [
      "모든 헌터는 각성 직후 E등급에서 출발한다. 각성 단계에서 강력한 능력이 확인되더라도, 정식 측정과 실전 검증을 마치기 전까지는 예외 없이 E등급으로 등록된다.",
      "일반인을 크게 웃도는 신체 능력과 마나를 지니며, 순수한 육체 능력만으로도 MMA 최정상급 선수보다 조금 강한 수준의 무력을 발휘한다.",
      "다만 마나 운용과 능력 제어가 아직 미숙하고 전투 경험도 부족해, 독립된 공식 전력으로 보기에는 애매한 단계다.",
      "대부분의 E급 헌터는 교육기관이나 소속 세력의 보호 아래 훈련받으며, 단독 게이트 투입은 원칙적으로 금지된다.",
    ],
    powerLabel: "기준 무력",
    powerDescription:
      "MMA 최정상급 선수보다 약간 강한 수준이다. 일반적인 무장 인원을 제압할 수는 있지만, 마물과의 정면전에서는 큰 위험이 따른다.",
    comparisonLabel: "전력 평가",
    comparisonDescription:
      "공식 공략 전력으로는 제한적으로만 인정된다. 주로 보조 임무와 통제구역 경계, 물자 운반을 담당한다.",
    status: "성장 단계",
    tone: "normal",
  },
  {
    grade: "D",
    title: "D급 헌터",
    english: "COMBAT RANK",
    designation: "정식 전투원",
    summary:
      "일반인의 범주를 명백하게 벗어나는 최초의 등급이다. 이 단계부터 정식 공략 전력으로 인정받는다.",
    descriptions: [
      "D급에 도달한 헌터는 신체 능력과 마나 운용 능력 모두에서 일반인의 한계를 넘어선다.",
      "전력을 다해 공격할 경우 오토바이 한 대를 흔적도 남지 않을 정도로 파괴할 수 있다. 개인 화기와 일반적인 방호장비만으로는 이들을 안정적으로 제압하기 어렵다.",
      "공식적인 공략 전력으로 인정받지만, 경험과 대응 능력이 충분하지 않아 단독 작전에 투입되는 경우는 거의 없다.",
      "D급 헌터는 대체로 상위 등급 헌터의 지휘 아래 움직이며, 저등급 마물 토벌과 공략대의 측면 보호를 담당한다.",
    ],
    powerLabel: "기준 무력",
    powerDescription:
      "전력을 발휘하면 오토바이 한 대를 흔적도 없이 파괴할 수 있다. 일부 D급 헌터는 짧은 거리에서 차량에 준하는 속도를 낸다.",
    comparisonLabel: "등급 격차",
    comparisonDescription:
      "통상적인 D급 헌터 한 명은 E급 헌터 열 명을 무리 없이 상대할 수 있다.",
    status: "공식 전력",
    tone: "normal",
  },
  {
    grade: "C",
    title: "C급 헌터",
    english: "CORE RANK",
    designation: "중견 전력",
    summary:
      "대부분의 공략 현장에서 중심을 맡는 중견 등급이다. 헌터 사회에서 독립적인 전투원으로 인정받는 기준점이기도 하다.",
    descriptions: [
      "E급과 D급이 아직 성장과 적응이 필요한 단계라면, C급부터는 완성된 하나의 전투원으로 평가받는다.",
      "마나 운용과 능력 제어가 안정되어 있으며, 돌발 상황에서도 스스로 판단해 전투를 이어갈 수 있다.",
      "정면에서 돌진하는 대형 트럭과 힘겨루기를 벌일 수 있을 정도의 신체 능력을 보유하며, 저등급 마물 군집을 단독으로 제압하는 사례도 드물지 않다.",
      "대부분의 공략대는 C급 헌터를 핵심 전력으로 삼는다. 공략대장이나 현장 지휘관 역시 C급에서 가장 많이 배출된다.",
    ],
    powerLabel: "기준 무력",
    powerDescription:
      "대형 트럭과 정면으로 힘겨루기를 벌일 수 있다. 건물 외벽이나 두꺼운 철문을 물리적으로 파괴하는 것도 가능하다.",
    comparisonLabel: "등급 격차",
    comparisonDescription:
      "통상적인 C급 헌터 한 명은 D급 헌터 스물다섯 명을 무리 없이 상대할 수 있다.",
    status: "중견 전력",
    tone: "mid",
  },
  {
    grade: "B",
    title: "B급 헌터",
    english: "HIGH RANK",
    designation: "고위 헌터",
    summary:
      "고위 헌터로 인정받는 최소 기준이다. 국가가 직접 신원을 관리할 정도로 희소한 전력이다.",
    descriptions: [
      "B급은 국가가 공식적으로 고위 전력으로 분류하는 최초의 등급이다. 전체 헌터 가운데 차지하는 비율은 극히 낮다.",
      "이 단계부터 헌터의 능력은 단순한 신체 강화나 마나 방출을 벗어나, 개인의 특수성이 뚜렷하게 드러난다.",
      "같은 B급이라도 능력의 성질과 전투 방식은 크게 다르다. 일부는 광역 공격에 특화되고, 일부는 방어와 지원만으로도 전장의 흐름을 뒤집는다.",
      "전력으로 공격하면 대형 트럭을 일격에 반으로 접어버릴 수 있다. 단독으로 소규모 게이트를 공략하거나 도시의 특정 구역을 방어하는 것도 가능하다.",
      "B급 헌터가 대규모 이동이나 전투에 참여할 때는 국가기관과 지역 행정기관에 사전 보고하는 것이 원칙이다.",
    ],
    powerLabel: "기준 무력",
    powerDescription:
      "일격으로 대형 트럭을 반으로 접을 수 있다. 능력의 특성에 따라 건물 여러 채를 동시에 파괴하는 사례도 존재한다.",
    comparisonLabel: "등급 격차",
    comparisonDescription:
      "통상적인 B급 헌터 한 명은 C급 헌터 백 명을 무리 없이 상대할 수 있다.",
    status: "고위 전력",
    tone: "high",
  },
  {
    grade: "A",
    title: "A급 헌터",
    english: "NATIONAL RANK",
    designation: "국가 최종전력",
    summary:
      "S급을 제외한 헌터 가운데 최강의 전력이다. 국가가 보유한 최후의 보루로 평가받는다.",
    descriptions: [
      "A급 헌터는 개인이면서 동시에 하나의 전략병기로 취급된다. 이들의 전투 참여 여부에 따라 도시와 국가의 존속이 결정되기도 한다.",
      "그 수는 극히 적으며 지속적인 관리 대상이다. 대한민국에 공식적으로 상주하는 A급 헌터는 열 명이 채 되지 않는다. 정확한 명단과 능력은 국가기밀로 분류하며 일반에는 공개하지 않는다.",
      "순수한 신체 능력만으로도 전차를 들어 올려 한 손으로 던질 수 있다. 능력을 전력으로 발휘하면 행정구역 하나를 소멸시킬 수 있는 파괴력을 낸다.",
      "A급 헌터가 허가 없이 능력을 전개하는 행위는 대규모 재난 발생과 같은 수준으로 취급된다.",
      "이들은 고등급 게이트 공략뿐 아니라 다른 고위 헌터의 범죄와 반란을 진압하는 억제력으로도 운용된다.",
    ],
    powerLabel: "기준 무력",
    powerDescription:
      "전차를 들어 한 손으로 던질 수 있다. 전력을 발휘하면 하나의 행정구역을 소멸시킬 수 있는 수준으로 평가한다.",
    comparisonLabel: "등급 격차",
    comparisonDescription:
      "통상적인 A급 헌터 한 명은 B급 헌터 스물다섯 명을 여유롭게 상대할 수 있다.",
    status: "국가 최종전력",
    tone: "critical",
  },
  {
    grade: "S",
    title: "S급 헌터",
    english: "UNVERIFIED RANK",
    designation: "최종경지",
    summary:
      "초대 A급 헌터 가운데 기존 기준으로 측정할 수 없는 존재를 구분하기 위해 제정한 최종 등급이다.",
    descriptions: [
      "S급은 처음부터 존재하는 등급이 아니다. 초대 A급 헌터 가운데 능력과 마나의 질이 지나치게 높아 동일한 기준으로 분류할 수 없는 존재가 나타나면서 새롭게 제정한다.",
      "이들은 단순한 A급의 연장선이 아니라, 기존 등급 체계의 한계를 벗어난 존재로 평가된다.",
      "개인 단독으로 하나의 국가를 상대로 전면전을 수행할 수 있는 전력으로 기록한다. 다만 실제 능력과 전투 기록 대부분은 최고 등급의 기밀로 분류하며 일반에는 공개하지 않는다.",
      "현재 마물과의 대규모 전투는 소강상태에 접어들어 있으며, 공식적으로 확인되는 S급 헌터는 대부분 실종 또는 사망 처리 상태다.",
      "현재 공개 문서에서 생존이 공식 확인되는 S급 헌터는 존재하지 않는다. 일부 미확인 기록과 목격담만 중앙기록국에 남아 있다.",
    ],
    powerLabel: "기준 무력",
    powerDescription:
      "측정할 수 없다. 기존 장비와 등급 산정 방식으로는 출력의 상한선을 확인하지 못한다.",
    comparisonLabel: "전력 평가",
    comparisonDescription:
      "국가를 상대로 단독 전면전을 수행할 수 있는 등급으로 기록한다. 세부 기록은 최고 등급 기밀로 분류하며 일반에는 공개하지 않는다.",
    status: "기록 제한",
    tone: "unknown",
  },
];

const hunterPrinciples = [
  {
    number: "01",
    title: "모든 헌터는 E급부터 시작한다",
    description:
      "각성 직후의 출력만으로 상위 등급을 부여하지 않는다. 능력의 안정성과 성장 가능성, 실전 기록을 확인하기 위해 모든 신규 헌터를 E급으로 등록한다.",
  },
  {
    number: "02",
    title: "등급 상승에는 성장이 필요하다",
    description:
      "헌터는 마나 운용과 신체 능력, 고유 능력을 단련하며 성장한다. 일정 수준에 도달하면 재측정을 통해 상위 등급을 부여받는다.",
  },
  {
    number: "03",
    title: "등급 간 격차는 일정하지 않다",
    description:
      "헌터의 등급이 높아질수록 다음 단계와의 격차는 급격하게 커진다. 낮은 등급의 숫자만으로 상위 등급을 제압하기는 현실적으로 어렵다.",
  },
  {
    number: "04",
    title: "등급은 절대적인 승패를 의미하지 않는다",
    description:
      "능력의 상성과 전투 경험, 지형과 준비 상태에 따라 결과는 달라질 수 있다. 다만 동일한 조건에서는 상위 등급이 압도적으로 유리하다.",
  },
];

function RankStatus({
  status,
  tone,
}: {
  status: string;
  tone: HunterRank["tone"];
}) {
  const styles: Record<HunterRank["tone"], string> = {
    normal: "border-sky-300/30 bg-sky-400/[0.035] text-sky-200",
    mid: "border-cyan-300/30 bg-cyan-400/[0.035] text-cyan-200",
    high: "border-violet-300/30 bg-violet-400/[0.035] text-violet-200",
    critical:
      "border-amber-300/35 bg-amber-400/[0.035] text-amber-100",
    unknown: "border-red-300/30 bg-red-400/[0.035] text-red-200",
  };

  return (
    <span
      className={`inline-flex shrink-0 border px-3 py-1.5 text-[9px] tracking-[0.16em] ${styles[tone]}`}
    >
      {status}
    </span>
  );
}

function getRankAccent(tone: HunterRank["tone"]) {
  const styles: Record<HunterRank["tone"], string> = {
    normal: "border-sky-300/40 text-sky-200",
    mid: "border-cyan-300/40 text-cyan-200",
    high: "border-violet-300/40 text-violet-200",
    critical: "border-amber-300/45 text-amber-100",
    unknown: "border-red-300/45 text-red-200",
  };

  return styles[tone];
}

export default function HunterPage() {
  const [openGrade, setOpenGrade] = useState<string | null>("E");

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#090a0b] px-5 py-8 text-[#e9e5db] sm:px-8 sm:py-12">
      {/* 배경 */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_3%,rgba(48,112,154,0.13),transparent_42%)]" />

      <div className="pointer-events-none fixed left-1/2 top-[-18rem] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(125,211,252,0.09),transparent_67%)] blur-3xl" />

      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-sky-300/[0.035] to-transparent" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.032] [background-image:linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.68)] sm:shadow-[inset_0_0_210px_rgba(0,0,0,0.82)]" />

      <article className="relative z-10 mx-auto w-full max-w-5xl">
        {/* 문서 헤더 */}
        <header className="hunter-rise hunter-delay-1 border-b border-sky-300/20 pb-8 sm:pb-11">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[9px] tracking-[0.28em] text-sky-300/70 sm:text-[10px]">
                SIGNAL ARCHIVE · DOCUMENT 03
              </p>

              <h1 className="font-serif text-5xl font-normal tracking-[0.1em] text-[#f2eee4] sm:text-7xl">
                헌터
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                마나를 받아들이고 인간의 한계를 넘어선 각성자와 그 등급
                체계를 다루는 공식 기록이다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/notice"
                className="group flex min-h-11 items-center gap-3 border border-sky-300/25 px-5 py-3 text-[10px] tracking-[0.18em] text-sky-100/85 transition duration-300 hover:border-sky-300/60 hover:bg-sky-300/[0.05] hover:text-white"
              >
                <span className="transition duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                문서 목록
              </Link>

              <Link
                href="/"
                className="flex min-h-11 items-center border border-white/10 px-5 py-3 text-[10px] tracking-[0.18em] text-zinc-300 transition duration-300 hover:border-white/25 hover:text-white"
              >
                메인
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/[0.06] pt-5 text-[9px] tracking-[0.16em] text-zinc-400 sm:grid-cols-3 sm:text-[10px]">
            <p>
              DOCUMENT STATUS
              <span className="ml-3 text-emerald-300">OPEN</span>
            </p>

            <p>
              CLASSIFICATION
              <span className="ml-3 text-zinc-200">PUBLIC</span>
            </p>

            <p>
              HUNTER RANGE
              <span className="ml-3 text-sky-200">E — S</span>
            </p>
          </div>
        </header>

        {/* 헌터 정의 */}
        <section className="hunter-rise hunter-delay-2 border-b border-white/[0.08] py-12 sm:py-16">
          <div className="text-center">
            <p className="font-serif text-sm tracking-[0.3em] text-sky-300/85">
              제1장
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[0.08em] text-[#eee8dc] sm:text-6xl">
              각성자
            </h2>

            <p className="mt-4 text-[10px] tracking-[0.28em] text-zinc-400 sm:text-xs">
              AWAKENED HUMAN · HUNTER
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-y border-sky-300/15 py-8 text-center sm:py-10">
            <p className="font-serif text-xl leading-9 text-sky-100 sm:text-2xl">
              마나를 받아들이고 인간의 한계를 넘어선 자를 헌터라 부른다.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              게이트를 통해 마나가 지구에 유입된 이후, 일부 인간은 체내에
              마나를 받아들이며 기존 인체의 한계를 벗어나는 변화를 일으킨다.
            </p>

            <p>
              각성한 인간은 일반인을 뛰어넘는 신체 능력과 마나를 지닌다.
              일부는 자신에게만 허락된 고유 능력을 발현한다.
            </p>

            <p>
              인류는 마물을 상대할 수 있는 이들을 헌터라고 부른다.
              헌터는 게이트 공략과 마물 토벌을 담당하며, 인류 문명을
              유지하는 핵심 전력으로 기능한다.
            </p>

            <p>
              헌터는 각성 직후 완성되는 존재가 아니다. 마나와 능력을 다루는
              숙련도에 따라 성장하며, 성장 수준에 따라 E급부터 S급까지의
              등급을 부여받는다.
            </p>
          </div>
        </section>

        {/* 성장 원칙 */}
        <section className="hunter-rise hunter-delay-3 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-sky-300/85">
            제2장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            성장과 등급
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            헌터의 등급은 각성 순간의 재능만으로 결정되지 않는다. 실제 성장과
            능력의 안정성, 전투 기록을 종합해 산정한다.
          </p>

          <div className="mt-10 border-y border-white/[0.08]">
            {hunterPrinciples.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 last:border-b-0 sm:grid-cols-[70px_280px_1fr] sm:gap-8"
              >
                <p className="font-serif text-sm text-sky-300/85">
                  {principle.number}
                </p>

                <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                  {principle.title}
                </h3>

                <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 등급 아코디언 */}
        <section className="hunter-rise hunter-delay-4 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-sky-300/85">
            제3장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            헌터 등급 기록
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            열람할 등급을 선택하십시오. 하나의 등급을 열면 기존에 열려 있던
            기록은 자동으로 닫힌다.
          </p>

          <div className="mt-10 space-y-4">
            {hunterRanks.map((rank) => {
              const isOpen = openGrade === rank.grade;

              return (
                <section
                  key={rank.grade}
                  className={`overflow-hidden border bg-[#0d1012]/95 transition duration-500 ${
                    isOpen
                      ? "border-sky-300/30 shadow-[0_12px_45px_rgba(0,0,0,0.28)]"
                      : "border-white/[0.09] hover:border-sky-300/20"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`hunter-rank-${rank.grade}`}
                    onClick={() =>
                      setOpenGrade(isOpen ? null : rank.grade)
                    }
                    className="group flex w-full touch-manipulation items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border font-serif text-lg transition duration-500 sm:h-11 sm:w-11 sm:text-xl ${getRankAccent(
                        rank.tone,
                      )}`}
                    >
                      {rank.grade}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] tracking-[0.2em] text-zinc-400 sm:text-[9px]">
                        {rank.english}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h3 className="font-serif text-xl text-[#eee8dc] sm:text-2xl">
                          {rank.title}
                        </h3>

                        <span className="text-[10px] text-zinc-400">
                          {rank.designation}
                        </span>
                      </div>
                    </div>

                    <RankStatus status={rank.status} tone={rank.tone} />

                    <span
                      aria-hidden="true"
                      className={`ml-1 shrink-0 text-sm text-sky-200 transition duration-500 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                  </button>

                  <div
                    id={`hunter-rank-${rank.grade}`}
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.08] px-5 py-7 sm:px-8 sm:py-9">
                        <p className="font-serif text-lg leading-8 text-sky-100/90 sm:text-xl">
                          {rank.summary}
                        </p>

                        <div className="mt-7 space-y-5 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
                          {rank.descriptions.map((description) => (
                            <p key={description}>{description}</p>
                          ))}
                        </div>

                        <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2">
                          <div className="bg-[#0a0c0e] p-6 sm:p-7">
                            <p className="text-[9px] tracking-[0.2em] text-sky-300/75">
                              {rank.powerLabel}
                            </p>

                            <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                              {rank.powerDescription}
                            </p>
                          </div>

                          <div className="bg-[#0a0c0e] p-6 sm:p-7">
                            <p className="text-[9px] tracking-[0.2em] text-sky-300/75">
                              {rank.comparisonLabel}
                            </p>

                            <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                              {rank.comparisonDescription}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </section>        {/* 등급의 의미 */}
        <section className="hunter-rise hunter-delay-5 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-red-300/75">
            중앙기록국 주의사항
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            등급의 의미
          </h2>

          <div className="mt-8 border-y border-red-300/15 bg-red-950/[0.025] px-5 py-8 sm:px-8">
            <p className="font-serif text-lg leading-9 text-red-100/90 sm:text-xl">
              등급은 명예를 나타내는 칭호가 아니다.
            </p>

            <p className="mt-5 max-w-4xl break-keep text-sm leading-8 text-zinc-300">
              등급은 헌터 한 명이 통제되지 않았을 때 발생할 수 있는 피해 규모를
              나타내는 국가적 위험지표이기도 하다. 특히 B급 이상의 헌터는
              보호 대상인 동시에 국가의 상시 관리 대상이다.
            </p>
          </div>
        </section>

        {/* 활동 규정 및 대우 */}
        <section className="hunter-rise hunter-delay-6 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-sky-300/85">
            제4장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            활동 규정 및 대우
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            헌터는 인류의 생존에 필요한 핵심 전력이며, 그에 상응하는 권리와
            의무를 함께 부여받는다.
          </p>

          {/* 활동 규정 */}
          <div className="mt-10 border-y border-white/[0.08]">
            <div className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 sm:grid-cols-[70px_260px_1fr] sm:gap-8">
              <p className="font-serif text-sm text-sky-300/85">01</p>

              <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                헌터 등록의 의무
              </h3>

              <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                각성 사실이 확인된 사람은 국가기관에 헌터로 등록해야 한다.
                등록 과정에서는 신원 확인, 마나 측정, 능력 검사를 실시한다.
                미등록 상태에서 능력을 사용하거나 게이트에 진입하는 행위는
                불법 행위로 규정한다.
              </p>
            </div>

            <div className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 sm:grid-cols-[70px_260px_1fr] sm:gap-8">
              <p className="font-serif text-sm text-sky-300/85">02</p>

              <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                게이트 출동 의무
              </h3>

              <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                게이트 브레이크나 대규모 마물 재난이 발생한 경우, 국가는
                소속 세력과 관계없이 등록 헌터에게 긴급 동원 명령을 발령할 수
                있으며, 등록 헌터는 이에 응해야 한다.
              </p>
            </div>

            <div className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 sm:grid-cols-[70px_260px_1fr] sm:gap-8">
              <p className="font-serif text-sm text-sky-300/85">03</p>

              <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                능력 사용의 제한
              </h3>

              <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                민간지역에서 허가 없이 능력을 사용하는 행위는 금지된다.
                정당방위나 긴급한 마물 대응을 제외한 능력 사용은 등급과 피해
                규모에 따라 중범죄로 처벌된다.
              </p>
            </div>

            <div className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 sm:grid-cols-[70px_260px_1fr] sm:gap-8">
              <p className="font-serif text-sm text-sky-300/85">04</p>

              <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                사전 보고의 의무
              </h3>

              <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                헌터가 도시 내부에서 대규모 능력을 전개하거나 장거리 작전에
                참여할 경우 관할 기관에 사전 보고하는 것을 원칙으로 한다.
              </p>
            </div>

            <div className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 sm:grid-cols-[70px_260px_1fr] sm:gap-8">
              <p className="font-serif text-sm text-sky-300/85">05</p>

              <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                범죄 헌터의 제압
              </h3>

              <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                능력을 이용한 범죄는 일반 범죄보다 무겁게 처벌된다. 고위 헌터가
                범죄를 저지르면 동급 이상의 헌터로 구성된 전담 제압부대가
                투입된다.
              </p>
            </div>

            <div className="grid grid-cols-[44px_1fr] gap-5 py-8 sm:grid-cols-[70px_260px_1fr] sm:gap-8">
              <p className="font-serif text-sm text-sky-300/85">06</p>

              <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                정보 보고의 의무
              </h3>

              <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                게이트 내부에서 새로운 마물이나 미확인 물질, 변칙현상을 발견한
                헌터는 귀환 직후 관련 정보를 중앙기록국에 보고해야 한다.
              </p>
            </div>
          </div>

          {/* 공식 대우 */}
          <div className="mt-14">
            <p className="text-[9px] tracking-[0.22em] text-sky-300/80">
              OFFICIAL TREATMENT
            </p>

            <h3 className="mt-3 font-serif text-2xl text-[#eee8dc] sm:text-3xl">
              공식 대우
            </h3>

            <p className="mt-4 max-w-3xl break-keep text-sm leading-7 text-zinc-300">
              헌터에게 적용되는 대우와 지원 범위는 등급과 공략 실적에 따라
              달라진다.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  공략 보수
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  헌터는 게이트 등급과 공략 기여도에 따라 보수를 지급받는다.
                  고등급 게이트의 공략 보수는 일반인의 평생 소득을 넘어서는
                  수준에 이른다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  세금 감면
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  정식 등록 헌터에게는 공략 수입과 전투장비 구입에 대한 세금
                  감면이 적용된다. 감면 범위는 등급과 활동 실적에 따라
                  달라진다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  의료 지원
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  등록 헌터는 마나 중독과 게이트 부상을 전문적으로 치료하는
                  헌터 전용 의료시설을 이용할 수 있다. 공략 중 발생한 부상은
                  국가와 소속 세력이 우선적으로 치료한다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  장비 소지 권한
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  공인 헌터는 일반인에게 금지된 마도구와 전투장비를 소지할 수 있다.
                  장비의 위험도에 따라 별도의 등록과 허가가 요구된다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  거주 및 이동 지원
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  헌터는 방벽도시 내부의 우선 거주권과 재난 발생 시 전용 이동로를
                  이용할 수 있다. 고위 헌터에게는 별도의 경호 인력과 전용 이동
                  수단을 제공한다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  사회적 지위
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  C급 이상의 헌터는 지역사회의 주요 전력으로 대우받는다. B급 이상은
                  국가 주요 인사에 준하는 경호 대상이며 동시에 상시 관리
                  대상으로 분류한다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  유가족 보상
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  공략이나 마물 토벌 중 사망·실종된 헌터의 유가족에게는 국가보상금과
                  장기 생계지원, 유가족 보호 정책을 우선 적용한다.
                </p>
              </div>

              <div className="bg-[#0a0c0e] p-6 sm:p-8">
                <p className="font-serif text-xl text-sky-100">
                  세력 가입 권한
                </p>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  등록 헌터는 국가기관이나 길드에 가입할 수 있다. 다만 B급
                  이상의 헌터가 소속을 옮길 경우 국가기관에 계약과 소속 변경
                  사실을 신고해야 한다.
                </p>
              </div>
            </div>
          </div>

          {/* 최종 안내 */}
          <div className="mt-10 border-y border-amber-300/15 bg-amber-950/[0.025] px-5 py-8 text-center sm:px-8">
            <p className="font-serif text-lg leading-9 text-amber-100/90 sm:text-xl">
              헌터가 누리는 모든 권리는 그들이 감당하는 위험에 대한 대가다.
            </p>

            <p className="mt-4 break-keep text-xs leading-6 text-zinc-300 sm:text-sm">
              등록과 활동 의무를 거부한 헌터는 국가가 제공하는 보호와 지원
              대상에서 제외될 수 있다.
            </p>
          </div>
        </section>

        {/* 마무리 */}
        <section className="hunter-rise hunter-delay-7 py-14 text-center sm:py-20">
          <p className="font-serif text-xl leading-9 text-sky-100/90 sm:text-2xl">
            헌터는 인류를 지키는 방패다.
          </p>

          <p className="mt-4 font-serif text-xl leading-9 text-[#f1eadb] sm:text-2xl">
            동시에 인류가 통제해야 하는 가장 강력한 무력이다.
          </p>
        </section>

        {/* 푸터 */}
        <footer className="hunter-rise hunter-delay-8 border-t border-white/[0.08] pt-8 text-center">
          <p className="text-[11px] tracking-[0.25em] text-zinc-300 sm:text-xs">
            made by. Robin
          </p>

          <p className="mx-auto mt-5 max-w-2xl break-keep text-[10px] leading-6 text-zinc-400 sm:text-xs sm:leading-7">
            본 사이트는 Robin이 직접 기획 및 제작한 세계관
            아카이브입니다.
            <br className="hidden sm:block" />
            사이트에 포함된 모든 설정, 문서 및 콘텐츠의 저작권은
            제작자에게 있으며,
            <br className="hidden sm:block" />
            사전 허가 없는 무단 복제, 재배포 및 재가공을 금합니다.
          </p>

          <p className="mt-5 text-[8px] tracking-[0.15em] text-zinc-500 sm:text-[10px]">
            © 2026 Robin. All Rights Reserved.
          </p>
        </footer>
      </article>

      <style>{`
        .hunter-rise {
          opacity: 0;
          transform: translateY(42px);
          animation: hunterRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .hunter-delay-1 {
          animation-delay: 0.04s;
        }

        .hunter-delay-2 {
          animation-delay: 0.14s;
        }

        .hunter-delay-3 {
          animation-delay: 0.24s;
        }

        .hunter-delay-4 {
          animation-delay: 0.34s;
        }

        .hunter-delay-5 {
          animation-delay: 0.44s;
        }

        .hunter-delay-6 {
          animation-delay: 0.54s;
        }

        .hunter-delay-7 {
          animation-delay: 0.64s;
        }

        .hunter-delay-8 {
          animation-delay: 0.74s;
        }

        @keyframes hunterRise {
          from {
            opacity: 0;
            transform: translateY(42px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hunter-rise {
            opacity: 1;
            transform: none;
            filter: none;
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}