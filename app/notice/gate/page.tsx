import Link from "next/link";

const gateGrades = [
  {
    grade: "E",
    title: "E급 게이트",
    description:
      "낮은 마나 농도와 비교적 약한 마물이 관측되는 게이트였다. 그러나 내부 환경과 공략 조건을 예측할 수 없다는 점은 다른 게이트와 동일했다.",
  },
  {
    grade: "D",
    title: "D급 게이트",
    description:
      "초급 헌터들이 주로 투입되는 게이트였다. 환경 변화와 다수의 마물 출현 가능성 때문에 정식 공략대 편성이 요구되었다.",
  },
  {
    grade: "C",
    title: "C급 게이트",
    description:
      "도시 단위의 인명 피해를 일으킬 수 있는 위협으로 분류되었다. 경험이 부족한 헌터의 단독 진입은 엄격하게 금지되었다.",
  },
  {
    grade: "B",
    title: "B급 게이트",
    description:
      "고위 마물과 변칙적인 환경이 출현할 가능성이 높은 게이트였다. 공략 실패 시 광범위한 대피령이 선포되었다.",
  },
  {
    grade: "A",
    title: "A급 게이트",
    description:
      "도시 하나를 붕괴시킬 수 있는 전략적 재난으로 분류되었다. 국가기관과 상위 세력의 공동 대응이 원칙이었다.",
  },
  {
    grade: "S",
    title: "S급 게이트",
    description:
      "국가의 존속을 위협할 수 있는 최고위 재난이었다. 내부 정보가 거의 존재하지 않았으며 공략 자체가 국가 단위의 작전으로 취급되었다.",
  },
];

const coreRules = [
  {
    number: "01",
    title: "외형과 내부는 일치하지 않았다",
    description:
      "게이트의 모습은 제각각이었다. 허공에 열린 균열, 폐쇄된 문, 동굴, 지하철 입구처럼 나타나기도 했다. 그러나 외형만으로 내부 환경을 판단할 수는 없었다.",
  },
  {
    number: "02",
    title: "내부 환경은 진입 전까지 알 수 없었다",
    description:
      "게이트 너머에는 설원, 사막, 폐허, 숲이나 인간이 이해할 수 없는 공간이 존재했다. 기후와 지형, 생태계와 시간의 흐름까지 직접 진입하기 전에는 확인할 수 없었다.",
  },
  {
    number: "03",
    title: "진입 이후에는 퇴로가 사라졌다",
    description:
      "헌터가 게이트의 경계를 넘어가는 순간 현실로 이어진 출구는 사라졌다. 진입했던 장소로 돌아가더라도 밖으로 나가는 통로는 존재하지 않았다.",
  },
  {
    number: "04",
    title: "공략 조건을 충족해야 출구가 열렸다",
    description:
      "특정 마물을 토벌하거나 지정된 장소에 도달하는 등 게이트마다 서로 다른 공략 조건이 존재했다. 조건이 충족된 뒤에야 현실로 돌아가는 출구가 형성되었다.",
  },
];

const raidRules = [
  {
    label: "최소 인원",
    value: "05",
    description:
      "모든 공식 공략대는 최소 다섯 명 이상의 헌터로 편성되어야 했다.",
  },
  {
    label: "등급 기준",
    value: "동급",
    description:
      "게이트와 동일한 등급의 헌터가 공략 전력의 기준으로 인정되었다.",
  },
  {
    label: "낮은 등급",
    value: "불인정",
    description:
      "게이트보다 낮은 등급의 헌터는 공식적인 공략 전력으로 계산되지 않았다.",
  },
  {
    label: "상위 헌터",
    value: "대체 가능",
    description:
      "게이트보다 높은 등급의 헌터는 필요 전력을 일부 대체할 수 있었다.",
  },
];

