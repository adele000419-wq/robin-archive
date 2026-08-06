"use client";

import Link from "next/link";
import { useState } from "react";

const abilityFields = [
  "능력명",
  "능력 설명",
  "사용 조건",
  "효과 범위",
  "유효 거리",
  "유지 시간",
  "사용 횟수",
  "재사용 대기시간",
  "패널티",
];

const registrationSteps = [
  "프로필 작성",
  "관리진 검토",
  "수정 권고",
  "최종 승인",
  "인명부 등록",
];

const profileTemplate = `이름:
나이:
성별:
등급:
소속:

외형:
성격:

능력명:
능력 설명:
사용 조건:
효과 범위:
유효 거리:
유지 시간:
사용 횟수:
재사용 대기시간:
패널티:

특이사항:`;

const relatedDocuments = [
  {
    number: "03",
    code: "HUNTER",
    title: "헌터",
    description: "각성자의 등급, 능력, 활동 기준에 관한 공식 기록.",
    href: "/notice/hunter",
  },
  {
    number: "04",
    code: "FACTION",
    title: "기관",
    description: "대한민국 헌터협회와 중앙기록국에 관한 공식 기록.",
    href: "/notice/factions",
  },
  {
    number: "07",
    code: "GUIDELINE",
    title: "가이드라인",
    description: "세계관 설정 및 플레이에 적용되는 공식 규정과 운영 지침.",
    href: "/notice/guideline",
  },
  {
    number: "01",
    code: "WORLD",
    title: "세계관",
    description: "게이트 출현 이후 변화한 세계와 잔존 인류에 관한 기록.",
    href: "/notice/world",
  },
];

type HunterRank = "A" | "B" | "C" | "D" | "E";

type HunterRecord = {
  name: string;
  rank: HunterRank;
  profileUrl: string;
};

const hunterRanks: HunterRank[] = ["A", "B", "C", "D", "E"];

const hunterRecords: HunterRecord[] = [
  {
    name: "이혜린(관리자용 예시)",
    rank: "A",
    profileUrl: "https://example.com/profile/kim-seojin",
  },
  {
    name: "한유라(관리자용 예시)",
    rank: "B",
    profileUrl: "https://example.com/profile/han-yura",
  },
  {
    name: "이현(관리자용 예시)",
    rank: "C",
    profileUrl: "https://example.com/profile/lee-hyeon",
  },
];

