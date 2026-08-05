"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
const particles = [
  { left: "5%", top: "12%", size: 3, delay: "0s", duration: "11s" },
  { left: "12%", top: "55%", size: 2, delay: "2s", duration: "15s" },
  { left: "18%", top: "82%", size: 4, delay: "5s", duration: "13s" },
  { left: "26%", top: "28%", size: 2, delay: "1s", duration: "17s" },
  { left: "34%", top: "68%", size: 3, delay: "4s", duration: "12s" },
  { left: "42%", top: "16%", size: 2, delay: "7s", duration: "16s" },
  { left: "51%", top: "76%", size: 4, delay: "3s", duration: "14s" },
  { left: "59%", top: "39%", size: 2, delay: "6s", duration: "18s" },
  { left: "67%", top: "88%", size: 3, delay: "2s", duration: "13s" },
  { left: "74%", top: "21%", size: 2, delay: "8s", duration: "16s" },
  { left: "82%", top: "62%", size: 4, delay: "5s", duration: "12s" },
  { left: "89%", top: "34%", size: 2, delay: "1s", duration: "19s" },
  { left: "95%", top: "78%", size: 3, delay: "6s", duration: "14s" },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 38,
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      setMousePosition({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main className="signal-page relative min-h-dvh overflow-hidden bg-[#040404] px-5 py-12 text-[#f3efe7] sm:px-8 sm:py-16">
      {/* 움직이는 배경 격자 */}
      <div className="signal-grid pointer-events-none fixed inset-0 z-0" />

      {/* 모바일 기본 붉은 배경광 */}
      <div className="signal-background-pulse pointer-events-none fixed inset-0 z-0" />

      {/* PC에서 마우스를 따라오는 붉은 광원 */}
      <div
        className="signal-cursor-light pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{
          background: `radial-gradient(
            circle 470px at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(185, 20, 40, 0.2),
            rgba(95, 6, 18, 0.07) 38%,
            transparent 72%
          )`,
        }}
      />

      {/* 반복해서 떠오르는 입자 */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {particles.map((particle, index) => (
          <span
            key={index}
            className="signal-particle absolute rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* 중앙에서 반복 확장되는 원형 신호 */}
      <div className="signal-radar pointer-events-none fixed left-1/2 top-[38%] z-[1] -translate-x-1/2 -translate-y-1/2">
        <span />
        <span />
        <span />
      </div>

      {/* 화면을 훑는 붉은 탐색선 */}
      <div className="signal-sweep pointer-events-none fixed inset-x-0 z-20" />

      {/* CRT 주사선 */}
      <div className="signal-scanlines pointer-events-none fixed inset-0 z-30" />

      {/* 미세 노이즈 */}
      <div className="signal-noise pointer-events-none fixed inset-0 z-30" />

      {/* 화면 가장자리 암전 */}
      <div className="pointer-events-none fixed inset-0 z-20 shadow-[inset_0_0_120px_rgba(0,0,0,0.92)] sm:shadow-[inset_0_0_210px_rgba(0,0,0,0.97)]" />

      {/* 네 모서리 장식 */}
      <div className="signal-corner signal-corner-left-top" />
      <div className="signal-corner signal-corner-right-top" />
      <div className="signal-corner signal-corner-left-bottom" />
      <div className="signal-corner signal-corner-right-bottom" />

      {/* 상단 아카이브 문구 */}
      <header className="signal-enter signal-delay-1 relative z-40 mx-auto mb-14 w-fit text-center sm:mb-16">
        <p className="signal-header-code text-[8px] tracking-[0.27em] text-zinc-400 sm:text-[10px] sm:tracking-[0.5em]">
          SIGNAL ARCHIVE · PUBLIC NOTICE
        </p>
      </header>

      <section className="relative z-40 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="signal-enter signal-delay-2 mb-4 flex items-center gap-3 sm:mb-5">
          <span className="signal-status-dot h-1.5 w-1.5 rounded-full bg-red-500" />

          <p className="signal-label text-[10px] font-medium tracking-[0.55em] text-red-400 sm:text-xs sm:tracking-[0.72em]">
            SIGNAL
          </p>

          <span className="signal-status-dot h-1.5 w-1.5 rounded-full bg-red-500" />
        </div>

        <div className="signal-enter signal-delay-3 relative w-full">
          <h1
            className="signal-glitch break-keep text-[2.55rem] font-light leading-tight tracking-[0.08em] text-[#fffaf1] sm:text-6xl sm:tracking-[0.15em] lg:text-7xl"
            data-text="제1호 공지"
          >
            총공지
          </h1>
        </div>

        <p className="signal-enter signal-delay-4 mt-4 text-[8px] tracking-[0.18em] text-zinc-300 sm:text-xs sm:tracking-[0.32em]">
          PUBLIC NOTICE NO. 001
        </p>

        <div className="signal-line signal-enter signal-delay-5 my-8 h-px w-40 sm:my-10 sm:w-52">
          <span />
        </div>

        <div className="w-full space-y-5 break-keep text-[13px] leading-7 text-zinc-100 sm:space-y-6 sm:text-base sm:leading-9">
          <p className="signal-enter signal-delay-6">
            게이트 발생 이후,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            기존의 사회 질서는 더 이상 안전을 보장하지 않습니다.
          </p>

          <p className="signal-enter signal-delay-7">
            SIGNAL은 모든 시민에게
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            생존에 필요한 최소한의 정보를 공지합니다.
          </p>

          <p className="signal-enter signal-delay-8 font-medium text-white">
            본 문서의 열람자는 아래 내용을 반드시 숙지하십시오.
          </p>
        </div>

        <div className="signal-line signal-enter signal-delay-9 my-8 h-px w-40 sm:my-10 sm:w-52">
          <span />
        </div>

<Link
  href="/notice"
  className="signal-enter signal-delay-10 signal-button group relative flex min-h-12 min-w-44 touch-manipulation items-center justify-center overflow-hidden border border-zinc-400 px-8 py-4 text-[11px] tracking-[0.3em] text-zinc-50 transition duration-500 active:scale-[0.98] sm:min-w-52 sm:px-10 sm:text-xs sm:tracking-[0.4em]"
>
  <span className="signal-button-fill absolute inset-0 origin-left scale-x-0 bg-red-950/80 transition-transform duration-500 ease-out group-hover:scale-x-100" />

  <span className="relative z-10 flex items-center gap-3">
    공지 열람

    <span className="signal-button-arrow inline-block text-red-400">
      →
    </span> 
  </span>
</Link>

        <p className="signal-enter signal-delay-11 mt-7 break-keep text-[8px] tracking-[0.12em] text-zinc-400 sm:mt-8 sm:text-[10px] sm:tracking-[0.23em]">
          ACCESS AUTHORIZED · CLEARANCE LEVEL 01
        </p>

        <footer className="signal-enter signal-delay-12 mt-14 w-full max-w-2xl border-t border-zinc-700/80 pt-7 sm:mt-16 sm:pt-8">
          <p className="text-[11px] tracking-[0.22em] text-zinc-100 sm:text-xs sm:tracking-[0.32em]">
            made by. Robin
          </p>

          <p className="mx-auto mt-5 max-w-xl break-keep text-[10px] leading-6 text-zinc-300 sm:text-xs sm:leading-7">
            본 사이트는 Robin이 직접 기획 및 제작한 세계관
            아카이브입니다.
            <br className="hidden sm:block" />
            사이트에 포함된 모든 설정, 문서 및 콘텐츠의 저작권은
            제작자에게 있으며,
            <br className="hidden sm:block" />
            사전 허가 없는 무단 복제, 재배포 및 재가공을 금합니다.
          </p>

          <p className="mt-5 text-[8px] tracking-[0.14em] text-zinc-400 sm:text-[10px] sm:tracking-[0.22em]">
            © 2026 Robin. All Rights Reserved.
          </p>
        </footer>

        <p className="signal-enter signal-delay-12 mt-12 break-keep text-[8px] tracking-[0.16em] text-zinc-500 sm:mt-14 sm:text-[9px] sm:tracking-[0.3em]">
          대한민국 특수재난대응기구
        </p>
      </section>
    </main>
  );
}