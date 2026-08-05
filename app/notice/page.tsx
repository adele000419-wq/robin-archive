"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

type NoticeStatus = "OPEN" | "LOCKED";

type NoticeRecord = {
  number: string;
  code: string;
  title: string;
  description: string;
  href: string;
  status: NoticeStatus;
};

const notices: NoticeRecord[] = [
  {
    number: "01",
    code: "WORLD",
    title: "세계관",
    description:
      "최초의 게이트 출현 이후 변화한 세계와 잔존 인류의 현황에 관한 기록.",
    href: "/notice/world",
    status: "OPEN",
  },
  {
    number: "02",
    code: "GATE",
    title: "게이트",
    description:
      "현실과 이계를 연결하는 통로와 공략 규칙에 관한 공식 기록.",
    href: "/notice/gate",
    status: "OPEN",
  },
  {
    number: "03",
    code: "HUNTER",
    title: "헌터",
    description:
      "마나를 받아들이고 인간의 한계를 넘어선 각성자에 관한 기록.",
    href: "/notice/hunter",
    status: "OPEN",
  },
  {
  number: "04",
  code: "FACTION",
  title: "기관",
  description:
    "대한민국 헌터협회와 중앙기록국에 관한 공식 기록.",
  href: "/notice/factions",
  status: "OPEN",
},
  {
    number: "05",
    code: "MAGICAL BEAST",
    title: "마물",
    description:
      "이계에서 출현한 생명체의 분류와 위험성에 관한 기록.",
    href: "/notice/mamul",
    status: "OPEN",
  },
  {
    number: "06",
    code: "PLAYABLE HUNTER",
    title: "플레이어블 헌터",
    description:
      "세계관 내 주요 헌터의 신원과 능력에 관한 문서.",
    href: "/notice/playable-hunter",
    status: "LOCKED",
  },
  {
  number: "07",
  code: "GUIDELINE",
  title: "가이드라인",
  description:
    "세계관 설정 및 플레이에 적용되는 공식 규정과 운영 지침.",
  href: "/notice/guideline",
  status: "OPEN",
},
];

const particles = [
  ["7%", "15%", 2, "-1s", "10s", "green"],
  ["15%", "42%", 2, "-7s", "14s", "gold"],
  ["24%", "73%", 3, "-3s", "12s", "gold"],
  ["34%", "22%", 2, "-9s", "16s", "white"],
  ["43%", "57%", 2, "-5s", "11s", "green"],
  ["51%", "86%", 2, "-10s", "15s", "gold"],
  ["59%", "13%", 2, "-4s", "13s", "green"],
  ["67%", "69%", 3, "-8s", "15s", "white"],
  ["75%", "31%", 2, "-2s", "12s", "gold"],
  ["83%", "78%", 2, "-11s", "17s", "green"],
  ["91%", "20%", 2, "-6s", "14s", "gold"],
  ["94%", "60%", 3, "-3s", "12s", "white"],
  ["12%", "91%", 2, "-9s", "16s", "green"],
  ["29%", "48%", 2, "-4s", "13s", "gold"],
  ["71%", "92%", 2, "-7s", "15s", "gold"],
  ["87%", "48%", 2, "-1s", "11s", "green"],
] as const;

const particleClasses = {
  gold: "bg-[#efd58c] shadow-[0_0_12px_rgba(239,213,140,0.75)]",
  green: "bg-emerald-200 shadow-[0_0_12px_rgba(167,243,208,0.72)]",
  white: "bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.55)]",
};

