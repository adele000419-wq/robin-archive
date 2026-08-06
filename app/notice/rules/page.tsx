"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type SectionId =
  | "direction"
  | "respect"
  | "roleplay"
  | "character"
  | "penalty"
  | "final";

type RuleItem = {
  number: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
};

const respectRules: RuleItem[] = [
  {
    number: "01",
    title: "기본적인 예의를 지켜주세요",
    subtitle: "MUTUAL RESPECT",
    paragraphs: [
      "오너방에서는 어떠한 경우에도 반말을 허용하지 않습니다.",
      "다른 곳에서 알게 된 인연을 이곳에서 다시 만나는 일은 분명 반가운 일입니다. 다만 특정 인원끼리의 친목이 지나치게 두드러질 경우, 새로운 맴버나 대화에 익숙하지 않은 인원이 자연스럽게 소외될 수 있습니다.",
      "기존 친분을 이유로 대화를 독점하거나 일부 인원만 이해할 수 있는 이야기로 분위기를 고정하는 등 과도한 친목 행위는 삼가주시기 바랍니다.",
      "모든 맴버가 부담 없이 대화에 참여할 수 있는 분위기를 함께 만들어주세요.",
    ],
  },
  {
    number: "02",
    title: "욕설 및 공격적인 표현을 금지합니다",
    subtitle: "NO ABUSIVE LANGUAGE",
    paragraphs: [
      "오너방 내 욕설은 어떠한 경우에도 허용되지 않습니다.",
      "농담이나 친근감의 표현이었다고 하더라도 상대방이 불쾌감을 느낄 수 있는 욕설과 비하 표현은 사용할 수 없습니다.",
      "직접적인 욕설뿐만 아니라 특정 인물을 조롱하거나 상대를 몰아세우는 표현 역시 동일하게 제재될 수 있습니다.",
    ],
  },
  {
    number: "03",
    title: "개인적인 불만을 전체 규칙으로 강요할 수 없습니다",
    subtitle: "PERSONAL BOUNDARIES",
    paragraphs: [
      "본 방은 사람이 기본적으로 지켜야 할 예의와 윤리의 범위를 벗어난 행위를 제한합니다.",
      "그러나 개인적인 취향이나 불호 요소, 이른바 ‘지뢰’를 방 전체의 기준으로 강제하는 것은 허용하지 않습니다.",
      "누군가에게 불편한 소재가 다른 모든 맴버에게도 금지되어야 하는 것은 아닙니다. 개인적인 불호는 어디까지나 개인의 기준이며, 이를 이유로 다른 맴버의 캐릭터나 설정, 대화를 통제할 수 없습니다.",
      "불편한 요소가 있다면 해당 대화에서 거리를 두거나 필요한 경우 상대방과 조율해주시기 바랍니다.",
    ],
  },
  {
    number: "04",
    title: "개인 간 분쟁은 개인 대화로 해결해주세요",
    subtitle: "DISPUTE RESOLUTION",
    paragraphs: [
      "맴버 간 의견 충돌이나 감정적인 문제가 발생했을 경우 공개된 장소에서 분쟁을 이어가기보다 개인 대화를 통해 원만하게 해결해주시기 바랍니다.",
      "공개 채널에서 언쟁이 이어질 경우 다른 맴버까지 불편함을 느낄 수 있으며 방 전체의 분위기를 해칠 수 있습니다.",
      "당사자 간 해결이 어렵거나 중재가 필요한 경우에는 관리진에게 상황을 전달해주세요.",
      "공개된 장소에서 지속적으로 분쟁을 일으키거나 다른 맴버에게 불쾌감을 주는 행위가 반복될 경우 관리진의 판단에 따라 경고, 활동 제한 또는 강제 퇴장 조치가 이루어질 수 있습니다.",
    ],
  },
];

