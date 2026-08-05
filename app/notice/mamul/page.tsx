"use client";

import Link from "next/link";
import { useState } from "react";

type BeastTone =
  | "entry"
  | "combat"
  | "core"
  | "high"
  | "national"
  | "catastrophe";

type BeastRank = {
  grade: string;
  english: string;
  designation: string;
  summary: string;
  descriptions: string[];
  minion: string;
  named: string;
  boss: string;
  tone: BeastTone;
};

type SRankBeast = {
  number: string;
  name: string;
  title: string;
  territory: string;
  country: string;
  status: string;
  description: string;
  note: string;
};

const beastRanks: BeastRank[] = [
  {
    grade: "E",
    english: "ENTRY THREAT",
    designation: "저위 마물",
    summary:
      "마물 등급 체계의 최하위 단계다. 단독 개체의 위협은 제한적이지만, 군집을 이루면 일반인과 비각성 병력에 치명적이다.",
    descriptions: [
      "E급 마물은 게이트 내부와 오염구역에서 가장 흔하게 확인되는 개체다.",
      "신체 구조와 생태는 제각각이지만, 대부분 단순한 포식 본능과 영역 의식에 따라 움직인다.",
      "일반 화기로도 대응할 수 있으나, 개체 수가 많아질수록 피해 규모가 급격하게 커진다.",
    ],
    minion:
      "일반적인 E급 잡졸은 비각성 무장 인원이나 민간 경비대를 압도할 수 있다.",
    named:
      "E급 네임드는 동일 등급 개체보다 높은 지능과 특수능력을 지니며, 숙련된 E급 헌터에게도 위험하다.",
    boss:
      "E급 보스는 소규모 군집을 지휘하며, D급 헌터가 대응해야 안정적인 토벌이 가능하다.",
    tone: "entry",
  },
  {
    grade: "D",
    english: "COMBAT THREAT",
    designation: "전투 마물",
    summary:
      "일반인의 대응 범위를 벗어나는 최초의 전투 등급이다. 이 단계부터 마물은 공식 토벌 대상으로 분류된다.",
    descriptions: [
      "D급 마물은 차량을 파괴하거나 건물 외벽을 돌파할 수 있는 신체 능력을 지닌다.",
      "일부 개체는 독, 산성 체액, 초음파, 단거리 돌진과 같은 공격 수단을 사용한다.",
      "도시 내부에 침입할 경우 일반 치안 병력만으로는 제압하기 어렵다.",
    ],
    minion:
      "일반적인 D급 잡졸은 E급 헌터 한 명을 상대로 우위를 점하며, 숙련도에 따라 D급 헌터도 위협할 수 있다.",
    named:
      "D급 네임드는 동일 등급 마물 여러 개체를 통솔하거나, 특정 환경에서 전투력이 크게 상승한다.",
    boss:
      "D급 보스는 저등급 게이트의 최종 개체로 등장하며, 최소 C급 헌터가 포함된 공략대가 필요하다.",
    tone: "combat",
  },
  {
    grade: "C",
    english: "CORE THREAT",
    designation: "중견 마물",
    summary:
      "도시 방어체계에 실질적인 피해를 줄 수 있는 중견 등급이다. 독립 개체만으로도 하나의 전투부대를 상대한다.",
    descriptions: [
      "C급 마물은 높은 재생력과 마나 저항성을 지니며, 일반 화기의 효과가 크게 제한된다.",
      "개체마다 전투 방식이 뚜렷하게 구분되며, 단순한 힘보다 능력의 상성이 중요해진다.",
      "소규모 정착지나 방벽 외곽을 단독으로 붕괴시키는 사례도 존재한다.",
    ],
    minion:
      "일반적인 C급 잡졸은 D급 헌터를 상대로 우위를 점하며, 다수의 D급 전력을 동시에 상대할 수 있다.",
    named:
      "C급 네임드는 지역 단위로 이름이 알려질 정도의 피해 기록을 남기며, 고유한 습성과 전투 패턴을 보유한다.",
    boss:
      "C급 보스는 하나의 게이트 생태계를 지배하며, B급 헌터 또는 다수의 C급 헌터가 필요하다.",
    tone: "core",
  },
  {
    grade: "B",
    english: "HIGH THREAT",
    designation: "고위 마물",
    summary:
      "국가가 직접 대응 계획을 수립하는 고위 등급이다. 개체 하나가 도시의 특정 구역을 붕괴시킬 수 있다.",
    descriptions: [
      "B급 마물은 단순 생물의 범주를 넘어선 능력과 지능을 보유한다.",
      "일부 개체는 언어를 이해하거나, 협상과 기만을 통해 인간 사회에 접근한다.",
      "광역 공격과 마나 교란 능력으로 인해 대규모 민간 피해가 발생할 가능성이 높다.",
    ],
    minion:
      "일반적인 B급 잡졸은 C급 헌터를 상대로 우위를 점하며, 준비되지 않은 공략대를 단독으로 전멸시킬 수 있다.",
    named:
      "B급 네임드는 도시권 전체에 수배령이 내려지는 위험 개체다. 전투 기록과 약점이 별도 문서로 관리된다.",
    boss:
      "B급 보스는 고등급 게이트나 마경의 중심부를 지배하며, 최소 A급 헌터 또는 국가 단위 공략대가 필요하다.",
    tone: "high",
  },
  {
    grade: "A",
    english: "NATIONAL THREAT",
    designation: "국가재난급 마물",
    summary:
      "국가 존속에 직접적인 위협을 가하는 등급이다. 출현 사실만으로 대규모 대피령과 국가비상사태가 선포된다.",
    descriptions: [
      "A급 마물은 하나의 전략병기와 동일한 수준의 파괴력을 지닌다.",
      "전투가 장기화되면 행정구역 하나가 완전히 소멸할 수 있으며, 주변 생태계도 마경으로 변한다.",
      "대부분의 A급 개체는 독립된 영역을 형성하고, 그 내부의 마물을 지배한다.",
    ],
    minion:
      "일반적인 A급 잡졸도 B급 헌터를 상대로 우위를 점하며, 다수의 고위 헌터를 동시에 압박할 수 있다.",
    named:
      "A급 네임드는 국가 차원의 고유 식별명과 전담 대응계획을 부여받는다.",
    boss:
      "A급 보스는 광역 재난의 중심 개체다. 다수의 A급 헌터와 국가전력이 연합해야 토벌 가능성을 확보한다.",
    tone: "national",
  },
];