export default function NoticePage() {
  const router = useRouter();
  const [introVisible, setIntroVisible] = useState(false);
  const [introChecked, setIntroChecked] = useState(false);
  const [introLeaving, setIntroLeaving] = useState(false);
  const [revealFlash, setRevealFlash] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 24 });
  const [transitionTarget, setTransitionTarget] = useState<string | null>(null);
  const [transitionTitle, setTransitionTitle] = useState("");

  useEffect(() => {
    const introStorageKey = "signal-archive-access-granted";
    const hasSeenIntro =
      window.sessionStorage.getItem(introStorageKey) === "true";

    setIntroChecked(true);

    if (hasSeenIntro) {
      setIntroVisible(false);
      return;
    }

    window.sessionStorage.setItem(introStorageKey, "true");
    setIntroVisible(true);

    const leaveTimer = window.setTimeout(() => {
      setIntroLeaving(true);
    }, 2100);

    const removeTimer = window.setTimeout(() => {
      setIntroVisible(false);
      setRevealFlash(true);
    }, 2850);

    const flashTimer = window.setTimeout(() => {
      setRevealFlash(false);
    }, 3800);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      window.clearTimeout(flashTimer);
    };
  }, []);

  const closeIntro = () => {
    if (introLeaving) return;

    window.sessionStorage.setItem(
      "signal-archive-access-granted",
      "true",
    );

    setIntroLeaving(true);

    window.setTimeout(() => {
      setIntroVisible(false);
      setRevealFlash(true);
    }, 700);

    window.setTimeout(() => setRevealFlash(false), 1650);
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const openDocument = (href: string, title: string) => {
    if (transitionTarget) return;

    setTransitionTitle(title);
    setTransitionTarget(href);

    window.setTimeout(() => {
      router.push(href);
    }, 950);
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-dvh overflow-x-hidden bg-[#050706] px-5 py-8 text-[#f2eee6] sm:px-8 sm:py-12"
    >
      {!introChecked && (
        <div className="fixed inset-0 z-[70] bg-[#020504]" />
      )}

      {introVisible && (
        <button
          type="button"
          aria-label="접속 승인 애니메이션 건너뛰기"
          onClick={closeIntro}
          className={`archive-intro fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden bg-[#020504] px-6 ${
            introLeaving ? "archive-intro-leaving" : ""
          }`}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.18),transparent_42%)]" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.065] [background-image:linear-gradient(rgba(110,231,183,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,0.5)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/15 shadow-[0_0_100px_rgba(52,211,153,0.13)] sm:h-[50rem] sm:w-[50rem]" />
          <div className="intro-ring pointer-events-none absolute left-1/2 top-1/2 h-[23rem] w-[23rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-emerald-300/25 sm:h-[37rem] sm:w-[37rem]" />
          <div className="intro-scan pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-emerald-300/75 shadow-[0_0_20px_rgba(110,231,183,0.9)]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_220px_rgba(0,0,0,0.96)]" />

          <div className="relative z-10 w-full max-w-3xl text-center">
            <div className="intro-line mx-auto h-px w-24 bg-emerald-300/80" />

            <p className="intro-item intro-delay-1 mt-8 text-[9px] tracking-[0.4em] text-emerald-200 sm:text-xs sm:tracking-[0.58em]">
              SIGNAL CENTRAL ARCHIVE
            </p>

            <div className="intro-item intro-delay-2 mt-8 flex items-center justify-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,1)]" />
              <p className="text-[10px] tracking-[0.3em] text-zinc-100 sm:text-xs">
                AUTHORIZATION VERIFIED
              </p>
            </div>

            <h1 className="intro-item intro-delay-3 mt-7 font-serif text-4xl tracking-[0.13em] text-emerald-50 drop-shadow-[0_0_25px_rgba(110,231,183,0.45)] sm:text-7xl">
              ACCESS GRANTED
            </h1>

            <div className="intro-progress intro-item intro-delay-4 mx-auto mt-10 h-[2px] w-full max-w-md overflow-hidden bg-white/10">
              <span className="block h-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.85)]" />
            </div>

            <p className="intro-item intro-delay-5 mt-7 text-[8px] tracking-[0.24em] text-zinc-300 sm:text-[10px]">
              CLICK TO SKIP
            </p>
          </div>
        </button>
      )}

      {revealFlash && (
        <div className="archive-reveal-flash pointer-events-none fixed inset-0 z-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,231,168,0.3),rgba(52,211,153,0.06)_30%,transparent_66%)]" />
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#f8dc95]/90 to-transparent shadow-[0_0_32px_rgba(248,220,149,0.65)]" />
        </div>
      )}

      {/* 문서 진입 화면 전환 */}
      {transitionTarget && (
        <div className="archive-page-transition fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-[#020403] px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,213,140,0.15),rgba(52,211,153,0.045)_34%,transparent_68%)]" />

          <div className="archive-transition-grid absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(239,213,140,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(239,213,140,0.4)_1px,transparent_1px)] [background-size:52px_52px]" />

          <div className="archive-transition-scan absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#efd58c]/80 to-transparent shadow-[0_0_24px_rgba(239,213,140,0.65)]" />

          <div className="archive-transition-door archive-transition-door-left absolute inset-y-0 left-0 w-1/2 bg-[#050706]" />
          <div className="archive-transition-door archive-transition-door-right absolute inset-y-0 right-0 w-1/2 bg-[#050706]" />

          <div className="relative z-10 text-center">
            <p className="archive-transition-label text-[9px] tracking-[0.34em] text-emerald-200/80 sm:text-[10px]">
              DOCUMENT ACCESS
            </p>

            <h2 className="archive-transition-title mt-5 font-serif text-3xl tracking-[0.1em] text-[#fff4d1] sm:text-5xl">
              {transitionTitle}
            </h2>

            <div className="archive-transition-line mx-auto mt-7 h-px w-48 overflow-hidden bg-white/10">
              <span className="block h-full bg-[#efd58c] shadow-[0_0_14px_rgba(239,213,140,0.8)]" />
            </div>

            <p className="archive-transition-status mt-5 text-[8px] tracking-[0.24em] text-zinc-400 sm:text-[9px]">
              OPENING ARCHIVE
            </p>
          </div>
        </div>
      )}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#050706]" />

        <div
          className="archive-mouse-glow absolute h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(239,213,140,0.095),rgba(52,211,153,0.025)_38%,transparent_68%)] blur-3xl"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
          }}
        />

        <div className="archive-signal-zone absolute inset-x-0 top-[8rem] flex h-[31rem] items-center justify-center px-4 sm:top-[3rem] sm:h-[39rem] sm:px-10">
          <div className="archive-signal-watermark relative w-full select-none overflow-hidden whitespace-nowrap text-center font-serif text-[clamp(4.6rem,15vw,16rem)] font-black leading-none tracking-[-0.015em]">
            <span className="text-[#e3c67c]/[0.085] drop-shadow-[0_0_36px_rgba(227,198,124,0.11)]">
              SIGNAL
            </span>
            
          </div>
        </div>

        <div className="archive-aurora-gold absolute left-1/2 top-[-32rem] h-[78rem] w-[78rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(225,190,111,0.27),rgba(155,106,31,0.07)_38%,transparent_68%)] blur-3xl" />
        <div className="archive-aurora-green absolute -left-[28rem] top-[21%] h-[68rem] w-[68rem] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.17),rgba(20,83,67,0.04)_42%,transparent_68%)] blur-3xl" />
        <div className="archive-aurora-right absolute -right-[29rem] top-[43%] h-[70rem] w-[70rem] rounded-full bg-[radial-gradient(circle,rgba(239,199,107,0.15),rgba(108,76,20,0.035)_44%,transparent_70%)] blur-3xl" />
        <div className="archive-light-column absolute left-1/2 top-0 h-[62rem] w-[45rem] -translate-x-1/2 bg-gradient-to-b from-[#efd58c]/[0.09] via-[#c1a15a]/[0.018] to-transparent blur-2xl" />

        <div className="archive-circle absolute left-1/2 top-[27rem] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.11] sm:h-[51rem] sm:w-[51rem]">
          <div className="absolute inset-0 rounded-full border border-[#e1c67c]/35" />
          <div className="absolute inset-[9%] rounded-full border border-dashed border-[#e1c67c]/22" />
          <div className="absolute inset-[22%] rounded-full border border-emerald-200/15" />
          <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rotate-45 border border-[#efd58c]/60" />
          <span className="absolute bottom-[-4px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border border-[#efd58c]/60" />
        </div>

        <div className="absolute inset-y-0 left-[5%] hidden w-px bg-gradient-to-b from-transparent via-[#e1c67c]/18 to-transparent lg:block" />
        <div className="absolute inset-y-0 right-[5%] hidden w-px bg-gradient-to-b from-transparent via-[#e1c67c]/18 to-transparent lg:block" />

        <div className="archive-beam archive-beam-1 absolute -top-1/2 left-[18%] h-[140%] w-px bg-gradient-to-b from-transparent via-emerald-200/22 to-transparent shadow-[0_0_14px_rgba(167,243,208,0.12)]" />
        <div className="archive-beam archive-npm run devbeam-2 absolute -top-1/2 left-[51%] h-[150%] w-[2px] bg-gradient-to-b from-transparent via-[#efd58c]/24 to-transparent shadow-[0_0_17px_rgba(239,213,140,0.14)]" />
        <div className="archive-beam archive-beam-3 absolute -top-1/2 right-[17%] h-[140%] w-px bg-gradient-to-b from-transparent via-[#efd58c]/18 to-transparent shadow-[0_0_14px_rgba(239,213,140,0.1)]" />

        {particles.map(([left, top, size, delay, duration, tone], index) => (
          <span
            key={`${left}-${top}-${index}`}
            className={`archive-particle absolute rounded-full ${particleClasses[tone]}`}
            style={{
              left,
              top,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: delay,
              animationDuration: duration,
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-[0.028] [background-image:linear-gradient(rgba(255,255,255,0.26)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:68px_68px]" />
        <div className="archive-background-scan absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#efd58c]/45 to-transparent shadow-[0_0_16px_rgba(239,213,140,0.22)]" />
        <div className="archive-noise absolute inset-0 opacity-[0.05]" />
        <div className="absolute inset-0 shadow-[inset_0_0_160px_rgba(0,0,0,0.72)] sm:shadow-[inset_0_0_270px_rgba(0,0,0,0.88)]" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/42 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <section className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="archive-rise archive-delay-1 border-b border-[#d5b86f]/35 pb-9 sm:pb-11">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="archive-online-dot h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_16px_rgba(110,231,183,0.9)]" />
                <p className="text-[9px] tracking-[0.34em] text-emerald-100 sm:text-[11px] sm:tracking-[0.48em]">
                  ACCESS GRANTED
                </p>
              </div>

              <p className="text-[9px] tracking-[0.32em] text-[#ebcc7b] sm:text-[10px]">
                SIGNAL ARCHIVE · CENTRAL RECORDS
              </p>

              <h1 className="mt-4 break-keep font-serif text-4xl font-normal tracking-[0.08em] text-[#fffaf0] drop-shadow-[0_0_28px_rgba(240,214,143,0.16)] sm:text-6xl">
                문서 보관소
              </h1>

              <p className="mt-6 max-w-2xl break-keep text-sm leading-7 text-zinc-200 sm:text-base sm:leading-8">
                중앙기록국 제1열람등급 권한이 확인되었습니다.
                <br className="hidden sm:block" />
                열람할 공식 기록을 선택하십시오.
              </p>
            </div>

            <Link
              href="/"
              className="group relative flex min-h-11 w-fit items-center gap-3 overflow-hidden border border-[#dfc47b]/50 bg-black/20 px-5 py-3 text-[10px] tracking-[0.18em] text-[#f1d99e] backdrop-blur-sm transition duration-300 hover:border-[#ffe29a] hover:text-white active:scale-[0.985]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#dfc47b]/10 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="relative transition duration-300 group-hover:-translate-x-1">
                ←
              </span>
              <span className="relative">메인으로</span>
            </Link>
          </div>

          <div className="archive-stat-panel mt-9 grid grid-cols-1 border-y border-white/[0.13] bg-[#050706]/35 backdrop-blur-sm sm:grid-cols-3">
            <div className="relative overflow-hidden px-5 py-5 sm:px-6">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
              <p className="text-[9px] tracking-[0.2em] text-zinc-300">공개 문서</p>
              <p className="mt-3 font-serif text-3xl text-emerald-100">06</p>
            </div>

            <div className="relative overflow-hidden border-t border-white/[0.1] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#e9cc80]/40 to-transparent" />
              <p className="text-[9px] tracking-[0.2em] text-zinc-300">등록 문서</p>
              <p className="mt-3 font-serif text-3xl text-[#f0d68f]">07</p>
            </div>

            <div className="relative overflow-hidden border-t border-white/[0.1] px-5 py-5 sm:border-l sm:border-t-0 sm:px-6">
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
              <p className="text-[9px] tracking-[0.2em] text-zinc-300">시스템 상태</p>
              <p className="mt-3 font-serif text-2xl text-emerald-100">ONLINE</p>
            </div>
          </div>
        </header>

        <div className="archive-rise archive-delay-2 mt-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[9px] tracking-[0.24em] text-[#ebcc7b]">
                DOCUMENT INDEX
              </p>
              <h2 className="mt-3 font-serif text-2xl tracking-[0.06em] text-[#fff9ec] sm:text-3xl">
                중앙기록국 열람 목록
              </h2>
            </div>

            <p className="text-[9px] tracking-[0.16em] text-zinc-300">
              OPEN 04 / TOTAL 06
            </p>
          </div>

          <div className="archive-list relative overflow-hidden border-y border-white/[0.13] bg-[#050706]/40 backdrop-blur-sm">
            <div className="archive-list-scan pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-emerald-200/45 to-transparent shadow-[0_0_14px_rgba(167,243,208,0.35)]" />

            {notices.map((notice, index) => {
              const isLocked = notice.status === "LOCKED";

              if (isLocked) {
                return (
                  <div
                    key={notice.number}
                    style={{ animationDelay: `${0.24 + index * 0.08}s` }}
                    className="archive-item grid grid-cols-[44px_1fr_auto] items-start gap-4 border-b border-white/[0.085] px-1 py-6 opacity-0 last:border-b-0 sm:grid-cols-[70px_1fr_120px] sm:items-center sm:gap-7 sm:px-5 sm:py-8"
                  >
                    <p className="pt-1 font-serif text-sm tracking-[0.15em] text-zinc-500 sm:text-base">
                      {notice.number}
                    </p>

                    <div className="min-w-0 opacity-55">
                      <p className="text-[8px] tracking-[0.2em] text-zinc-400 sm:text-[9px]">
                        {notice.code}
                      </p>
                      <h3 className="mt-2 font-serif text-xl tracking-[0.05em] text-zinc-300 sm:text-2xl">
                        {notice.title}
                      </h3>
                      <p className="mt-3 break-keep text-xs leading-6 text-zinc-400 sm:text-sm sm:leading-7">
                        {notice.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end pt-1 sm:pt-0">
                      <span className="border border-red-300/25 bg-red-950/10 px-3 py-1.5 text-[8px] tracking-[0.18em] text-red-100/60">
                        LOCKED
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  type="button"
                  key={notice.number}
                  onClick={() => openDocument(notice.href, notice.title)}
                  style={{ animationDelay: `${0.24 + index * 0.08}s` }}
                  className="archive-item archive-open-item group relative grid w-full text-left grid-cols-[44px_1fr_auto] items-start gap-4 overflow-hidden border-b border-white/[0.085] px-1 py-6 opacity-0 last:border-b-0 active:scale-[0.992] sm:grid-cols-[70px_1fr_120px] sm:items-center sm:gap-7 sm:px-5 sm:py-8"
                >
                  <span className="absolute inset-y-0 left-0 w-[2px] bg-[#f0d68f] opacity-0 shadow-[0_0_18px_rgba(240,214,143,0.62)] transition duration-300 group-hover:opacity-100" />
                  <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-[#c99b38]/[0.13] via-[#c99b38]/[0.03] to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />
                  <span className="archive-card-shine absolute inset-y-0 left-[-40%] w-[20%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.085] to-transparent group-hover:left-[125%]" />
                  <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-[#f0d68f]/55 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                  <p className="relative z-10 pt-1 font-serif text-sm tracking-[0.15em] text-[#dfc47b] transition duration-300 group-hover:text-[#ffe39b] sm:text-base">
                    {notice.number}
                  </p>

                  <div className="relative z-10 min-w-0">
                    <p className="text-[8px] tracking-[0.2em] text-zinc-300 sm:text-[9px]">
                      {notice.code}
                    </p>
                    <h3 className="mt-2 font-serif text-xl tracking-[0.05em] text-[#f7efe2] transition duration-300 group-hover:translate-x-1 group-hover:text-[#fff2c8] sm:text-2xl">
                      {notice.title}
                    </h3>
                    <p className="mt-3 break-keep text-xs leading-6 text-zinc-200 sm:text-sm sm:leading-7">
                      {notice.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-end gap-3 pt-1 sm:pt-0">
                    <span className="hidden text-[8px] tracking-[0.2em] text-emerald-100 sm:inline">
                      ● OPEN
                    </span>
                    <span className="text-xl text-[#dfc47b] transition duration-300 group-hover:translate-x-2 group-hover:text-[#ffe39b]">
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="archive-rise archive-delay-3 mx-auto mt-12 max-w-3xl border-y border-[#dfc47b]/22 bg-black/15 py-7 text-center backdrop-blur-sm">
          <p className="font-serif text-base leading-8 text-[#f0d68f] sm:text-lg">
            허가되지 않은 문서의 열람과 외부 반출을 금한다.
          </p>
          <p className="mt-3 text-[10px] leading-6 text-zinc-300 sm:text-xs">
            모든 접근 기록은 SIGNAL 중앙기록국 서버에 자동 저장된다.
          </p>
        </div>

        <footer className="archive-rise archive-delay-4 mt-14 border-t border-white/[0.11] pt-8 text-center">
          <p className="text-[9px] tracking-[0.32em] text-[#d8bd7e]/75 sm:text-[10px]">
            SIGNAL CENTRAL ARCHIVE
          </p>
          <p className="mt-4 text-[10px] tracking-[0.16em] text-zinc-300 sm:text-xs">
            ALL ACCESS LOGS ARE RECORDED
          </p>
          <p className="mt-7 text-[11px] tracking-[0.25em] text-zinc-100 sm:text-xs">
            made by. Robin
          </p>
          <p className="mx-auto mt-5 max-w-2xl break-keep text-[10px] leading-6 text-zinc-300 sm:text-xs sm:leading-7">
            본 사이트는 Robin이 직접 기획 및 제작한 세계관 아카이브입니다.
            <br className="hidden sm:block" />
            사이트에 포함된 모든 설정, 문서 및 콘텐츠의 저작권은 제작자에게 있으며,
            <br className="hidden sm:block" />
            사전 허가 없는 무단 복제, 재배포 및 재가공을 금합니다.
          </p>
          <p className="mt-5 text-[8px] tracking-[0.15em] text-zinc-400 sm:text-[10px]">
            © 2026 Robin. All Rights Reserved.
          </p>
        </footer>
      </section>

      <style>{`
        .archive-intro {
          transition:
            opacity 0.7s ease,
            transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.7s ease;
        }

        .archive-intro-leaving {
          opacity: 0;
          transform: translateY(-100%);
          filter: blur(10px);
          pointer-events: none;
        }

        .intro-ring {
          animation: introRing 20s linear infinite;
        }

        .intro-item {
          opacity: 0;
          transform: translateY(20px);
          animation: introReveal 0.75s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .intro-delay-1 { animation-delay: 0.12s; }
        .intro-delay-2 { animation-delay: 0.42s; }
        .intro-delay-3 { animation-delay: 0.74s; }
        .intro-delay-4 { animation-delay: 1.05s; }
        .intro-delay-5 { animation-delay: 1.42s; }

        .intro-line {
          animation: introLine 1.15s ease forwards;
        }

        .intro-progress span {
          width: 0;
          animation: introProgress 1.05s ease 1.05s forwards;
        }

        .intro-scan {
          animation: introScan 1.9s linear infinite;
        }

        .archive-reveal-flash {
          animation: revealFlash 0.95s ease forwards;
        }

        .archive-rise {
          opacity: 0;
          transform: translateY(40px);
          animation: archiveRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .archive-delay-1 { animation-delay: 0.08s; }
        .archive-delay-2 { animation-delay: 0.22s; }
        .archive-delay-3 { animation-delay: 0.58s; }
        .archive-delay-4 { animation-delay: 0.7s; }

        .archive-item {
          transform: translateY(28px);
          animation: archiveRise 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .archive-card-shine {
          transition: left 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .archive-open-item {
          transform-origin: center;
          transition:
            background-color 0.3s ease,
            box-shadow 0.3s ease,
            transform 0.15s ease;
        }

        .archive-open-item:hover {
          background-color: rgba(255, 255, 255, 0.028);
          box-shadow:
            inset 0 0 38px rgba(224, 197, 126, 0.02),
            0 0 34px rgba(0, 0, 0, 0.25);
        }

        .archive-list {
          box-shadow:
            0 24px 75px rgba(0, 0, 0, 0.31),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .archive-list-scan {
          animation: listScan 7s linear infinite;
        }

        .archive-stat-panel {
          box-shadow:
            0 18px 52px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .archive-online-dot {
          animation: onlinePulse 1.9s ease-in-out infinite;
        }

        .archive-mouse-glow {
          transition:
            left 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            top 0.45s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: left, top;
        }

        .archive-signal-watermark {
          animation: signalBreath 8s ease-in-out infinite;
        }

        

        .archive-aurora-gold { animation: auroraGold 15s ease-in-out infinite alternate; }
        .archive-aurora-green { animation: auroraGreen 19s ease-in-out infinite alternate; }
        .archive-aurora-right { animation: auroraRight 21s ease-in-out infinite alternate; }
        .archive-light-column { animation: lightColumn 9s ease-in-out infinite; }

        .archive-circle {
          animation: archiveCircle 90s linear infinite;
          transform-origin: center;
        }

        .archive-beam {
          opacity: 0;
          animation: beamFall 10s linear infinite;
        }

        .archive-beam-1 { animation-delay: 0s; }
        .archive-beam-2 { animation-delay: 3.3s; }
        .archive-beam-3 { animation-delay: 6.6s; }

        .archive-particle {
          animation-name: particleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }

        .archive-background-scan {
          animation: backgroundScan 12s linear infinite;
        }

        .archive-noise {
          background-image:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.75) 0, transparent 1px),
            radial-gradient(circle at 70% 55%, rgba(240,214,143,0.7) 0, transparent 1px),
            radial-gradient(circle at 45% 85%, rgba(167,243,208,0.6) 0, transparent 1px);
          background-size: 43px 47px, 61px 57px, 79px 73px;
          animation: noiseShift 0.5s steps(2) infinite;
        }

        @keyframes introReveal {
          from { opacity: 0; transform: translateY(20px); filter: blur(6px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes introLine {
          from { width: 0; opacity: 0; }
          to { width: 96px; opacity: 1; }
        }

        @keyframes introProgress {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes introScan {
          from { transform: translateY(-10vh); opacity: 0; }
          12% { opacity: 0.85; }
          88% { opacity: 0.35; }
          to { transform: translateY(110vh); opacity: 0; }
        }

        @keyframes introRing {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes revealFlash {
          0% { opacity: 0; transform: scale(0.78); }
          25% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.2); }
        }

        @keyframes archiveRise {
          from { opacity: 0; transform: translateY(40px); filter: blur(5px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes onlinePulse {
          0%, 100% {
            opacity: 0.68;
            transform: scale(0.86);
            box-shadow: 0 0 8px rgba(110,231,183,0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.12);
            box-shadow: 0 0 19px rgba(110,231,183,0.95);
          }
        }

        @keyframes signalBreath {
          0%, 100% { opacity: 0.75; filter: blur(0.2px); }
          50% { opacity: 1; filter: blur(0); }
        }

        @keyframes listScan {
          from { transform: translateY(-20px); opacity: 0; }
          12% { opacity: 0.8; }
          88% { opacity: 0.18; }
          to { transform: translateY(720px); opacity: 0; }
        }

        @keyframes auroraGold {
          0% { transform: translateX(-50%) translateY(-3%) scale(0.94); opacity: 0.7; }
          100% { transform: translateX(-50%) translateY(8%) scale(1.1); opacity: 1; }
        }

        @keyframes auroraGreen {
          0% { transform: translate(-6%, -4%) scale(0.94); opacity: 0.48; }
          100% { transform: translate(13%, 10%) scale(1.13); opacity: 0.86; }
        }

        @keyframes auroraRight {
          0% { transform: translate(5%, 5%) scale(0.95); opacity: 0.43; }
          100% { transform: translate(-11%, -7%) scale(1.12); opacity: 0.8; }
        }

        @keyframes lightColumn {
          0%, 100% { opacity: 0.4; transform: translateX(-50%) scaleX(0.86); }
          50% { opacity: 0.82; transform: translateX(-50%) scaleX(1.12); }
        }

        @keyframes archiveCircle {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes beamFall {
          0% { opacity: 0; transform: translateY(-20%); }
          15% { opacity: 0.62; }
          76% { opacity: 0.16; }
          100% { opacity: 0; transform: translateY(125%); }
        }

        @keyframes particleFloat {
          0% { opacity: 0.22; transform: translate3d(-10px,18px,0) scale(0.75); }
          48% { opacity: 0.9; }
          100% { opacity: 0.35; transform: translate3d(14px,-29px,0) scale(1.25); }
        }

        @keyframes backgroundScan {
          from { transform: translateY(-5vh); opacity: 0; }
          12% { opacity: 0.48; }
          88% { opacity: 0.13; }
          to { transform: translateY(110vh); opacity: 0; }
        }

        @keyframes noiseShift {
          0% { transform: translate(0,0); }
          25% { transform: translate(-0.6%,0.6%); }
          50% { transform: translate(0.6%,-0.6%); }
          75% { transform: translate(0.6%,0.6%); }
          100% { transform: translate(-0.6%,-0.6%); }
        }

        .archive-page-transition {
          animation: transitionBackdrop 0.95s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .archive-transition-door-left {
          transform-origin: left center;
          animation: transitionDoorLeft 0.95s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .archive-transition-door-right {
          transform-origin: right center;
          animation: transitionDoorRight 0.95s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        .archive-transition-label,
        .archive-transition-title,
        .archive-transition-status {
          opacity: 0;
          transform: translateY(16px);
          animation: transitionText 0.5s ease forwards;
        }

        .archive-transition-label {
          animation-delay: 0.12s;
        }

        .archive-transition-title {
          animation-delay: 0.22s;
        }

        .archive-transition-status {
          animation-delay: 0.42s;
        }

        .archive-transition-line span {
          width: 0;
          animation: transitionProgress 0.62s ease 0.28s forwards;
        }

        .archive-transition-scan {
          animation: transitionScan 0.9s linear forwards;
        }

        .archive-transition-grid {
          animation: transitionGrid 0.95s ease forwards;
        }

        @keyframes transitionBackdrop {
          from {
            opacity: 0;
            backdrop-filter: blur(0);
          }

          to {
            opacity: 1;
            backdrop-filter: blur(8px);
          }
        }

        @keyframes transitionDoorLeft {
          0% {
            transform: translateX(-100%);
          }

          55%,
          100% {
            transform: translateX(0);
          }
        }

        @keyframes transitionDoorRight {
          0% {
            transform: translateX(100%);
          }

          55%,
          100% {
            transform: translateX(0);
          }
        }

        @keyframes transitionText {
          from {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes transitionProgress {
          from {
            width: 0;
          }

          to {
            width: 100%;
          }
        }

        @keyframes transitionScan {
          from {
            transform: translateY(-5vh);
            opacity: 0;
          }

          16% {
            opacity: 1;
          }

          to {
            transform: translateY(105vh);
            opacity: 0;
          }
        }

        @keyframes transitionGrid {
          from {
            opacity: 0;
            transform: scale(1.04);
          }

          to {
            opacity: 0.06;
            transform: scale(1);
          }
        }

        @media (max-width: 640px) {
          .archive-signal-zone {
            top: 10rem;
            height: 24rem;
          }

          .archive-circle {
            opacity: 0.07;
          }

          .archive-noise {
            opacity: 0.035;
          }

          .archive-mouse-glow {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .archive-intro {
            display: none;
          }

          .archive-rise,
          .archive-item,
          .intro-item,
          .intro-line,
          .intro-progress span,
          .intro-scan,
          .intro-ring,
          .archive-reveal-flash,
          .archive-online-dot,
          .archive-signal-watermark,
          .archive-signal-shine,
          .archive-aurora-gold,
          .archive-aurora-green,
          .archive-aurora-right,
          .archive-light-column,
          .archive-circle,
          .archive-beam,
          .archive-particle,
          .archive-background-scan,
          .archive-list-scan,
          .archive-noise,
          .archive-page-transition,
          .archive-transition-door,
          .archive-transition-label,
          .archive-transition-title,
          .archive-transition-status,
          .archive-transition-line span,
          .archive-transition-scan,
          .archive-transition-grid {
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