const roleplayRules: RuleItem[] = [
  {
    number: "01",
    title: "PVE 중심 운영",
    subtitle: "PVE ORIENTED",
    paragraphs: [
      "본 방은 진행자를 중심으로 한 PVE 진행을 기본 방향으로 삼고 있습니다.",
      "맴버들은 진행자의 주도 아래 사건과에 맞서며, 협력하여 하나의 이야기를 만들어갑니다.",
      "PVP는 완전히 금지되지는 않으나, 당사자 간 합의가 이루어진 경우에 한해 제한적으로 허용됩니다.",
    ],
  },
  {
    number: "02",
    title: "확정 지문 금지",
    subtitle: "NO AUTO-HIT",
    paragraphs: [
      "진행자의 지문에 대해 이어지는 답지문은 진행자가 사인을 주지 않는 한 확정 지문이 될 수 없습니다.",
      "이를 지키지 않고 확정 지문을 남발할 시, 제제가 가해질 수 있습니다.",
    ],
  },
  {
    number: "03",
    title: "캐릭터의 메타 인지 금지",
    subtitle: "NO META PLAY",
    paragraphs: [
      "캐릭터가 알 수 없는 정보를 오너가 알고 있다는 이유만으로 역극에 사용할 수 없습니다.",
      "오너가 알고 있는 정보와 캐릭터가 실제로 획득한 정보는 명확히 구분되어야 합니다.",
      "다른 맴버의 프로필, 비공개 설정, 진행자의 안내를 근거 없이 캐릭터 지식으로 전환하는 행위는 허용되지 않습니다.",
    ],
  },
  {
    number: "04",
    title: "능력은 승인된 프로필을 기준으로 합니다",
    subtitle: "PROFILE STANDARD",
    paragraphs: [
      "모든 능력과 전투 수치는 승인된 프로필을 기준으로 적용됩니다.",
      "역극 도중 새로운 능력을 즉석에서 추가하거나 기존 능력의 범위와 위력을 임의로 강화할 수 없습니다.",
      "프로필에 명시되지 않은 효과가 필요한 경우 사전에 관리진과 조율해주시기 바랍니다.",
    ],
  },
  {
    number: "05",
    title: "진행자의 판정을 존중해주세요",
    subtitle: "GAME MASTER RULING",
    paragraphs: [
      "이벤트, 전투, 상황 판정은 진행자의 결정을 우선합니다.",
      "판정 과정에서 이견이 생길 수 있으나, 진행 중 공개적으로 언쟁을 이어가는 행위는 삼가주시기 바랍니다.",
      "판정에 대한 문의나 이의 제기는 관리진에게 전달해주세요.",
    ],
  },
];

const characterRules: RuleItem[] = [
  {
    number: "01",
    title: "프로필 수정",
    subtitle: "PROFILE REVISION",
    paragraphs: [
      "승인된 프로필을 수정할 경우 관리진의 재확인이 필요합니다.",
      "능력, 등급, 핵심 설정처럼 역극에 직접 영향을 주는 요소는 승인 없이 변경할 수 없습니다.",
    ],
  },
  {
    number: "02",
    title: "캐릭터의 사망",
    subtitle: "INJURY AND DEATH",
    paragraphs: [
      "진행을 하며, 잘못된 판단을 내린 경우 캐릭터가 부상을 입을 수 있고, 사망할 수 있습니다",
      "사망의 경우 해당 캐릭터를 부활시킬 수 없으며, 조종 또한 불가능합니다.", 
      
    ],
  },
  {
    number: "03",
    title: "캐릭터의 은퇴와 삭제",
    subtitle: "RETIREMENT",
    paragraphs: [
      "캐릭터를 은퇴시키거나 인명부에서 삭제하려는 경우 관리진에게 알려주시기 바랍니다.",
      "이미 진행된 공식 사건과 관계 기록은 세계관의 연속성을 위해 일부 보존될 수 있습니다.",
    ],
  },
];

const penalties = [
  ["01", "주의", "경미한 위반에 대한 구두 안내 및 규칙 재확인"],
  ["02", "경고", "반복되거나 명확한 위반에 대한 공식 경고"],
  ["03", "활동 제한", "일정 기간 오너방 또는 역극 참여 제한"],
  ["04", "강제 퇴장", "중대한 위반 또는 반복적인 문제 행동에 대한 퇴장 조치"],
] as const;

