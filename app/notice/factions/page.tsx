"use client";

import Link from "next/link";

export default function FactionsPage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#090a0b] px-5 py-8 text-[#e9e5db] sm:px-8 sm:py-12">
      {/* 배경 */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_3%,rgba(148,116,54,0.14),transparent_42%)]" />

      <div className="pointer-events-none fixed left-1/2 top-[-18rem] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.08),transparent_67%)] blur-3xl" />

      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-amber-300/[0.035] to-transparent" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.68)] sm:shadow-[inset_0_0_210px_rgba(0,0,0,0.82)]" />

      <article className="relative z-10 mx-auto w-full max-w-5xl">
        {/* 헤더 */}
        <header className="institution-rise institution-delay-1 border-b border-amber-300/20 pb-8 sm:pb-11">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[9px] tracking-[0.28em] text-amber-300/70 sm:text-[10px]">
                SIGNAL ARCHIVE · DOCUMENT 04
              </p>

              <h1 className="font-serif text-5xl font-normal tracking-[0.1em] text-[#f2eee4] sm:text-7xl">
                기관
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                대한민국 헌터협회와 중앙기록국에 관한 공식 기록이다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/notice"
                className="group flex min-h-11 items-center gap-3 border border-amber-300/25 px-5 py-3 text-[10px] tracking-[0.18em] text-amber-100/85 transition duration-300 hover:border-amber-300/60 hover:bg-amber-300/[0.05] hover:text-white"
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
              AUTHORITY
              <span className="ml-3 text-amber-200">NATIONAL</span>
            </p>
          </div>
        </header>

        {/* 협회 개요 */}
        <section className="institution-rise institution-delay-2 border-b border-white/[0.08] py-12 sm:py-16">
          <div className="text-center">
            <p className="font-serif text-sm tracking-[0.3em] text-amber-300/85">
              제1장
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[0.08em] text-[#eee8dc] sm:text-6xl">
              대한민국 헌터협회
            </h2>

            <p className="mt-4 text-[10px] tracking-[0.28em] text-zinc-400 sm:text-xs">
              HUNTER ASSOCIATION
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-y border-amber-300/15 py-8 text-center sm:py-10">
            <p className="font-serif text-xl leading-9 text-amber-100 sm:text-2xl">
              대한민국 유일의 헌터 관리 기관이다.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              대한민국 헌터협회는 게이트 출현 이후 설립되었다. 정부로부터
              초상재난 대응 권한을 위임받아 헌터, 게이트, 마물에 관한 모든
              행정 업무를 총괄한다.
            </p>

            <p>
              헌터 등록과 등급 심사, 게이트 공략 허가, 마물 토벌, 긴급 동원,
              공략 보수 지급 등 초상재난과 관련된 절차는 모두 헌터협회를 통해
              이루어진다.
            </p>

            <p>
              대한민국에서 활동하는 모든 등록 헌터는 협회의 관리 대상이다.
              협회의 승인 없이 이루어지는 게이트 공략과 헌터 활동은 불법으로
              규정한다.
            </p>

            <p>
              협회는 각 지역에 지부를 운영하며, 대규모 재난이 발생할 경우
              등록 헌터에게 긴급 동원 명령을 발령할 권한을 가진다.
            </p>
          </div>
        </section>

        {/* 주요 업무 */}
        <section className="institution-rise institution-delay-3 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-amber-300/85">
            제2장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            주요 업무
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {[
              "헌터 등록 및 면허 발급",
              "헌터 등급 심사",
              "게이트 위험도 측정",
              "게이트 공략 허가",
              "마물 토벌 관리",
              "긴급 동원 명령 발령",
              "공략 보수 지급",
              "초상재난 대응 총괄",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-[#0a0c0e] p-6 sm:p-8"
              >
                <p className="text-[9px] tracking-[0.2em] text-amber-300/75">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <p className="mt-4 font-serif text-xl text-[#eee8dc]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 조직도 */}
        <section className="institution-rise institution-delay-4 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-amber-300/85">
            제3장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            조직
          </h2>

          <div className="mt-10 overflow-hidden border border-white/[0.08] bg-[#0a0c0e]/90 p-6 sm:p-9">
            <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-8 text-zinc-300 sm:text-base">
{`대한민국 헌터협회

협회장
│
├── 부협회장
│
├── 감사실
│
├── 전략기획실
│
├── 운영본부
│
├── 대응본부
│
├── 연구본부
│
└── 중앙기록국`}
            </pre>
          </div>
        </section>

        {/* 중앙기록국 */}
        <section className="institution-rise institution-delay-5 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-amber-300/85">
            제4장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            중앙기록국
          </h2>

          <div className="mt-8 border-y border-amber-300/15 bg-amber-950/[0.025] px-5 py-8 sm:px-8">
            <p className="font-serif text-lg leading-9 text-amber-100/90 sm:text-xl">
              중앙기록국은 헌터협회 산하의 유일한 공식 기록 관리 부서다.
            </p>

            <div className="mt-6 space-y-5 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
              <p>
                게이트 출현 이후 발생하는 모든 초상재난과 헌터 활동 기록을
                작성하고 보존한다.
              </p>

              <p>
                모든 기록은 보안 등급에 따라 분류하며, 허가받지 않은 열람과
                기록 위·변조는 협회 규정에 따라 중대한 범죄로 처리한다.
              </p>

              <p>
                중앙기록국은 공식적으로 확인되는 정보만 등록하며, 미확인 정보는
                검증 절차를 마치기 전까지 정식 기록으로 인정하지 않는다.
              </p>
            </div>
          </div>
        </section>

        {/* 길드 */}
        <section className="institution-rise institution-delay-6 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-zinc-400">
            부속 기록
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            길드
          </h2>

          <div className="mt-8 border-y border-white/[0.08] bg-white/[0.015] px-5 py-10 text-center sm:px-8">
            <p className="text-[9px] tracking-[0.24em] text-zinc-500">
              NO REGISTERED GUILDS
            </p>

            <p className="mt-6 font-serif text-xl leading-9 text-zinc-200 sm:text-2xl">
              현재 공식적으로 등록된 길드는 존재하지 않는다.
            </p>

            <p className="mx-auto mt-5 max-w-2xl break-keep text-sm leading-8 text-zinc-400 sm:text-base">
              길드는 스토리 진행과 세계의 변화에 따라 새롭게 창립될 수 있다.
              등록이 확인되는 즉시 중앙기록국은 관련 정보를 공식 문서에 추가한다.
            </p>
          </div>
        </section>

        {/* 마무리 */}
        <section className="institution-rise institution-delay-7 py-14 text-center sm:py-20">
          <p className="font-serif text-xl leading-9 text-amber-100/90 sm:text-2xl">
            모든 헌터 활동은 협회의 관리 아래 이루어진다.
          </p>

          <p className="mt-4 font-serif text-xl leading-9 text-[#f1eadb] sm:text-2xl">
            모든 공식 기록은 중앙기록국에 남는다.
          </p>
        </section>

        <footer className="institution-rise institution-delay-8 border-t border-white/[0.08] pt-8 text-center">
          <p className="text-[11px] tracking-[0.25em] text-zinc-300 sm:text-xs">
            made by. Robin
          </p>

          <p className="mt-5 text-[8px] tracking-[0.15em] text-zinc-500 sm:text-[10px]">
            © 2026 Robin. All Rights Reserved.
          </p>
        </footer>
      </article>

      <style>{`
        .institution-rise {
          opacity: 0;
          transform: translateY(42px);
          animation: institutionRise 1s cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .institution-delay-1 { animation-delay: 0.04s; }
        .institution-delay-2 { animation-delay: 0.14s; }
        .institution-delay-3 { animation-delay: 0.24s; }
        .institution-delay-4 { animation-delay: 0.34s; }
        .institution-delay-5 { animation-delay: 0.44s; }
        .institution-delay-6 { animation-delay: 0.54s; }
        .institution-delay-7 { animation-delay: 0.64s; }
        .institution-delay-8 { animation-delay: 0.74s; }

        @keyframes institutionRise {
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
          .institution-rise {
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