const sRankBeasts: SRankBeast[] = [
  {
    number: "01",
    name: "백두산의 군주",
    title: "BAEKDU SOVEREIGN",
    territory: "백두산 정상부",
    country: "한반도 북부",
    status: "활동 확인",
    description:
      "백두산 천지와 정상부를 중심으로 거대한 영역을 형성한다. 주변의 마물은 해당 개체의 의지에 따라 이동하며, 일정 고도 이상으로 접근하는 모든 생명체를 적대한다.",
    note:
      "개체의 정확한 형태와 능력은 확인되지 않는다. 천지 수면 아래에서 발생하는 대규모 마나 반응만 지속적으로 관측된다.",
  },
  {
    number: "02",
    name: "후지산의 재",
    title: "ASH OF FUJI",
    territory: "후지산 정상부",
    country: "일본",
    status: "활동 확인",
    description:
      "후지산 분화구를 거점으로 삼으며, 고열의 재와 마나 폭풍을 발생시킨다. 일본 해상방위권은 산 주변을 영구 봉쇄구역으로 지정한다.",
    note:
      "개체가 활동할 때마다 후지산 전역에서 화산성 지진과 이계화 현상이 동시에 발생한다.",
  },
  {
    number: "03",
    name: "에베레스트의 왕관",
    title: "CROWN OF EVEREST",
    territory: "에베레스트 정상부",
    country: "히말라야 산맥",
    status: "관측 제한",
    description:
      "세계 최고봉의 정상부를 점거한다. 극저온과 저기압 환경에서도 어떠한 제약도 받지 않으며, 산맥 전역의 기후를 비정상적으로 변화시킨다.",
    note:
      "정상 접근에 성공한 탐사대는 존재하지 않는다. 위성 영상에는 거대한 실루엣만 간헐적으로 기록된다.",
  },
  {
    number: "04",
    name: "디날리의 백야",
    title: "WHITE NIGHT OF DENALI",
    territory: "디날리산 정상부",
    country: "북아메리카",
    status: "활동 확인",
    description:
      "디날리산 정상과 알래스카 내륙을 연결하는 광대한 사냥 영역을 형성한다. 빛과 소리를 왜곡하며, 영역 내부의 방향 감각과 통신을 완전히 차단한다.",
    note:
      "미합중국 잔존연방은 해당 개체를 북미 대륙 최우선 감시 대상으로 지정한다.",
  },
  {
    number: "05",
    name: "엘브루스의 종언",
    title: "END OF ELBRUS",
    territory: "엘브루스산 정상부",
    country: "캅카스 산맥",
    status: "통신 두절",
    description:
      "엘브루스산 정상부를 거점으로 활동하며, 주변 지역에서 생명 반응과 마나 흐름을 동시에 소멸시킨다.",
    note:
      "러시아 북방권과의 통신이 단절된 이후 현재 상태는 확인되지 않는다. 다만 산맥 방향에서 발생하는 대규모 마나 공백은 계속 감지된다.",
  },
];

