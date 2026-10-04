"use client";

import Link from "next/link";
import { useState } from "react";

type RuleTone = "danger" | "warning" | "system" | "neutral";

type AbilityRule = {
  number: string;
  title: string;
  description: string;
  tone: RuleTone;
};

const characterRestrictions = [
  {
    number: "01",
    title: "인간 외 종족",
    description:
      "플레이어 캐릭터는 인간만 허용합니다. 마물, 신, 정령, 이종족 및 인간이 아닌 존재는 등록할 수 없습니다.",
  },
  {
    number: "02",
    title: "과도한 연령",
    description:
      "120세 이상 생존했다는 설정은 허용하지 않습니다. 외형과 실제 연령을 분리하는 설정 또한 동일하게 적용합니다.",
  },
  {
    number: "03",
    title: "마나 발생 이전의 능력",
    description:
      "마나가 존재하지 않던 시대부터 마나를 다루거나 각성 능력을 사용했다는 설정은 허용하지 않습니다.",
  },
  {
    number: "04",
    title: "세계관 규모를 초과하는 전투력",
    description:
      "대륙을 단독으로 파괴하거나 그에 준하는 피해를 발생시키는 설정과 묘사는 허용하지 않습니다.",
  },
  {
    number: "05",
    title: "진행을 방해하는 과도한 설정",
    description:
      "독창성의 범위를 넘어 다른 플레이어와 스토리 진행을 제한하는 설정은 허용하지 않습니다.",
  },
];

const abilityRestrictions: AbilityRule[] = [
  {
    number: "01",
    title: "시간·공간 간섭",
    description:
      "시간 정지, 시간 역행, 공간 절단, 차원 조작 등 시간과 공간에 직접 간섭하는 능력은 허용하지 않습니다. 단, 제한 조건이 명확한 순간이동은 허용합니다.",
    tone: "system",
  },
  {
    number: "02",
    title: "화폐·성장 자원 조작",
    description:
      "골드, 경험치, 포인트 및 그에 준하는 화폐나 성장 자원을 생성하거나 조작하는 능력은 허용하지 않습니다.",
    tone: "warning",
  },
  {
    number: "03",
    title: "즉사·파훼 불가능 공격",
    description:
      "일격에 상대를 사망시키거나, 회피·방어·대응이 사실상 불가능하도록 설계된 공격은 허용하지 않습니다.",
    tone: "danger",
  },
  {
    number: "04",
    title: "부활·무적",
    description:
      "사망 이후 부활하거나, 모든 공격과 피해를 무효화하는 무적 상태를 부여하는 능력은 허용하지 않습니다.",
    tone: "danger",
  },
  {
    number: "05",
    title: "퍼센트 계열 피해",
    description:
      "상대의 현재 체력이나 최대 체력에 비례하여 N%의 피해를 가하는 능력은 허용하지 않습니다.",
    tone: "warning",
  },
  {
    number: "06",
    title: "무한 소환·제작",
    description:
      "소모와 유지 한계 없이 영구적으로 유지되는 소환물이나 제작물을 생성하는 능력은 허용하지 않습니다.",
    tone: "system",
  },
  {
    number: "07",
    title: "무한 버프·디버프",
    description:
      "횟수, 시간, 범위 또는 해제 조건 없이 무한히 적용되는 강화와 약화 효과는 허용하지 않습니다.",
    tone: "system",
  },
  {
    number: "08",
    title: "오해를 유발하는 능력",
    description:
      "해석에 따라 효과가 크게 달라지거나 지속적인 분쟁과 오해를 일으킬 가능성이 있는 능력은 관리진의 조정 대상이 됩니다.",
    tone: "neutral",
  },
];