export default function GatePage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#090a0b] px-5 py-8 text-[#e9e5db] sm:px-8 sm:py-12">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_3%,rgba(107,84,156,0.075),transparent_40%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.78)] sm:shadow-[inset_0_0_230px_rgba(0,0,0,0.9)]" />

      <article className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="gate-rise gate-delay-1 border-b border-[#9c87c8]/25 pb-8 sm:pb-11">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[9px] tracking-[0.28em] text-[#aa98d2]/75 sm:text-[10px]">
                SIGNAL ARCHIVE · DOCUMENT 02
              </p>

              <h1 className="font-serif text-5xl font-normal tracking-[0.1em] text-[#f2eee4] sm:text-7xl">
                게이트
              </h1>

              <p className="mt-6 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                현실과 이계를 연결한 통로와 그 공략 규칙에 관한 공식
                기록이었다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/notice"
                className="group flex min-h-11 items-center gap-3 border border-[#aa98d2]/30 px-5 py-3 text-[10px] tracking-[0.18em] text-[#d1c6e8] transition duration-300 hover:border-[#c0afe0]/65 hover:bg-[#aa98d2]/5 hover:text-[#f0eafa]"
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
              <span className="ml-3 text-emerald-300/90">OPEN</span>
            </p>

            <p>
              CLASSIFICATION
              <span className="ml-3 text-zinc-200">PUBLIC</span>
            </p>

            <p>
              GATE RANGE
              <span className="ml-3 text-[#c4b4e2]">E — S</span>
            </p>
          </div>
        </header>

        <section className="gate-rise gate-delay-2 border-b border-white/[0.08] py-12 sm:py-16">
          <div className="text-center">
            <p className="font-serif text-sm tracking-[0.3em] text-[#b7a4dd]">
              제1장
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[0.08em] text-[#eee8dc] sm:text-6xl">
              이계의 통로
            </h2>

            <p className="mt-4 text-[10px] tracking-[0.28em] text-zinc-400 sm:text-xs">
              INTERDIMENSIONAL GATE
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-y border-[#9c87c8]/18 py-8 text-center sm:py-10">
            <p className="font-serif text-xl leading-9 text-[#cbb9e8] sm:text-2xl">
              게이트는 현실과 이계를 연결하는 유일한 통로였다.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              게이트에는 정해진 형태가 존재하지 않았다. 허공을 찢고 열린
              균열로 나타나기도 했으며, 오래된 문이나 동굴, 지하철 입구처럼
              현실에 존재하던 구조물의 모습을 빌리기도 했다.
            </p>

            <p>
              게이트의 외형과 내부 환경에는 어떠한 연관성도 존재하지 않았다.
              평범한 문 너머에 끝없는 설원이 펼쳐지기도 했고, 손바닥만 한
              균열 안에 도시 하나를 삼킬 정도의 공간이 존재하기도 했다.
            </p>

            <p>
              내부의 지형과 기후, 생태계는 직접 진입하기 전까지 예측할 수
              없었다. 외부에서 내부를 관측하거나 통신하는 방법 또한
              존재하지 않았다.
            </p>

            <p>
              일부 게이트에서는 시간의 흐름과 중력이 현실과 다르게
              작용했다. 같은 길을 반복해서 걷거나, 출발했던 장소로 되돌아오는
              공간 현상도 보고되었다.
            </p>
          </div>
        </section>

        <section className="gate-rise gate-delay-3 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#b7a4dd]">
            제2장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            절대 규칙
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            모든 게이트에는 외형과 환경에 상관없이 공통적으로 적용되는
            규칙이 존재했다.
          </p>

          <div className="mt-10 border-y border-white/[0.08]">
            {coreRules.map((rule) => (
              <div
                key={rule.number}
                className="grid grid-cols-[44px_1fr] gap-5 border-b border-white/[0.07] py-8 last:border-b-0 sm:grid-cols-[70px_250px_1fr] sm:gap-8"
              >
                <p className="font-serif text-sm text-[#b7a4dd]">
                  {rule.number}
                </p>

                <h3 className="font-serif text-xl leading-8 text-[#eee7da] sm:text-2xl">
                  {rule.title}
                </h3>

                <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 border-y border-red-300/15 bg-red-950/[0.025] px-5 py-8 text-center sm:px-8">
            <p className="font-serif text-lg leading-9 text-red-100/90 sm:text-xl">
              한 번 게이트에 들어간 사람은 공략을 완료하기 전까지 밖으로
              나올 수 없었다.
            </p>

            <p className="mt-4 break-keep text-xs leading-6 text-zinc-300 sm:text-sm">
              진입자가 경계를 넘어가는 순간 현실로 이어진 출구는 사라졌다.
            </p>
          </div>
        </section>

        <section className="gate-rise gate-delay-4 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#b7a4dd]">
            제3장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            공략과 귀환
          </h2>

          <div className="mx-auto mt-9 max-w-3xl space-y-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              게이트에서 탈출하기 위해서는 내부 어딘가에 존재하는 공략
              조건을 달성해야 했다.
            </p>

            <p>
              공략 조건은 게이트마다 달랐다. 특정 마물을 토벌해야 하는
              경우도 있었고, 지정된 장소에 도달하거나 숨겨진 규칙을
              밝혀내야 하는 경우도 있었다.
            </p>

            <p>
              일부 게이트에서는 정해진 시간 동안 살아남는 것 자체가 공략
              조건으로 작용했다. 따라서 내부에 존재하는 마물을 모두
              토벌했다고 해서 반드시 출구가 열리는 것은 아니었다.
            </p>

            <p>
              조건을 달성하면 게이트 내부에 현실로 이어지는 새로운 출구가
              형성되었다. 생존자들이 모두 빠져나온 뒤 게이트는 서서히
              닫혔다.
            </p>

            <p>
              반대로 공략에 실패하면 내부에 진입한 헌터는 돌아오지 못했다.
              외부에서는 이들의 생사와 실패 원인을 확인할 방법이 없었다.
            </p>
          </div>

          <blockquote className="mx-auto mt-12 max-w-4xl border-l border-[#aa98d2]/50 bg-[#aa98d2]/[0.025] px-6 py-7 sm:px-9">
            <p className="font-serif text-lg leading-9 text-[#e2d7f1] sm:text-xl">
              게이트의 입구는 누구에게나 열려 있었다.
              <br />
              그러나 출구는 공략을 끝낸 자에게만 허락되었다.
            </p>
          </blockquote>
        </section>

        <section className="gate-rise gate-delay-5 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#b7a4dd]">
            제4장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            게이트 등급
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            게이트에는 내부에서 감지되는 마나의 농도와 예상되는 마물의 위협
            수준을 기준으로 등급이 산정되었다.
          </p>

          <div className="mt-9 border-y border-white/[0.08]">
            {gateGrades.map((gate) => (
              <div
                key={gate.grade}
                className="grid grid-cols-[52px_1fr] gap-5 border-b border-white/[0.07] py-7 last:border-b-0 sm:grid-cols-[85px_220px_1fr] sm:items-start sm:gap-8"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center border font-serif text-xl sm:h-12 sm:w-12 ${
                    gate.grade === "S"
                      ? "border-red-300/45 text-red-100"
                      : gate.grade === "A"
                        ? "border-amber-300/45 text-amber-100"
                        : "border-[#aa98d2]/40 text-[#d3c5ea]"
                  }`}
                >
                  {gate.grade}
                </div>

                <h3 className="font-serif text-xl text-[#eee7da] sm:text-2xl">
                  {gate.title}
                </h3>

                <p className="col-start-2 break-keep text-sm leading-7 text-zinc-300 sm:col-start-auto">
                  {gate.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl break-keep text-sm leading-7 text-zinc-300">
            게이트 내부는 진입 전까지 완전히 파악할 수 없었기 때문에 산정된
            등급은 절대적인 안전 기준이 아니었다. 해당 등급은 공략에 필요한
            전력의 최저선으로 취급되었다.
          </p>
        </section>

        <section className="gate-rise gate-delay-6 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#b7a4dd]">
            제5장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            공식 공략 기준
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            게이트 공략대는 산정된 등급과 인원 기준을 충족해야 정식 공략
            허가를 받을 수 있었다.
          </p>

          <div className="mt-10 grid grid-cols-1 border-y border-white/[0.08] sm:grid-cols-2 lg:grid-cols-4">
            {raidRules.map((rule, index) => (
              <div
                key={rule.label}
                className={`p-6 sm:p-7 ${
                  index > 0
                    ? "border-t border-white/[0.07] sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <p className="text-[9px] tracking-[0.2em] text-zinc-400">
                  {rule.label}
                </p>

                <p className="mt-4 font-serif text-3xl text-[#d3c5ea]">
                  {rule.value}
                </p>

                <p className="mt-4 break-keep text-xs leading-6 text-zinc-300">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-6 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              공식 공략에는 해당 게이트와 동일한 등급의 헌터가 최소 다섯 명
              이상 필요했다.
            </p>

            <p>
              예를 들어 C급 게이트를 공략하기 위해서는 최소 다섯 명의 C급
              헌터가 편성되어야 했다. C급보다 낮은 헌터는 공식 전력으로
              인정되지 않았다.
            </p>

            <p>
              게이트보다 높은 등급의 헌터는 필요한 전력을 일부 대체할 수
              있었다. 다만 정확한 대체 기준은 헌터의 능력과 게이트의 특성에
              따라 별도로 산정되었다.
            </p>

            <p>
              같은 등급이라도 헌터의 전투 경험과 능력의 상성에 따라 실제
              공략 가능성은 크게 달라졌다. 이 때문에 대부분의 공략대는 최소
              기준보다 많은 인원을 편성하거나 한 명 이상의 상위 등급 헌터를
              포함했다.
            </p>
          </div>

          <div className="mt-10 border border-[#aa98d2]/22 bg-[#aa98d2]/[0.025] p-6 sm:p-8">
            <p className="text-[9px] tracking-[0.22em] text-[#c0afe0]/80">
              OFFICIAL EXAMPLE
            </p>

            <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs text-zinc-400">게이트 등급</p>
                <p className="mt-2 font-serif text-3xl text-[#eee8f6]">C</p>
              </div>

              <div>
                <p className="text-xs text-zinc-400">최소 요구 등급</p>
                <p className="mt-2 font-serif text-3xl text-[#eee8f6]">
                  C급
                </p>
              </div>

              <div>
                <p className="text-xs text-zinc-400">최소 요구 인원</p>
                <p className="mt-2 font-serif text-3xl text-[#eee8f6]">
                  5명
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="gate-rise gate-delay-7 border-b border-white/[0.08] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-red-300/75">
            재난 기록
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#eee8dc] sm:text-5xl">
            게이트 브레이크
          </h2>

          <div className="mt-8 border-y border-red-300/15 bg-red-950/[0.025] px-5 py-8 sm:px-8">
            <p className="font-serif text-lg leading-9 text-red-100/90 sm:text-xl">
              게이트가 일정 시간 이상 공략되지 않으면 내부의 마물들이
              현실로 쏟아져 나왔다.
            </p>

            <p className="mt-5 max-w-4xl break-keep text-sm leading-8 text-zinc-300">
              인류는 이 현상을 게이트 브레이크라고 명명했다. 브레이크가
              발생한 게이트는 더 이상 닫힌 공간이 아니었으며, 내부의 마물과
              환경이 현실을 직접 침식하기 시작했다.
            </p>
          </div>
        </section>

        <section className="gate-rise gate-delay-8 py-14 text-center sm:py-20">
          <p className="font-serif text-xl leading-9 text-[#d3c5ea] sm:text-2xl">
            게이트의 입구는 누구에게나 열려 있었다.
          </p>

          <p className="mt-4 font-serif text-xl leading-9 text-[#f1eadb] sm:text-2xl">
            그러나 출구는 공략을 끝낸 자에게만 허락되었다.
          </p>
        </section>

        <footer className="gate-rise gate-delay-9 border-t border-white/[0.08] pt-8 text-center">
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
        .gate-rise {
          opacity: 0;
          transform: translateY(42px);
          animation: gateRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .gate-delay-1 {
          animation-delay: 0.04s;
        }

        .gate-delay-2 {
          animation-delay: 0.14s;
        }

        .gate-delay-3 {
          animation-delay: 0.24s;
        }

        .gate-delay-4 {
          animation-delay: 0.34s;
        }

        .gate-delay-5 {
          animation-delay: 0.44s;
        }

        .gate-delay-6 {
          animation-delay: 0.54s;
        }

        .gate-delay-7 {
          animation-delay: 0.64s;
        }

        .gate-delay-8 {
          animation-delay: 0.74s;
        }

        .gate-delay-9 {
          animation-delay: 0.84s;
        }

        @keyframes gateRise {
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
          .gate-rise {
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