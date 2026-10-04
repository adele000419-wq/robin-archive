"use client";

import Link from "next/link";
import { useState } from "react";

type ArtifactTier = {
  id: string;
  name: string;
  english: string;
  subtitle: string;
  description: string[];
  quote?: string;
  tone: "normal" | "rare" | "unique" | "legendary" | "relic";
};

const artifactTiers: ArtifactTier[] = [
  {
    id: "normal",
    name: "기본",
    english: "NORMAL",
    subtitle: "일반 장비",
    description: [
      "가장 흔하게 볼 수 있는 장비.",
      "특별한 능력은 존재하지 않는다.",
      "헌터의 마나를 견딜 수 있도록 제작된 검이나 방패, 방어구 등이 대부분이며 일반적인 장비보다 내구성이 뛰어날 수는 있지만 사용자의 능력을 강화하거나 특별한 현상을 발생시키지는 않는다.",
      "때문에 엄밀히 따지면 아티팩트라고 부르기 애매한 물건도 상당수 포함되어 있다.",
    ],

    tone: "normal",
  },
  {
    id: "rare",
    name: "레어",
    english: "RARE",
    subtitle: "스테이크는 레어로",
    description: [
      "본격적으로 아티팩트라 부를 만한 장비.",
      "장비 자체에 하나 혹은 두 개 정도의 특수한 능력이 존재한다.",
      "착용자의 신체 능력을 강화하거나 마나 회복을 돕는 것부터, 불꽃을 발생시키거나 충격을 흡수하는 것까지 효과는 다양하다.",
      "효과 자체가 압도적으로 강력한 경우는 드물지만 능력과 장비의 궁합에 따라서는 헌터의 전투력을 한 단계 끌어올리기도 한다.",
      "때문에 실전에서 활동하는 헌터들이 가장 흔하게 사용하는 아티팩트이기도 하다.",
    ],
    tone: "rare",
  },
  {
    id: "unique",
    name: "유니크",
    english: "UNIQUE",
    subtitle: "유니클로",
    description: [ 
      "유니크 아티팩트는 일반적인 제작 방식으로는 만들어내기 어렵다.",
      "희귀한 소재를 이용해 특수한 가공 과정을 거치거나, 고등급 게이트의 보스 및 네임드 마물을 처치했을 때 획득할 수 있다.",
      "단순한 능력치 강화뿐만 아니라 장비만의 고유한 능력을 가지고 있는 경우가 많다.",
      "검을 휘두를 때마다 참격이 발생한다거나, 치명상을 한 번 대신 받아준다거나, 특정 조건에서 사용자의 능력을 극단적으로 증폭시키는 식이다.",
      "같은 유니크 등급이라 하더라도 성능 차이는 상당하다.",
    ],
    quote: "유니크 아티팩트를 가지고 있다는 사실 자체가 헌터의 전력으로 평가된다.",
    tone: "unique",
  },
  {
    id: "legendary",
    name: "레전더리",
    english: "LEGENDARY",
    subtitle: "레전드 네버 다이",
    description: [
      "돈이 있다고 살 수 있는 물건이 아니다.",
      "강하다고 해서 반드시 얻을 수 있는 물건도 아니다.",  
      "최상위 게이트의 보스에게서 발견되거나, 지금까지 단 한 번밖에 확인되지 않은 특수한 조건을 충족했을 때 나타나는 등 획득 경로부터 정상적이지 않은 경우가 대부분이다.",
      "그 능력 또한 기존 아티팩트와 비교하기 어렵다.",
      "사용자의 전투수준을 상승시켜주는 것을 넘어 전투의 규칙 자체를 바꾸는 능력을 지닌 물건도 존재한다.", 
      "현재까지 확인된 레전더리 아티팩트의 숫자는 많지 않다.",
      "그리고 그중 상당수는 이미 이름을 가지고 있다.",  
    ],
    quote: "그것을 처음 발견했을 때부터 존재했던 이름을.",
    tone: "legendary",
  },
  {
    id: "relic",
    name: "성유물",
    english: "RELIC",
    subtitle: "분류 불가",
    description: [
      "정보 없음.",
      "발견 경로 불명.",
      "제작 방식 불명.",
      "등급 측정 불가.",
      "마나 구조 분석 실패.",
      "일부 기록에서 해당 분류에 속하는 것으로 추정되는 물품이 언급되었으나 중앙기록국은 성유물의 존재 여부에 대해 공식적인 답변을 거부하고 있다.",
      "따라서 현재 공개 가능한 정보는 존재하지 않는다.",
    ],
    tone: "relic",
  },
];