function getRankTone(tone: BeastTone) {
  const styles: Record<BeastTone, string> = {
    entry: "border-sky-300/35 text-sky-200",
    combat: "border-cyan-300/35 text-cyan-200",
    core: "border-violet-300/35 text-violet-200",
    high: "border-amber-300/40 text-amber-100",
    national: "border-red-300/40 text-red-100",
    catastrophe: "border-fuchsia-300/40 text-fuchsia-100",
  };

  return styles[tone];
}

export default function MamulPage() {
  const [openGrade, setOpenGrade] = useState<string | null>("E");

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#08090a] px-5 py-8 text-[#ece8df] sm:px-8 sm:py-12">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(133,47,47,0.16),transparent_42%)]" />
      <div className="pointer-events-none fixed left-1/2 top-[-20rem] h-[56rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,68,68,0.08),transparent_68%)] blur-3xl" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.026] [background-image:linear-gradient(rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.72)] sm:shadow-[inset_0_0_230px_rgba(0,0,0,0.88)]" />

      <article className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="beast-rise beast-delay-1 border-b border-red-300/20 pb-8 sm:pb-11">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[9px] tracking-[0.28em] text-red-300/70 sm:text-[10px]">
                SIGNAL ARCHIVE · DOCUMENT 05
              </p>

              <h1 className="font-serif text-5xl font-normal tracking-[0.1em] text-[#f4eee5] sm:text-7xl">
                마물
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                이계에서 출현하는 마물의 등급과 개체 분류, 현재 확인되는
                최상위 위험 개체를 다루는 공식 기록이다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/notice"
                className="group flex min-h-11 items-center gap-3 border border-red-300/25 px-5 py-3 text-[10px] tracking-[0.18em] text-red-100/85 transition duration-300 hover:border-red-300/60 hover:bg-red-300/[0.05] hover:text-white"
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
              THREAT RANGE
              <span className="ml-3 text-red-200">E — S</span>
            </p>
          </div>
        </header>

        <section className="beast-rise beast-delay-2 border-b border-white/[0.08] py-12 sm:py-16">
          <div className="text-center">
            <p className="font-serif text-sm tracking-[0.3em] text-red-300/85">
              제1장
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[0.08em] text-[#eee8dc] sm:text-6xl">
              이계 생명체
            </h2>

            <p className="mt-4 text-[10px] tracking-[0.28em] text-zinc-400 sm:text-xs">
              MAGICAL BEAST · HOSTILE ENTITY
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-y border-red-300/15 py-8 text-center sm:py-10">
            <p className="font-serif text-xl leading-9 text-red-100 sm:text-2xl">
              게이트를 넘어 현실에 출현하는 적대적 생명체를 마물이라 부른다.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              마물은 하나의 종족을 의미하지 않는다. 외형과 생태, 지능과
              능력은 개체마다 다르며, 공통적으로 높은 마나 적응력을 지닌다.
              그들의 외형은 인간과 유사할 수도 있고, 고블린 오크 등 판타지에서나 볼법한 개체도 있으며
              말로 형언할 수 없을 정도의 그로스테크한 외형을 지닌 개체도 존재한다.
            </p>

            <p>
              헌터협회는 마물의 출력과 위험성, 피해 가능성을 기준으로
              E급부터 S급까지의 등급을 부여한다.
            </p>

            <p>
              마물은 같은 등급 안에서도 잡졸, 네임드, 보스로 구분한다.
              동일 등급의 잡졸은 일반적으로 한 단계 아래 등급의 헌터를
              상대할 수 있다.
            </p>
          </div>
        </section>

        <section className="beast-rise beast-delay-3 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-red-300/85">
            제2장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            개체 분류
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-3">
            <div className="bg-[#0a0c0e] p-6 sm:p-8">
              <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                COMMON UNIT
              </p>
              <h3 className="mt-4 font-serif text-2xl text-[#eee8dc]">
                잡졸
              </h3>
              <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                동일 등급에서 가장 흔하게 확인되는 일반 개체다. 통상적으로
                한 단계 아래 전투 등급의 헌터를 상대할 수 있다.
              </p>
            </div>

            <div className="bg-[#0a0c0e] p-6 sm:p-8">
              <p className="text-[9px] tracking-[0.2em] text-amber-300/70">
                NAMED ENTITY
              </p>
              <h3 className="mt-4 font-serif text-2xl text-amber-100">
                네임드
              </h3>
              <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                동일 등급 개체보다 높은 지능과 고유 능력, 뚜렷한 전투 기록을
                지닌다. 협회는 별도의 식별명과 대응 문서를 부여한다.
              </p>
            </div>

            <div className="bg-[#0a0c0e] p-6 sm:p-8">
              <p className="text-[9px] tracking-[0.2em] text-red-300/75">
                BOSS ENTITY
              </p>
              <h3 className="mt-4 font-serif text-2xl text-red-100">
                보스
              </h3>
              <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                게이트나 마경의 중심을 지배하는 최상위 개체다. 같은 등급의
                네임드보다 강하며, 하위 마물과 주변 환경을 통제한다.
              </p>
            </div>
          </div>
        </section>

        <section className="beast-rise beast-delay-4 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-red-300/85">
            제3장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            마물 등급 기록
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            S급을 제외한 등급별 일반 기록이다. 열람할 등급을 선택하십시오.
          </p>

          <div className="mt-10 space-y-4">
            {beastRanks.map((rank) => {
              const isOpen = openGrade === rank.grade;

              return (
                <section
                  key={rank.grade}
                  className={`overflow-hidden border bg-[#0d0f10]/95 transition duration-500 ${
                    isOpen
                      ? "border-red-300/25 shadow-[0_12px_45px_rgba(0,0,0,0.3)]"
                      : "border-white/[0.09] hover:border-red-300/18"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenGrade(isOpen ? null : rank.grade)}
                    className="group flex w-full items-center gap-4 px-5 py-5 text-left sm:gap-6 sm:px-7 sm:py-6"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center border font-serif text-xl ${getRankTone(
                        rank.tone,
                      )}`}
                    >
                      {rank.grade}
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] tracking-[0.2em] text-zinc-400 sm:text-[9px]">
                        {rank.english}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3">
                        <h3 className="font-serif text-xl text-[#eee8dc] sm:text-2xl">
                          {rank.grade}급 마물
                        </h3>
                        <span className="text-[10px] text-zinc-400">
                          {rank.designation}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-sm text-red-200 transition duration-500 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      ▶
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-white/[0.08] px-5 py-7 sm:px-8 sm:py-9">
                        <p className="font-serif text-lg leading-8 text-red-100/90 sm:text-xl">
                          {rank.summary}
                        </p>

                        <div className="mt-7 space-y-5 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
                          {rank.descriptions.map((description) => (
                            <p key={description}>{description}</p>
                          ))}
                        </div>

                        <div className="mt-9 grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] lg:grid-cols-3">
                          <div className="bg-[#090b0c] p-6">
                            <p className="text-[9px] tracking-[0.2em] text-zinc-500">
                              잡졸
                            </p>
                            <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                              {rank.minion}
                            </p>
                          </div>

                          <div className="bg-[#090b0c] p-6">
                            <p className="text-[9px] tracking-[0.2em] text-amber-300/75">
                              네임드
                            </p>
                            <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                              {rank.named}
                            </p>
                          </div>

                          <div className="bg-[#090b0c] p-6">
                            <p className="text-[9px] tracking-[0.2em] text-red-300/75">
                              보스
                            </p>
                            <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                              {rank.boss}
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
        </section>

        <section className="beast-rise beast-delay-5 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-fuchsia-300/80">
            제4장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            S급 마물
          </h2>

          <div className="mt-7 border-y border-fuchsia-300/20 bg-fuchsia-950/[0.035] px-5 py-8 text-center sm:px-8">
            <p className="font-serif text-lg leading-9 text-fuchsia-100/90 sm:text-xl">
              현재 공식적으로 확인되는 S급 마물은 총 다섯 개체다.
            </p>

            <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
              다섯 개체는 모두 세계의 고산 정상부를 거점으로 활동한다.
              토벌 기록은 존재하지 않으며, 국가 단위의 접근 통제만 유지한다.
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {sRankBeasts.map((beast) => (
              <article
                key={beast.number}
                className="relative overflow-hidden border border-fuchsia-300/15 bg-[#0b0c0e]/95 p-6 sm:p-8"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] bg-fuchsia-300/45 shadow-[0_0_16px_rgba(240,171,252,0.28)]" />

                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="min-w-0">
                    <p className="text-[9px] tracking-[0.22em] text-fuchsia-300/70">
                      S-RANK ENTITY · {beast.number}
                    </p>

                    <h3 className="mt-4 font-serif text-3xl text-[#f4edf3] sm:text-4xl">
                      {beast.name}
                    </h3>

                    <p className="mt-3 text-[9px] tracking-[0.2em] text-zinc-500">
                      {beast.title}
                    </p>
                  </div>

                  <span className="w-fit border border-red-300/25 bg-red-950/[0.06] px-3 py-1.5 text-[9px] tracking-[0.16em] text-red-100/80">
                    {beast.status}
                  </span>
                </div>

                <div className="mt-7 grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
                  <div className="bg-[#090a0b] p-5">
                    <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                      거점
                    </p>
                    <p className="mt-3 font-serif text-lg text-zinc-100">
                      {beast.territory}
                    </p>
                  </div>

                  <div className="bg-[#090a0b] p-5">
                    <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                      권역
                    </p>
                    <p className="mt-3 font-serif text-lg text-zinc-100">
                      {beast.country}
                    </p>
                  </div>
                </div>

                <p className="mt-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
                  {beast.description}
                </p>

                <div className="mt-6 border-t border-white/[0.08] pt-5">
                  <p className="text-[9px] tracking-[0.18em] text-fuchsia-300/65">
                    중앙기록국 비고
                  </p>
                  <p className="mt-3 break-keep text-sm leading-7 text-zinc-400">
                    {beast.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="beast-rise beast-delay-6 py-14 text-center sm:py-20">
          <p className="font-serif text-xl leading-9 text-red-100/90 sm:text-2xl">
            마물의 등급은 강함만을 의미하지 않는다.
          </p>

          <p className="mt-4 font-serif text-xl leading-9 text-[#f1eadb] sm:text-2xl">
            하나의 개체가 문명에 남길 수 있는 피해의 규모를 의미한다.
          </p>
        </section>

        <footer className="beast-rise beast-delay-7 border-t border-white/[0.08] pt-8 text-center">
          <p className="text-[11px] tracking-[0.25em] text-zinc-300 sm:text-xs">
            made by. Robin
          </p>

          <p className="mt-5 text-[8px] tracking-[0.15em] text-zinc-500 sm:text-[10px]">
            © 2026 Robin. All Rights Reserved.
          </p>
        </footer>
      </article>

      <style>{`
        .beast-rise {
          opacity: 0;
          transform: translateY(42px);
          animation: beastRise 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .beast-delay-1 { animation-delay: 0.04s; }
        .beast-delay-2 { animation-delay: 0.14s; }
        .beast-delay-3 { animation-delay: 0.24s; }
        .beast-delay-4 { animation-delay: 0.34s; }
        .beast-delay-5 { animation-delay: 0.44s; }
        .beast-delay-6 { animation-delay: 0.54s; }
        .beast-delay-7 { animation-delay: 0.64s; }

        @keyframes beastRise {
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
          .beast-rise {
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