function getRuleTone(tone: RuleTone) {
  const styles: Record<
    RuleTone,
    {
      border: string;
      badge: string;
      glow: string;
      label: string;
    }
  > = {
    danger: {
      border: "border-rose-300/25",
      badge: "border-rose-300/35 bg-rose-400/[0.06] text-rose-100",
      glow: "from-rose-500/[0.12]",
      label: "금지",
    },
    warning: {
      border: "border-amber-300/25",
      badge: "border-amber-300/35 bg-amber-400/[0.06] text-amber-100",
      glow: "from-amber-500/[0.12]",
      label: "제한",
    },
    system: {
      border: "border-sky-300/25",
      badge: "border-sky-300/35 bg-sky-400/[0.06] text-sky-100",
      glow: "from-sky-500/[0.12]",
      label: "조정",
    },
    neutral: {
      border: "border-violet-300/25",
      badge:
        "border-violet-300/35 bg-violet-400/[0.06] text-violet-100",
      glow: "from-violet-500/[0.12]",
      label: "검토",
    },
  };

  return styles[tone];
}

export default function GuidelinePage() {
  const [openSection, setOpenSection] = useState<
    "character" | "ability" | null
  >("character");

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#070812] px-5 py-8 text-[#f4f1ff] sm:px-8 sm:py-12">
      {/* 배경 */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(99,102,241,0.2),transparent_38%),radial-gradient(circle_at_82%_12%,rgba(236,72,153,0.15),transparent_34%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.1),transparent_45%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="pointer-events-none fixed left-1/2 top-[-22rem] h-[58rem] w-[58rem] -translate-x-1/2 rounded-full border border-indigo-300/10 shadow-[0_0_130px_rgba(99,102,241,0.12)]" />

      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.68)] sm:shadow-[inset_0_0_250px_rgba(0,0,0,0.82)]" />

      <article className="relative z-10 mx-auto w-full max-w-6xl">
        {/* 헤더 */}
        <header className="guide-rise guide-delay-1 overflow-hidden rounded-[28px] border border-white/[0.1] bg-white/[0.045] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300/80 to-transparent" />

          <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-indigo-300/30 bg-indigo-400/[0.08] px-3 py-1 text-[9px] tracking-[0.2em] text-indigo-100">
                  PLAYER GUIDELINE
                </span>

                <span className="rounded-full border border-emerald-300/25 bg-emerald-400/[0.05] px-3 py-1 text-[9px] tracking-[0.2em] text-emerald-100">
                  VERSION 1.0
                </span>
              </div>

              <h1 className="mt-7 font-serif text-5xl tracking-[0.08em] text-white sm:text-7xl">
                가이드라인
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-sm leading-8 text-zinc-200 sm:text-base sm:leading-9">
                가이드라인은 보다 쾌적한 역극 환경을 위해 관리진이 제시하는
                운영 규정입니다. 본 문서에 명시된 기준은 모든 플레이어에게
                동일하게 적용합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/notice"
                className="group flex min-h-11 items-center gap-3 rounded-full border border-indigo-300/30 bg-indigo-400/[0.05] px-5 py-3 text-[10px] tracking-[0.16em] text-indigo-100 transition duration-300 hover:border-indigo-200/65 hover:bg-indigo-300/[0.1] hover:text-white"
              >
                <span className="transition duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                문서 목록
              </Link>

              <Link
                href="/"
                className="flex min-h-11 items-center rounded-full border border-white/15 px-5 py-3 text-[10px] tracking-[0.16em] text-zinc-300 transition duration-300 hover:border-white/35 hover:text-white"
              >
                메인
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-black/15 p-5">
              <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                적용 대상
              </p>
              <p className="mt-3 font-serif text-xl text-white">
                모든 플레이어
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-black/15 p-5">
              <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                현재 항목
              </p>
              <p className="mt-3 font-serif text-xl text-white">
                설정 및 능력 제한
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-black/15 p-5">
              <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                문서 상태
              </p>
              <p className="mt-3 font-serif text-xl text-emerald-100">
                운영 중
              </p>
            </div>
          </div>
        </header>

        {/* 안내 */}
        <section className="guide-rise guide-delay-2 mt-8 overflow-hidden rounded-[24px] border border-violet-300/20 bg-gradient-to-r from-violet-500/[0.09] via-indigo-500/[0.05] to-sky-500/[0.07] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-violet-300/30 bg-violet-400/[0.08] text-xl text-violet-100">
              !
            </div>

            <div>
              <p className="text-[9px] tracking-[0.22em] text-violet-200/80">
                BEFORE YOU CREATE
              </p>

              <h2 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                캐릭터를 제작하기 전에 확인해 주세요.
              </h2>

              <p className="mt-4 max-w-4xl break-keep text-sm leading-8 text-zinc-200 sm:text-base">
                아래 항목은 캐릭터의 독창성을 제한하기 위한 것이 아니라,
                모든 플레이어가 같은 기준 안에서 이야기를 이어갈 수 있도록
                마련한 최소한의 운영 기준입니다.
              </p>
            </div>
          </div>
        </section>

        {/* 캐릭터 설정 제한 */}
        <section className="guide-rise guide-delay-3 mt-8 overflow-hidden rounded-[26px] border border-rose-300/20 bg-[#0d0e1a]/90 backdrop-blur-xl">
          <button
            type="button"
            aria-expanded={openSection === "character"}
            onClick={() =>
              setOpenSection(
                openSection === "character" ? null : "character",
              )
            }
            className="group flex w-full items-center gap-5 p-6 text-left sm:p-8"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-rose-300/30 bg-rose-400/[0.08] font-serif text-2xl text-rose-100">
              01
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[9px] tracking-[0.22em] text-rose-200/70">
                CHARACTER RESTRICTIONS
              </p>

              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
                캐릭터 설정 제한
              </h2>

              <p className="mt-3 break-keep text-sm leading-7 text-zinc-300">
                캐릭터의 종족, 연령, 배경과 전투력에 관한 금지 기준입니다.
              </p>
            </div>

            <span
              className={`text-xl text-rose-200 transition duration-500 ${
                openSection === "character" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              openSection === "character"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/[0.08] p-5 sm:p-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {characterRestrictions.map((rule) => (
                    <article
                      key={rule.number}
                      className="group relative overflow-hidden rounded-2xl border border-rose-300/15 bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-rose-300/35 hover:bg-rose-400/[0.025]"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-rose-300/55 to-transparent" />

                      <p className="text-[9px] tracking-[0.2em] text-rose-200/65">
                        RESTRICTED · {rule.number}
                      </p>

                      <h3 className="mt-4 font-serif text-xl text-white sm:text-2xl">
                        {rule.title}
                      </h3>

                      <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                        {rule.description}
                      </p>
                    </article>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-400/[0.04] p-6">
                  <p className="text-[9px] tracking-[0.2em] text-amber-200/75">
                    제한 예시
                  </p>

                  <div className="mt-4 space-y-3 font-serif text-base leading-8 text-amber-50/90">
                    <p>
                      “그녀의 존재는 너무 강대해 협회에서 모든 정보를
                      제한하고 있다.”
                    </p>
                    <p>
                      “국가조차 감당하지 못하는 절대자지만 정체를 숨기고
                      있다.”
                    </p>
                  </div>

                  <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                    위와 같이 공개 검증과 상호작용을 피하기 위해 비밀 설정을
                    사용하는 방식은 허용하지 않습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 능력 제한 */}
        <section className="guide-rise guide-delay-4 mt-8 overflow-hidden rounded-[26px] border border-sky-300/20 bg-[#0d0e1a]/90 backdrop-blur-xl">
          <button
            type="button"
            aria-expanded={openSection === "ability"}
            onClick={() =>
              setOpenSection(openSection === "ability" ? null : "ability")
            }
            className="group flex w-full items-center gap-5 p-6 text-left sm:p-8"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-sky-300/30 bg-sky-400/[0.08] font-serif text-2xl text-sky-100">
              02
            </span>

            <div className="min-w-0 flex-1">
              <p className="text-[9px] tracking-[0.22em] text-sky-200/70">
                ABILITY RESTRICTIONS
              </p>

              <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
                능력 설정 제한
              </h2>

              <p className="mt-3 break-keep text-sm leading-7 text-zinc-300">
                전투 판정과 스토리 진행을 방해할 수 있는 능력에 관한 기준입니다.
              </p>
            </div>

            <span
              className={`text-xl text-sky-200 transition duration-500 ${
                openSection === "ability" ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>

          <div
            className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              openSection === "ability"
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/[0.08] p-5 sm:p-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {abilityRestrictions.map((rule) => {
                    const tone = getRuleTone(rule.tone);

                    return (
                      <article
                        key={rule.number}
                        className={`group relative overflow-hidden rounded-2xl border bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.025] ${tone.border}`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${tone.glow} via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100`}
                        />

                        <div className="relative">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                              ABILITY · {rule.number}
                            </p>

                            <span
                              className={`rounded-full border px-3 py-1 text-[8px] tracking-[0.16em] ${tone.badge}`}
                            >
                              {tone.label}
                            </span>
                          </div>

                          <h3 className="mt-4 font-serif text-xl text-white sm:text-2xl">
                            {rule.title}
                          </h3>

                          <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                            {rule.description}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 전투력 프로필 가이드 */}
        <section className="guide-rise guide-delay-5 mt-8 overflow-hidden rounded-[26px] border border-emerald-300/20 bg-[#0d0e1a]/90 backdrop-blur-xl">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-300/30 bg-emerald-400/[0.08] font-serif text-2xl text-emerald-100">
                03
              </span>

              <div>
                <p className="text-[9px] tracking-[0.22em] text-emerald-200/70">
                  COMBAT PROFILE GUIDE
                </p>

                <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
                  전투력 프로필 가이드
                </h2>

                <p className="mt-4 max-w-4xl break-keep text-sm leading-8 text-zinc-300 sm:text-base">
                  플레이어가 작성해야 하는 전투 능력치는
                  <span className="mx-2 text-emerald-100">신체</span>
                  와
                  <span className="mx-2 text-violet-100">능력</span>
                  두 항목으로 구분합니다.
                </p>
              </div>
            </div>
          </div>

          {/* 신체 능력 */}
          <div className="border-t border-white/[0.08] p-5 sm:p-8">
            <div className="rounded-[22px] border border-emerald-300/15 bg-emerald-400/[0.025] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] tracking-[0.22em] text-emerald-200/70">
                    PHYSICAL PARAMETERS
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                    신체 능력
                  </h3>
                </div>

                <span className="rounded-full border border-emerald-300/25 bg-emerald-400/[0.05] px-3 py-1 text-[8px] tracking-[0.18em] text-emerald-100">
                  동등급 기준
                </span>
              </div>

              <p className="mt-5 break-keep text-sm leading-8 text-zinc-300 sm:text-base">
                신체 능력은
                <span className="mx-1 text-zinc-100">근력</span>,
                <span className="mx-1 text-zinc-100">민첩성</span>,
                <span className="mx-1 text-zinc-100">공격력</span>,
                <span className="mx-1 text-zinc-100">방어력</span>
                으로 나누어 작성합니다.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {["근력", "민첩성", "공격력", "방어력"].map((stat) => (
                  <div
                    key={stat}
                    className="rounded-2xl border border-white/[0.08] bg-black/20 p-5 text-center"
                  >
                    <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                      STAT
                    </p>
                    <p className="mt-3 font-serif text-xl text-white">{stat}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                  적용 가능한 수치
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "최하위권",
                    "하위권",
                    "중하위권",
                    "중위권",
                    "중상위권",
                    "상위권",
                    "최상위권",
                  ].map((tier, index) => (
                    <span
                      key={tier}
                      className={`rounded-full border px-3 py-1.5 text-[9px] tracking-[0.12em] ${
                        index === 3
                          ? "border-emerald-300/35 bg-emerald-400/[0.08] text-emerald-100"
                          : "border-white/[0.1] bg-white/[0.025] text-zinc-300"
                      }`}
                    >
                      {tier}
                      {index === 3 ? " · 평균" : ""}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-amber-300/20 bg-amber-400/[0.035] p-6">
                <p className="text-[9px] tracking-[0.2em] text-amber-200/75">
                  평균화 원칙
                </p>

                <p className="mt-4 break-keep text-sm leading-8 text-zinc-200 sm:text-base">
                  네 가지 신체 수치의 종합은 동등급 기준 평균에 수렴해야 합니다.
                  특정 수치가 높을수록 다른 수치에는 그에 상응하는 약점이
                  존재해야 합니다.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {[
                  {
                    title: "예시 01",
                    stats: [
                      ["근력", "최상위권"],
                      ["민첩성", "최하위권"],
                      ["공격력", "중위권"],
                      ["방어력", "중위권"],
                    ],
                  },
                  {
                    title: "예시 02",
                    stats: [
                      ["근력", "중상위권"],
                      ["민첩성", "상위권"],
                      ["공격력", "중하위권"],
                      ["방어력", "하위권"],
                    ],
                  },
                  {
                    title: "예시 03",
                    stats: [
                      ["근력", "하위권"],
                      ["민첩성", "최상위권"],
                      ["공격력", "중상위권"],
                      ["방어력", "최하위권"],
                    ],
                  },
                  {
                    title: "예시 04",
                    stats: [
                      ["근력", "중위권"],
                      ["민첩성", "중하위권"],
                      ["공격력", "상위권"],
                      ["방어력", "하위권"],
                    ],
                  },
                ].map((example) => (
                  <article
                    key={example.title}
                    className="rounded-2xl border border-white/[0.08] bg-black/20 p-6"
                  >
                    <p className="text-[9px] tracking-[0.2em] text-emerald-200/65">
                      {example.title}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      {example.stats.map(([label, value]) => (
                        <div
                          key={`${example.title}-${label}`}
                          className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                        >
                          <p className="text-[9px] tracking-[0.14em] text-zinc-500">
                            {label}
                          </p>
                          <p className="mt-2 font-serif text-lg text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* 능력 기준 */}
          <div className="border-t border-white/[0.08] p-5 sm:p-8">
            <div className="rounded-[22px] border border-violet-300/15 bg-violet-400/[0.025] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] tracking-[0.22em] text-violet-200/70">
                    ABILITY PARAMETERS
                  </p>

                  <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
                    능력 기준
                  </h3>
                </div>

                <span className="rounded-full border border-violet-300/25 bg-violet-400/[0.05] px-3 py-1 text-[8px] tracking-[0.18em] text-violet-100">
                  개별 심사
                </span>
              </div>

              <p className="mt-5 break-keep text-sm leading-8 text-zinc-300 sm:text-base">
                능력은 신체 수치처럼 절대적인 평균화 기준을 적용하지 않습니다.
                대신 위력, 범위, 지속시간, 재사용 대기시간과 패널티를 함께
                확인합니다.

                쿨타임은 반드시 지문제(2지문 이상)로 적어주세요!
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "최하위권",
                  "하위권",
                  "중하위권",
                  "중위권",
                  "중상위권",
                  "상위권",
                  "최상위권",
                  "극상위권",
                ].map((tier, index) => (
                  <span
                    key={tier}
                    className={`rounded-full border px-3 py-1.5 text-[9px] tracking-[0.12em] ${
                      index === 7
                        ? "border-fuchsia-300/35 bg-fuchsia-400/[0.08] text-fuchsia-100"
                        : index === 3
                          ? "border-violet-300/35 bg-violet-400/[0.08] text-violet-100"
                          : "border-white/[0.1] bg-white/[0.025] text-zinc-300"
                    }`}
                  >
                    {tier}
                    {index === 3 ? " · 평균" : ""}
                  </span>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
                <article className="rounded-2xl border border-sky-300/15 bg-sky-400/[0.025] p-6">
                  <p className="text-[9px] tracking-[0.2em] text-sky-200/70">
                    위력
                  </p>
                  <h4 className="mt-3 font-serif text-xl text-white">
                    강할수록 무거운 대가
                  </h4>
                  <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                    능력의 위력과 범위가 커질수록 재사용 대기시간과 준비 과정이
                    길어져야 합니다.
                  </p>
                </article>

                <article className="rounded-2xl border border-amber-300/15 bg-amber-400/[0.025] p-6">
                  <p className="text-[9px] tracking-[0.2em] text-amber-200/70">
                    패널티
                  </p>
                  <h4 className="mt-3 font-serif text-xl text-white">
                    명확한 약점
                  </h4>
                  <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                    강력한 능력에는 체력 소모, 행동 제한, 사용 조건 등
                    실질적인 패널티가 필요합니다.
                  </p>
                </article>

                <article className="rounded-2xl border border-violet-300/15 bg-violet-400/[0.025] p-6">
                  <p className="text-[9px] tracking-[0.2em] text-violet-200/70">
                    검토
                  </p>
                  <h4 className="mt-3 font-serif text-xl text-white">
                    전체 구성 심사
                  </h4>
                  <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                    관리진은 능력 하나가 아닌 캐릭터의 전체적인 전투 구성을
                    기준으로 수정 권고를 진행합니다.
                  </p>
                </article>
              </div>

              <div className="mt-8 rounded-2xl border border-fuchsia-300/25 bg-fuchsia-400/[0.04] p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-fuchsia-300/35 bg-fuchsia-400/[0.08] px-3 py-1 text-[8px] tracking-[0.16em] text-fuchsia-100">
                    극상위권 예외
                  </span>

                  <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                    MINIMUM RANK · B
                  </p>
                </div>

                <p className="mt-5 break-keep text-sm leading-8 text-zinc-200 sm:text-base">
                  극상위권 능력은 최소 B등급 이상의 캐릭터에게만 허용하며,
                  일반 기술이 아닌 궁극기 형태로만 신청할 수 있습니다.
                  해당 항목은 다른 능력보다 엄격하게 심사합니다.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-rose-300/25 bg-rose-400/[0.04] p-6">
                <p className="text-[9px] tracking-[0.2em] text-rose-200/75">
                  등급 제한
                </p>

                <h4 className="mt-3 font-serif text-xl text-white sm:text-2xl">
                  염동력 및 순간이동 계열 능력
                </h4>

                <p className="mt-4 break-keep text-sm leading-8 text-zinc-300 sm:text-base">
                  염동력 및 순간이동 계열 능력은 B등급 이상 캐릭터만 사용할 수 있습니다.
                  B등급 미만 캐릭터는 해당 계열의 능력을 신청할 수 없습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 임시 마무리 */}
        <section className="guide-rise guide-delay-6 mt-8 rounded-[24px] border border-white/[0.1] bg-white/[0.025] p-6 text-center sm:p-9">
          <p className="text-[9px] tracking-[0.22em] text-zinc-500">
            GUIDELINE NOTICE
          </p>

          <p className="mt-5 font-serif text-xl leading-9 text-white sm:text-2xl">
            본 문서는 운영 상황에 따라 추가되거나 조정될 수 있습니다.
          </p>

          <p className="mx-auto mt-4 max-w-3xl break-keep text-sm leading-7 text-zinc-300">
            명시되지 않은 설정이라도 다른 플레이어의 참여와 스토리 진행을
            현저히 방해할 경우 관리진의 검토 및 조정 대상이 될 수 있습니다.
          </p>
        </section>

        <footer className="guide-rise guide-delay-7 mt-14 border-t border-white/[0.1] pt-8 text-center">
          <p className="text-[9px] tracking-[0.28em] text-indigo-200/70">
            ROBIN PROJECT · PLAYER OPERATIONS
          </p>

          <p className="mt-5 text-[8px] tracking-[0.15em] text-zinc-500 sm:text-[10px]">
            © 2026 Robin. All Rights Reserved.
          </p>
        </footer>
      </article>

      <style>{`
        .guide-rise {
          opacity: 0;
          transform: translateY(34px);
          animation: guideRise 0.9s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .guide-delay-1 { animation-delay: 0.04s; }
        .guide-delay-2 { animation-delay: 0.14s; }
        .guide-delay-3 { animation-delay: 0.24s; }
        .guide-delay-4 { animation-delay: 0.34s; }
        .guide-delay-5 { animation-delay: 0.44s; }
        .guide-delay-6 { animation-delay: 0.54s; }
        .guide-delay-7 { animation-delay: 0.64s; }

        @keyframes guideRise {
          from {
            opacity: 0;
            transform: translateY(34px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .guide-rise {
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