export default function PlayableHunterPage() {
  const [copied, setCopied] = useState(false);

  async function copyTemplate() {
    try {
      await navigator.clipboard.writeText(profileTemplate);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#050706] px-5 py-10 text-[#eee8dc] sm:px-8 sm:py-16">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(214,177,91,0.19),transparent_38%),radial-gradient(circle_at_12%_42%,rgba(52,211,153,0.07),transparent_34%),radial-gradient(circle_at_88%_66%,rgba(188,139,47,0.07),transparent_35%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.028] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none fixed left-1/2 top-[-12rem] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full border border-[#d6b15b]/10 shadow-[0_0_180px_rgba(214,177,91,0.08)]" />
      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_260px_rgba(0,0,0,0.94)]" />

      <article className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="relative overflow-hidden border border-[#d6b15b]/20 bg-black/25 px-6 py-12 shadow-[0_30px_100px_rgba(0,0,0,0.42)] sm:px-10 sm:py-16">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d58a]/80 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(7rem,20vw,19rem)] font-black tracking-[-0.04em] text-[#d6b15b]/[0.035]">
            HUNTER
          </div>

          <div className="relative">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,1)]" />
                  <p className="text-[9px] tracking-[0.36em] text-emerald-100">
                    CENTRAL REGISTRY ACCESS GRANTED
                  </p>
                </div>

                <p className="mt-8 text-[9px] tracking-[0.32em] text-[#d6b15b]">
                  SIGNAL ARCHIVE · DOCUMENT 06
                </p>

                <h1 className="mt-5 break-keep font-serif text-5xl tracking-[0.07em] text-[#fff8e8] drop-shadow-[0_0_35px_rgba(240,213,138,0.12)] sm:text-7xl">
                  플레이어블 헌터
                </h1>

                <div className="mt-6 h-px w-48 bg-gradient-to-r from-[#f0d58a]/80 to-transparent" />

                <p className="mt-7 max-w-3xl break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
                  플레이어가 직접 운용하는 헌터의 등록 기준과 공식 인명부를
                  열람합니다. 승인된 프로필만 중앙기록국에 등재됩니다.
                </p>
              </div>

              <Link
                href="/notice"
                className="group flex w-fit items-center gap-3 border border-[#d6b15b]/35 bg-black/25 px-5 py-3 text-[10px] tracking-[0.18em] text-[#f0d58a] transition hover:border-[#f0d58a]/80 hover:bg-[#d6b15b]/[0.07]"
              >
                <span className="transition group-hover:-translate-x-1">←</span>
                문서 목록
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 border-y border-white/[0.1] bg-[#050706]/60 sm:grid-cols-3">
              <div className="px-6 py-6">
                <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                  DOCUMENT CODE
                </p>
                <p className="mt-3 font-serif text-2xl text-[#f5ddb0]">
                  PLAYABLE HUNTER
                </p>
              </div>

              <div className="border-t border-white/[0.08] px-6 py-6 sm:border-l sm:border-t-0">
                <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                  STATUS
                </p>
                <p className="mt-3 font-serif text-2xl text-emerald-100">
                  REGISTRATION OPEN
                </p>
              </div>

              <div className="border-t border-white/[0.08] px-6 py-6 sm:border-l sm:border-t-0">
                <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                  REGISTERED
                </p>
                <p className="mt-3 font-serif text-2xl text-[#f5ddb0]">
                  {String(hunterRecords.length).padStart(2, "0")} HUNTERS
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
            SECTION 01
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-5xl">
            플레이어블 헌터란?
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="border border-white/[0.09] bg-white/[0.015] p-7 sm:p-9">
              <p className="break-keep text-sm leading-8 text-zinc-300 sm:text-base">
                플레이어블 헌터는 플레이어가 직접 설정하고 운용하는 헌터를
                의미합니다. 모든 캐릭터는 지정된 양식에 따라 작성되어야 하며,
                관리진의 검토와 최종 승인을 거친 뒤 공식 인명부에 등록됩니다.
              </p>
              <p className="mt-5 break-keep text-sm leading-8 text-zinc-400">
                승인 이전에는 공식 사건, 기관 소속 및 세계관 내 주요 활동에
                참여할 수 없습니다.
              </p>
            </div>

            <div className="border border-[#d6b15b]/25 bg-[#d6b15b]/[0.04] p-7 sm:p-9">
              <p className="text-[9px] tracking-[0.22em] text-[#f0d58a]/75">
                CENTRAL NOTICE
              </p>
              <p className="mt-6 break-keep font-serif text-2xl leading-9 text-[#fff0bd]">
                강함보다 중요한 것은 명확한 기준과 일관된 한계입니다.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
            SECTION 02
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-5xl">
            기본 정보 작성
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["이름", "세계관 안에서 사용하는 공식 이름"],
              ["나이", "현재 시점을 기준으로 한 실제 나이"],
              ["성별", "캐릭터의 성별 또는 성 정체성"],
              ["등급", "허용 범위 내에서 선택한 헌터 등급"],
              ["소속", "협회, 기관, 길드 또는 무소속"],
              ["외형", "신장, 체형, 복장 및 주요 특징"],
              ["성격", "행동 방식과 대인관계의 기준"],
              ["특이사항", "기타 설정과 서사적 참고 정보"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="group border border-white/[0.09] bg-white/[0.012] p-6 transition hover:border-[#d6b15b]/30 hover:bg-[#d6b15b]/[0.025]"
              >
                <p className="font-serif text-2xl text-[#f5ddb0]">{title}</p>
                <p className="mt-4 break-keep text-xs leading-6 text-zinc-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
            SECTION 03
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-5xl">
            고유 능력 작성
          </h2>

          <p className="mt-6 max-w-3xl break-keep text-sm leading-8 text-zinc-400">
            고유 능력은 효과뿐 아니라 조건과 한계를 함께 작성해야 합니다.
            범위, 거리, 지속 시간, 사용 횟수처럼 판정 가능한 정보가 누락된
            경우 수정 요청이 이루어질 수 있습니다.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {abilityFields.map((field, index) => (
              <div
                key={field}
                className="flex items-center gap-4 border border-white/[0.09] bg-white/[0.012] px-5 py-5"
              >
                <span className="font-serif text-sm text-[#d6b15b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-zinc-300">{field}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-red-300/40 bg-red-950/[0.08] px-7 py-6">
            <p className="text-[9px] tracking-[0.22em] text-red-100/70">
              REJECTED EXAMPLE
            </p>
            <p className="mt-4 text-sm text-zinc-300">
              “불을 자유롭게 다룬다.”
            </p>
            <p className="mt-3 break-keep text-xs leading-6 text-zinc-500">
              사용 조건, 화력, 사거리, 범위, 지속 시간과 패널티가 명확하지
              않으므로 승인할 수 없습니다.
            </p>
          </div>
        </section>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
            SECTION 04
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-5xl">
            프로필 작성 예시
          </h2>

          <div className="mt-10 overflow-hidden border border-white/[0.1] bg-black/25 shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
            <div className="border-b border-white/[0.08] px-7 py-6 sm:px-9">
              <p className="text-[9px] tracking-[0.22em] text-emerald-100/75">
                APPROVED SAMPLE
              </p>
              <h3 className="mt-3 font-serif text-3xl text-[#fff4d1]">
                김서진 · B급 헌터
              </h3>
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                UNIQUE ABILITY
              </p>
              <h4 className="mt-5 font-serif text-2xl text-[#f5ddb0]">
                화염 가속
              </h4>
              <p className="mt-4 max-w-3xl break-keep text-sm leading-8 text-zinc-400">
                자신의 발밑에서 화염을 분출해 최대 20m까지 고속 이동합니다.
                연속 사용은 최대 3회이며, 사용 후 2지문 동안 신체 부담이
                누적됩니다.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
            SECTION 05
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-5xl">
            등록 절차
          </h2>

          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {registrationSteps.map((step, index) => (
              <div
                key={step}
                className="relative border border-white/[0.09] bg-white/[0.012] p-6"
              >
                <p className="font-serif text-sm text-[#d6b15b]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 break-keep text-sm text-zinc-300">
                  {step}
                </p>

                {index < registrationSteps.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-[#d6b15b] md:block">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
                SECTION 06
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-5xl">
                복사용 프로필 양식
              </h2>
            </div>

            <button
              type="button"
              onClick={copyTemplate}
              className="w-fit border border-[#d6b15b]/35 bg-[#d6b15b]/[0.04] px-6 py-3 text-[10px] tracking-[0.18em] text-[#f0d58a] transition hover:border-[#f0d58a]/75 hover:bg-[#d6b15b]/[0.09]"
            >
              {copied ? "복사 완료" : "양식 복사"}
            </button>
          </div>

          <pre className="mt-10 overflow-x-auto whitespace-pre-wrap border border-white/[0.1] bg-[#030504]/85 p-7 font-mono text-xs leading-7 text-zinc-300 shadow-[0_20px_70px_rgba(0,0,0,0.24)] sm:p-9 sm:text-sm">
            {profileTemplate}
          </pre>
        </section>

        <section className="border-b border-white/[0.1] py-14 sm:py-20">
          <div className="flex items-end justify-between gap-4 border-b border-white/[0.1] pb-7">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#d6b15b]">
                SECTION 07 · RELATED ARCHIVE
              </p>
              <h2 className="mt-4 font-serif text-4xl text-[#fff8e8]">
                관련 문서
              </h2>
            </div>

            <p className="text-[9px] tracking-[0.16em] text-zinc-600">
              TOTAL · {String(relatedDocuments.length).padStart(2, "0")}
            </p>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {relatedDocuments.map((document) => (
              <Link
                key={document.href}
                href={document.href}
                className="group border border-white/[0.09] bg-white/[0.012] p-7 transition hover:-translate-y-1 hover:border-[#d6b15b]/35 hover:bg-[#d6b15b]/[0.025]"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="text-[9px] tracking-[0.18em] text-[#d6b15b]/70">
                      DOCUMENT {document.number}
                    </p>
                    <p className="mt-2 text-[9px] tracking-[0.16em] text-zinc-600">
                      {document.code}
                    </p>
                  </div>
                  <span className="text-[#d6b15b] transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-7 font-serif text-3xl text-[#f4ecdf]">
                  {document.title}
                </h3>
                <p className="mt-4 break-keep text-sm leading-7 text-zinc-500">
                  {document.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="relative py-16 sm:py-24">
          <div className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 select-none font-serif text-[clamp(5rem,16vw,13rem)] font-black text-[#d6b15b]/[0.025]">
            REGISTRY
          </div>

          <div className="relative">
            <div className="flex flex-col gap-6 border-b border-[#d6b15b]/25 pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[9px] tracking-[0.32em] text-[#d6b15b]">
                  SECTION 08 · CENTRAL REGISTRY
                </p>
                <h2 className="mt-4 font-serif text-4xl text-[#fff8e8] sm:text-6xl">
                  플레이어블 헌터 인명부
                </h2>
                <p className="mt-5 break-keep text-sm leading-8 text-zinc-500">
                  승인된 플레이어블 헌터의 외부 프로필을 등급별로 열람합니다.
                </p>
              </div>

              <p className="text-[9px] tracking-[0.18em] text-zinc-600">
                TOTAL · {String(hunterRecords.length).padStart(2, "0")}
              </p>
            </div>

            <div className="mt-10 space-y-8">
              {hunterRanks.map((rank) => {
                const hunters = hunterRecords.filter(
                  (hunter) => hunter.rank === rank,
                );

                return (
                  <section
                    key={rank}
                    className="overflow-hidden border border-white/[0.09] bg-black/25 shadow-[0_20px_70px_rgba(0,0,0,0.25)]"
                  >
                    <div className="flex items-center justify-between border-b border-white/[0.08] bg-gradient-to-r from-[#d6b15b]/[0.08] to-transparent px-6 py-5 sm:px-8">
                      <div className="flex items-center gap-5">
                        <span className="font-serif text-4xl text-[#f0d58a]">
                          {rank}
                        </span>
                        <div>
                          <p className="text-[9px] tracking-[0.2em] text-zinc-600">
                            HUNTER CLASS
                          </p>
                          <h3 className="mt-1 font-serif text-2xl text-[#f4ecdf]">
                            {rank}급 인명부
                          </h3>
                        </div>
                      </div>

                      <p className="text-[9px] tracking-[0.16em] text-zinc-600">
                        {String(hunters.length).padStart(2, "0")} REGISTERED
                      </p>
                    </div>

                    {hunters.length > 0 ? (
                      <div className="grid sm:grid-cols-2">
                        {hunters.map((hunter) => (
                          <a
                            key={`${hunter.name}-${hunter.profileUrl}`}
                            href={hunter.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-5 border-b border-white/[0.07] px-6 py-6 transition hover:bg-[#d6b15b]/[0.05] sm:px-8"
                          >
                            <div>
                              <p className="text-[8px] tracking-[0.2em] text-zinc-600">
                                {hunter.rank} CLASS HUNTER
                              </p>
                              <p className="mt-2 font-serif text-2xl text-zinc-200 transition group-hover:text-[#fff1c7]">
                                {hunter.name}
                              </p>
                            </div>

                            <span className="shrink-0 text-sm text-[#d6b15b] transition group-hover:translate-x-1">
                              프로필 →
                            </span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="px-6 py-10 text-center sm:px-8">
                        <p className="text-sm text-zinc-600">
                          등록된 {rank}급 헌터가 없습니다.
                        </p>
                      </div>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        </section>

        <footer className="border-t border-white/[0.1] pt-9 text-center">
          <p className="text-[9px] tracking-[0.3em] text-zinc-600">
            SIGNAL CENTRAL ARCHIVE · DOCUMENT 06
          </p>
          <p className="mt-4 text-xs leading-6 text-zinc-600">
            승인되지 않은 프로필의 공식 활동을 금합니다.
          </p>
        </footer>
      </article>
    </main>
  );
}