const toneClasses = {
  normal: {
    border: "border-zinc-400/20",
    accent: "text-zinc-300",
    glow: "shadow-none",
    bg: "bg-white/[0.015]",
  },
  rare: {
    border: "border-sky-300/25",
    accent: "text-sky-200",
    glow: "shadow-[0_0_28px_rgba(125,211,252,0.06)]",
    bg: "bg-sky-950/[0.025]",
  },
  unique: {
    border: "border-violet-300/30",
    accent: "text-violet-200",
    glow: "shadow-[0_0_32px_rgba(196,181,253,0.08)]",
    bg: "bg-violet-950/[0.03]",
  },
  legendary: {
    border: "border-amber-300/35",
    accent: "text-amber-100",
    glow: "shadow-[0_0_42px_rgba(251,191,36,0.1)]",
    bg: "bg-amber-950/[0.035]",
  },
  relic: {
    border: "border-white/[0.08]",
    accent: "text-zinc-200",
    glow: "shadow-[0_0_60px_rgba(255,255,255,0.03)]",
    bg: "bg-black",
  },
} as const;

export default function ArtifactPage() {
  const [openTier, setOpenTier] = useState<string | null>("normal");

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#070807] px-5 py-10 text-[#eee9df] sm:px-8 sm:py-14">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(185,148,70,0.13),transparent_38%),radial-gradient(circle_at_12%_62%,rgba(85,55,121,0.06),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_260px_rgba(0,0,0,0.92)]" />

      <article className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="relative overflow-hidden border border-[#c9a85f]/22 bg-black/25 px-6 py-12 shadow-[0_35px_120px_rgba(0,0,0,0.5)] sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e7ca83]/85 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(7rem,22vw,20rem)] font-black tracking-[-0.05em] text-[#d5b86f]/[0.035]">
            ARTIFACT
          </div>

          <div className="relative">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-[9px] tracking-[0.3em] text-[#c9a85f]">
                  SIGNAL ARCHIVE · DOCUMENT 07
                </p>

                <h1 className="mt-5 font-serif text-5xl tracking-[0.08em] text-[#fff8e8] sm:text-7xl">
                  아티팩트
                </h1>

                <p className="mt-6 max-w-3xl break-keep text-sm leading-8 text-zinc-400 sm:text-base">
                  게이트 내부에서 발견되거나 마물을 통해 획득한 특수 물품에 관한 공식 기록.
                </p>
              </div>

              <Link
                href="/notice"
                className="group flex w-fit items-center gap-3 border border-[#c9a85f]/35 bg-black/20 px-5 py-3 text-[10px] tracking-[0.16em] text-[#e7ca83] transition hover:border-[#e7ca83]/70 hover:bg-[#c9a85f]/[0.05]"
              >
                <span className="transition group-hover:-translate-x-1">←</span>
                문서 목록
              </Link>
            </div>
          </div>
        </header>

        <section className="border-b border-white/[0.09] py-14 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <p className="font-serif text-2xl leading-10 text-[#f1e4c2] sm:text-3xl">
              게이트가 세상에 모습을 드러낸 이후,
              <br />
              인류는 그 안에서 마물만을 발견한 것이 아니었다.
            </p>

            <div className="mt-10 space-y-3 text-lg leading-8 text-zinc-300">
              <p>현실에서는 존재하지 않는 금속.</p>
              <p>마나를 머금은 보석.</p>
              <p>제작자를 알 수 없는 무구.</p>
            </div>

            <p className="mt-9 break-keep text-base leading-8 text-zinc-300">
              그리고 때로는,{" "}
              <strong className="font-normal text-[#f0d58a]">
                누가 무엇을 위해 만들었는지조차 알 수 없는 물건들.
              </strong>
            </p>

            <p className="mt-8 break-keep text-sm leading-8 text-zinc-400 sm:text-base">
              인류는 게이트 내부에서 발견되거나 마물을 통해 획득한 특수한 물품을
              통틀어{" "}
              <span className="font-serif text-[#f0d58a]">
                아티팩트(Artifact)
              </span>
              라 부른다.
            </p>
          </div>
        </section>

        <section className="border-b border-white/[0.09] py-14 sm:py-20">
          <div className="text-center">
            <p className="text-[9px] tracking-[0.28em] text-[#c9a85f]">
              ARTIFACT CLASSIFICATION
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#fff8e8] sm:text-5xl">
              아티팩트 등급
            </h2>

            <p className="mx-auto mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-500">
              아티팩트는 성능과 희소성, 획득 난이도에 따라 다섯 등급으로 구분된다.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-5 gap-2">
            {artifactTiers.map((tier, index) => {
              const style = toneClasses[tier.tone];

              return (
                <div key={tier.id} className="text-center">
                  <div
                    className={`h-1 ${
                      tier.tone === "normal"
                        ? "bg-zinc-500/40"
                        : tier.tone === "rare"
                          ? "bg-sky-300/55"
                          : tier.tone === "unique"
                            ? "bg-violet-300/65"
                            : tier.tone === "legendary"
                              ? "bg-amber-300/80"
                              : "bg-white/30"
                    }`}
                  />
                  <p className={`mt-3 font-serif text-sm ${style.accent}`}>
                    {tier.name}
                  </p>
                  <p className="mt-1 text-[7px] tracking-[0.14em] text-zinc-700 sm:text-[8px]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-4xl border border-white/[0.08] bg-black/20 px-6 py-6 text-center">
            <p className="font-serif text-lg leading-8 text-[#e8dcc0]">
              기본 → 레어 → 유니크 → 레전더리 → 성유물
            </p>
          </div>

          <p className="mx-auto mt-7 max-w-4xl break-keep text-center text-sm leading-8 text-zinc-500">
            다만 마지막 단계인 성유물은 사실상 등급이라기보다, 기존의 분류 체계
            어디에도 포함시킬 수 없는 물건을 임시로 구분하기 위한 명칭에 가깝다.
          </p>
        </section>

        <section className="py-14 sm:py-20">
          <div className="space-y-5">
            {artifactTiers.map((tier) => {
              const isOpen = openTier === tier.id;
              const style = toneClasses[tier.tone];

              return (
                <article
                  key={tier.id}
                  className={`overflow-hidden border ${style.border} ${style.bg} ${style.glow} transition duration-300`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenTier(isOpen ? null : tier.id)}
                    className="group flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8 sm:py-7"
                  >
                    <div className="min-w-0 flex-1">
                      <p className={`text-[9px] tracking-[0.22em] ${style.accent}`}>
                        {tier.english}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <h3 className="font-serif text-2xl text-[#f4ede1] sm:text-3xl">
                          {tier.name}
                        </h3>

                        <span className="text-[10px] text-zinc-500">
                          {tier.subtitle}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-xl ${style.accent} transition duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.07] px-6 py-7 sm:px-8 sm:py-9">
                        {tier.tone === "relic" ? (
                          <div className="py-8 text-center sm:py-12">
                            <p className="text-[9px] tracking-[0.3em] text-zinc-600">
                              RELIC ARCHIVE
                            </p>

                            <h4 className="mt-6 font-serif text-4xl tracking-[0.08em] text-white sm:text-6xl">
                              정보 없음.
                            </h4>

                            <div className="mx-auto mt-8 h-px w-44 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                            <div className="mx-auto mt-9 max-w-xl space-y-3 font-mono text-xs tracking-[0.16em] text-zinc-500 sm:text-sm">
                              <p>발견 경로 불명.</p>
                              <p>제작 방식 불명.</p>
                              <p>등급 측정 불가.</p>
                              <p>마나 구조 분석 실패.</p>
                            </div>

                            <p className="mx-auto mt-10 max-w-3xl break-keep text-sm leading-8 text-zinc-500">
                              일부 기록에서 해당 분류에 속하는 것으로 추정되는 물품이
                              언급되었으나 중앙기록국은 성유물의 존재 여부에 대해 공식적인
                              답변을 거부하고 있다.
                            </p>

                            <p className="mt-7 font-serif text-lg text-zinc-300">
                              따라서 현재 공개 가능한 정보는 존재하지 않는다.
                            </p>
                          </div>
                        ) : (
                          <>
                            <div className="space-y-5">
                              {tier.description.map((paragraph) => (
                                <p
                                  key={paragraph}
                                  className="break-keep text-sm leading-8 text-zinc-400 sm:text-base sm:leading-9"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>

                            {tier.quote && (
                              <div className="mt-8 border-l-2 border-current/35 pl-5">
                                <p className={`font-serif text-xl leading-9 ${style.accent}`}>
                                  {tier.quote}
                                </p>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-[#c9a85f]/18 bg-black/25 px-6 py-14 text-center sm:px-10 sm:py-20">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(6rem,18vw,14rem)] text-[#c9a85f]/[0.03]">
            ARTIFACT
          </div>

          <div className="relative">
            <p className="text-[9px] tracking-[0.3em] text-[#c9a85f]">
              CENTRAL ARCHIVE NOTE
            </p>

            <p className="mx-auto mt-7 max-w-4xl break-keep font-serif text-2xl leading-10 text-[#eee3c8] sm:text-4xl sm:leading-[1.55]">
              아티팩트는
              <br />
              때로는 하나의 전력이며,
              <br />
              때로는 하나의 서사이다.
            </p>
          </div>
        </section>

        <footer className="pt-10 text-center">
          <p className="text-[9px] tracking-[0.28em] text-zinc-600">
            SIGNAL CENTRAL ARCHIVE · DOCUMENT 07
          </p>
        </footer>
      </article>
    </main>
  );
}