const navItems: { id: SectionId; label: string }[] = [
  { id: "direction", label: "진행 방향" },
  { id: "respect", label: "상호 존중" },
  { id: "roleplay", label: "역극 진행" },
  { id: "character", label: "캐릭터 규정" },
  { id: "penalty", label: "제재 기준" },
  { id: "final", label: "최종 안내" },
];

function RuleGroup({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id: SectionId;
  eyebrow: string;
  title: string;
  description: string;
  items: RuleItem[];
}) {
  return (
    <section
      id={id}
      className="rules-reveal scroll-mt-28 border-b border-white/[0.09] py-14 sm:py-20"
    >
      <div className="flex flex-col gap-5 border-b border-white/[0.1] pb-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[9px] tracking-[0.26em] text-[#c9a85f]">
            {eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl text-[#fff8e8] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl break-keep text-sm leading-7 text-zinc-500">
            {description}
          </p>
        </div>

        <p className="text-[9px] tracking-[0.16em] text-zinc-600">
          TOTAL · {String(items.length).padStart(2, "0")}
        </p>
      </div>

      <div className="mt-9 space-y-5">
        {items.map((rule) => (
          <article
            key={`${id}-${rule.number}`}
            className="rule-card group relative overflow-hidden border border-white/[0.09] bg-black/20 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#c9a85f]/35 hover:bg-[#c9a85f]/[0.025] hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)] sm:p-8"
          >
            <span className="absolute inset-y-0 left-0 w-[2px] bg-[#c9a85f]/30 transition-all duration-300 group-hover:w-1 group-hover:bg-[#e7ca83]/80 group-hover:shadow-[0_0_16px_rgba(231,202,131,0.22)]" />
            <span className="pointer-events-none absolute -right-5 -top-12 select-none font-serif text-[8rem] text-[#c9a85f]/[0.04] sm:text-[11rem]">
              {rule.number}
            </span>

            <div className="relative grid gap-6 sm:grid-cols-[72px_1fr]">
              <div>
                <p className="font-serif text-4xl text-[#c9a85f]">
                  {rule.number}
                </p>
                <div className="mt-4 h-px w-10 bg-[#c9a85f]/45" />
              </div>

              <div>
                <p className="text-[9px] tracking-[0.2em] text-zinc-600">
                  {rule.subtitle}
                </p>
                <h3 className="mt-3 font-serif text-2xl text-[#f4ecdf] transition group-hover:text-[#efd893] sm:text-3xl">
                  {rule.title}
                </h3>

                <div className="mt-6 space-y-4">
                  {rule.paragraphs.map((paragraph, index) => (
                    <p
                      key={`${rule.number}-${index}`}
                      className="break-keep text-sm leading-8 text-zinc-400"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function RulesPage() {
  const [introVisible, setIntroVisible] = useState(true);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] =
    useState<SectionId>("direction");

  const activeIndex = useMemo(
    () =>
      Math.max(
        navItems.findIndex((item) => item.id === activeSection),
        0,
      ),
    [activeSection],
  );

  useEffect(() => {
    const leave = window.setTimeout(() => {
      setIntroLeaving(true);
    }, 1500);

    const remove = window.setTimeout(() => {
      setIntroVisible(false);
    }, 2000);

    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(remove);
    };
  }, []);

  useEffect(() => {
    function onScroll() {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top),
          );

        if (visible[0]) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-20% 0px -62% 0px",
        threshold: [0, 0.1, 0.3],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function skipIntro() {
    setIntroLeaving(true);
    window.setTimeout(() => setIntroVisible(false), 420);
  }

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#070807] px-5 py-10 text-[#eee9df] sm:px-8 sm:py-14">
      {introVisible && (
        <button
          type="button"
          onClick={skipIntro}
          aria-label="인증 화면 건너뛰기"
          className={`rules-intro fixed inset-0 z-[100] flex items-center justify-center bg-[#030403] px-6 ${
            introLeaving ? "rules-intro-leaving" : ""
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,95,0.12),transparent_42%)]" />
          <div className="relative text-center">
            <p className="text-[9px] tracking-[0.34em] text-[#c9a85f]">
              SIGNAL CENTRAL
            </p>
            <h1 className="mt-6 font-serif text-4xl tracking-[0.12em] text-[#fff4d3] sm:text-7xl">
              ACCESS GRANTED
            </h1>
            <div className="mx-auto mt-8 h-px w-64 overflow-hidden bg-white/10">
              <span className="rules-intro-line block h-full bg-[#e7ca83]" />
            </div>
            <p className="mt-6 text-[9px] tracking-[0.26em] text-zinc-600">
              DOCUMENT 08 · AUTHENTICATED
            </p>
          </div>
        </button>
      )}

      <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-white/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-[#80652e] via-[#e7ca83] to-[#fff0b3] shadow-[0_0_10px_rgba(231,202,131,0.3)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-15%,rgba(193,157,79,0.12),transparent_38%)]" />
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-0 shadow-[inset_0_0_240px_rgba(0,0,0,0.92)]" />
      </div>

      <aside className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 2xl:block">
        <div className="border border-[#c9a85f]/18 bg-[#080908]/90 px-3 py-4 backdrop-blur">
          <p className="text-center text-[8px] tracking-[0.22em] text-[#c9a85f]">
            DOCUMENT
          </p>
          <p className="mt-2 text-center font-serif text-3xl text-[#e7ca83]">
            08
          </p>
        </div>
      </aside>

      <aside className="fixed right-5 top-1/2 z-40 hidden w-56 -translate-y-1/2 xl:block">
        <div className="border border-white/[0.08] bg-[#080908]/90 p-4 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
            <p className="text-[8px] tracking-[0.22em] text-[#c9a85f]">
              DOCUMENT
            </p>
            <p className="font-serif text-sm text-[#e7ca83]">
              {Math.round(progress)}%
            </p>
          </div>

          <nav className="mt-3">
            {navItems.map((item, index) => {
              const active = item.id === activeSection;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-3 border-l px-3 py-3 transition ${
                    active
                      ? "border-[#e7ca83] bg-[#c9a85f]/[0.05] text-[#f3dda4]"
                      : "border-white/[0.08] text-zinc-600 hover:border-[#c9a85f]/45 hover:text-zinc-300"
                  }`}
                >
                  <span className="font-serif text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[10px]">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="mt-4 h-px overflow-hidden bg-white/[0.06]">
            <div
              className="h-full bg-[#c9a85f]"
              style={{
                width: `${((activeIndex + 1) / navItems.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </aside>

      <article className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="relative overflow-hidden border-b border-[#c9a85f]/30 pb-10 sm:pb-14">
          <div className="rules-stamp pointer-events-none absolute right-0 top-0 hidden rotate-[-8deg] border-2 border-[#c9a85f]/24 px-5 py-3 text-center sm:block">
            <p className="text-[8px] tracking-[0.22em] text-[#c9a85f]">
              AUTHENTICATED
            </p>
            <p className="mt-1 font-serif text-xl text-[#e7ca83]">
              SIGNAL CENTRAL
            </p>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[9px] tracking-[0.3em] text-[#c9a85f]">
                SIGNAL ARCHIVE · DOCUMENT 08
              </p>

              <h1 className="mt-5 font-serif text-5xl tracking-[0.08em] text-[#fff8e8] sm:text-7xl">
                규칙
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-sm leading-8 text-zinc-400 sm:text-base">
                모든 맴버가 편안하게 머물 수 있도록 마련된 기본 운영 원칙입니다.
                아래 규정은 오너방과 역극 진행 전반에 공통으로 적용됩니다.
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

          <div className="mt-10 grid grid-cols-1 border-y border-white/[0.09] bg-black/15 sm:grid-cols-3">
            <div className="px-5 py-5 sm:px-6">
              <p className="text-[9px] tracking-[0.18em] text-zinc-600">
                DOCUMENT CODE
              </p>
              <p className="mt-3 font-serif text-xl text-[#e7ca83]">
                COMMUNITY RULES
              </p>
            </div>

            <div className="border-t border-white/[0.08] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6">
              <p className="text-[9px] tracking-[0.18em] text-zinc-600">
                DIRECTION
              </p>
              <p className="mt-3 font-serif text-xl text-[#eee9df]">
                PVE ORIENTED
              </p>
            </div>

            <div className="border-t border-white/[0.08] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6">
              <p className="text-[9px] tracking-[0.18em] text-zinc-600">
                STATUS
              </p>
              <p className="mt-3 font-serif text-xl text-emerald-100">
                ACTIVE
              </p>
            </div>
          </div>
        </header>

        <section
          id="direction"
          className="rules-reveal scroll-mt-28 border-b border-white/[0.09] py-14 sm:py-20"
        >
          <div className="border border-[#c9a85f]/22 bg-[#c9a85f]/[0.025] p-7 sm:p-9">
            <p className="text-[9px] tracking-[0.24em] text-[#c9a85f]">
              진행 방향 안내
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[#fff4d3] sm:text-4xl">
              본 방은 진행자를 중심으로 한 PVE를 지향합니다
            </h2>
            <p className="mt-6 break-keep text-sm leading-8 text-zinc-400 sm:text-base">
              맴버들은 진행자의 주도 아래 사건에 맞서며, 협력하여
              하나의 이야기를 만들어갑니다. PVP는 완전히 금지되지는 않으나,
              맴버 간 합의가 이루어진 경우에 한해 제한적으로
              허용됩니다.
            </p>
            <p className="mt-5 break-keep text-sm leading-8 text-zinc-500">
              상대방의 동의 없이 전투를 개시하거나 결과를 일방적으로 확정하는
              행위는 허용되지 않습니다.
            </p>
            <blockquote className="mt-7 border-l-2 border-[#c9a85f]/45 pl-5 font-serif text-xl leading-8 text-[#e9d39a]">
              본 방은 승패를 가리는 공간보다 함께 하나의 이야기를 만들어가는
              공간을 지향합니다.
            </blockquote>
          </div>
        </section>

        <RuleGroup
          id="respect"
          eyebrow="SECTION 01 · COMMUNITY GUIDELINES"
          title="상호 존중 원칙"
          description="맴버 간 기본적인 예의와 오너방 내 대화 질서를 다루는 규정입니다."
          items={respectRules}
        />

        <RuleGroup
          id="roleplay"
          eyebrow="SECTION 02 · ROLEPLAY OPERATIONS"
          title="역극 진행 규칙"
          description="PVE 진행, 전투, 정보 사용 및 판정에 적용되는 핵심 규정입니다."
          items={roleplayRules}
        />

        <RuleGroup
          id="character"
          eyebrow="SECTION 03 · CHARACTER MANAGEMENT"
          title="캐릭터 규정"
          description="승인된 캐릭터의 수정, 부상, 사망, 은퇴 및 기록 관리에 관한 규정입니다."
          items={characterRules}
        />

        <section
          id="penalty"
          className="rules-reveal scroll-mt-28 border-b border-white/[0.09] py-14 sm:py-20"
        >
          <div className="flex flex-col gap-5 border-b border-white/[0.1] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[9px] tracking-[0.24em] text-[#c9a85f]">
                SECTION 04 · ENFORCEMENT
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#fff8e8] sm:text-5xl">
                제재 기준
              </h2>
              <p className="mt-4 max-w-3xl break-keep text-sm leading-7 text-zinc-500">
                위반의 정도와 반복 여부에 따라 아래 단계 중 적절한 조치가 적용됩니다.
              </p>
            </div>
            <p className="text-[9px] tracking-[0.16em] text-zinc-600">
              LEVEL · 04
            </p>
          </div>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {penalties.map(([level, title, description]) => (
              <div
                key={level}
                className="group relative overflow-hidden border border-white/[0.09] bg-black/20 p-6 transition hover:-translate-y-1 hover:border-[#c9a85f]/30 sm:p-8"
              >
                <span className="pointer-events-none absolute -right-5 -top-12 font-serif text-[9rem] text-[#c9a85f]/[0.035]">
                  {level}
                </span>

                <div className="relative flex items-start justify-between gap-5">
                  <div>
                    <p className="text-[9px] tracking-[0.2em] text-zinc-600">
                      LEVEL {level}
                    </p>
                    <h3 className="mt-3 font-serif text-2xl text-[#f4ecdf]">
                      {title}
                    </h3>
                  </div>

                  <span className="font-serif text-3xl text-[#c9a85f]">
                    {level}
                  </span>
                </div>

                <p className="relative mt-5 break-keep text-sm leading-7 text-zinc-400">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-red-300/35 bg-red-950/[0.05] px-6 py-5">
            <p className="break-keep text-sm leading-7 text-red-100/75">
              위반의 내용이 중대하거나 분위기를 심하게 해칠 우려가 있다고 판단될
              경우, 앞선 단계를 생략하고 즉시 활동 제한 또는 강제 퇴장 조치가
              이루어질 수 있습니다.
            </p>
          </div>
        </section>

        <section
          id="final"
          className="rules-reveal relative scroll-mt-28 overflow-hidden border-y border-[#c9a85f]/28 bg-[#0b0b09] px-6 py-16 text-center sm:px-10 sm:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,95,0.12),transparent_58%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[clamp(5rem,17vw,13rem)] text-[#c9a85f]/[0.05]">
            DIRECTIVE
          </div>

          <div className="relative">
            <p className="text-[10px] tracking-[0.36em] text-[#e7ca83]">
              FINAL DIRECTIVE
            </p>

            <div className="mx-auto mt-7 h-px w-52 bg-gradient-to-r from-transparent via-[#e7ca83]/80 to-transparent" />

            <p className="mx-auto mt-8 max-w-4xl break-keep font-serif text-3xl leading-[1.55] text-[#fff5d8] drop-shadow-[0_0_18px_rgba(231,202,131,0.12)] sm:text-5xl">
              규칙을 읽지 않았다는 사실은
              <br />
              위반에 대한 면책 사유가 되지 않습니다.
            </p>

            <div className="mx-auto mt-9 h-px w-52 bg-gradient-to-r from-transparent via-[#e7ca83]/80 to-transparent" />

            <p className="mt-8 text-[10px] tracking-[0.3em] text-zinc-500">
              SIGNAL CENTRAL · AUTHORITY LEVEL 08
            </p>
          </div>
        </section>

        <footer className="pt-10 text-center">
          <p className="text-[9px] tracking-[0.28em] text-zinc-600">
            SIGNAL CENTRAL ARCHIVE · DOCUMENT 08
          </p>
          <p className="mt-4 text-xs leading-6 text-zinc-600">
            필요한 경우 관리진의 판단에 따라 규정이 보완될 수 있습니다.
          </p>
        </footer>
      </article>

      <style>{`
        .rules-intro {
          transition:
            opacity 0.45s ease,
            transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .rules-intro-leaving {
          opacity: 0;
          transform: scale(1.03);
          pointer-events: none;
        }

        .rules-intro-line {
          width: 0;
          animation: introLine 0.8s ease 0.15s forwards;
        }

        .rules-stamp {
          opacity: 0;
          animation: stampIn 0.6s ease 0.35s forwards;
        }

        .rules-reveal {
          animation: sectionRise 0.7s ease both;
          animation-timeline: view();
          animation-range: entry 10% cover 24%;
        }

        @keyframes introLine {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes stampIn {
          0% {
            opacity: 0;
            transform: scale(1.28) rotate(-8deg);
          }
          65% {
            opacity: 0.92;
            transform: scale(0.95) rotate(-8deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(-8deg);
          }
        }

        @keyframes sectionRise {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rules-intro {
            display: none;
          }

          .rules-stamp,
          .rules-reveal,
          .rules-intro-line {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}