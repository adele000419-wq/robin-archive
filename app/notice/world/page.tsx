import Link from "next/link";

type StatusTone = "alive" | "warning" | "dead" | "unknown";

type RegionRecord = {
  name: string;
  status: string;
  tone: StatusTone;
  description: string;
};

const koreanSurvivalRegions: RegionRecord[] = [
  {
    name: "서울특별시",
    status: "생존",
    tone: "alive",
    description:
      "최초의 게이트가 출현한 지역이다. 중앙정부와 최상위 헌터 전력이 집중되어 대한민국 최대의 방벽도시로 기능한다.",
  },
  {
    name: "부산특별시",
    status: "생존",
    tone: "alive",
    description:
      "해군기지와 해상 보급로를 기반으로 생존한다. 해외 생존권과 연결된 대한민국 최후의 국제항구로 기능한다.",
  },
  {
    name: "제주특별자치도",
    status: "생존",
    tone: "alive",
    description:
      "바다와 대규모 결계장벽을 이용해 방어선을 구축한다. 본토와 분리된 독립적인 행정 및 생존체계를 유지한다.",
  },
];

const koreanLostRegions: RegionRecord[] = [
  {
    name: "경기도",
    status: "상실",
    tone: "dead",
    description:
      "서울 방벽 외부의 인천과 경기 대부분은 연쇄 게이트 폭주로 붕괴한 상태다. 일부 지하 대피시설의 신호만 간헐적으로 감지된다.",
  },
  {
    name: "강원도",
    status: "마경화",
    tone: "warning",
    description:
      "고위 마물과 이계 식생이 산악지대를 잠식한다. 지형과 생태계 자체가 이계와 융합해 영구 출입금지구역으로 지정되어 있다.",
  },
  {
    name: "충청도",
    status: "상실",
    tone: "dead",
    description:
      "중부를 가로지르는 대규모 균열로 도시와 교통망이 단절되어 있다. 정부는 현재 구조 가능성이 없다고 판단한다.",
  },
  {
    name: "전라도",
    status: "상실",
    tone: "dead",
    description:
      "연쇄적으로 발생하는 마물 군집 사태로 행정기능을 상실한 상태다. 해안의 일부 임시거점도 연락이 끊겨 있다.",
  },
  {
    name: "경상도",
    status: "상실",
    tone: "dead",
    description:
      "부산으로 이어지는 최종 방어선이 붕괴해 도시 대부분이 폐허로 남아 있다. 부산 방벽 외부의 구조 활동은 중단된 상태다.",
  },
];

const globalRegions: RegionRecord[] = [
  {
    name: "미합중국",
    status: "부분 생존",
    tone: "alive",
    description:
      "동부와 서부의 초대형 방벽도시를 중심으로 연방체제를 유지한다. 국토 중앙부 대부분은 마경으로 변해 있으며 대륙 횡단로는 소멸한 상태다.",
  },
  {
    name: "유럽 연합",
    status: "부분 생존",
    tone: "alive",
    description:
      "기존 국경이 붕괴한 이후 주요 방벽도시들이 공동방위체제를 유지한다. 과거의 국가명은 행정기록에만 남아 있다.",
  },
  {
    name: "중화 군벌도시권",
    status: "분열",
    tone: "warning",
    description:
      "중앙정부의 통제력은 상실된 상태다. 고위 헌터와 군벌이 각자의 생존도시를 지배하며 끊임없이 세력권을 다툰다.",
  },
  {
    name: "일본 열도",
    status: "부분 생존",
    tone: "alive",
    description:
      "도쿄와 오사카를 포함한 일부 해안도시가 유지된다. 내륙과 다수의 섬은 마물 서식지로 변해 있다.",
  },
  {
    name: "북방권",
    status: "통신 두절",
    tone: "unknown",
    description:
      "국토 대부분과 통신이 단절되어 있다. 러시아의 극소수 북방요새가 유지된다는 기록만 간헐적으로 수신된다.",
  },
  {
    name: "동남아시아",
    status: "대부분 소멸",
    tone: "dead",
    description:
      "고온다습한 환경에서 마물이 급격하게 번식한다. 육상국가 대부분은 붕괴한 상태이며 일부 해상도시만 명맥을 이어간다.",
  },
  {
    name: "아프리카",
    status: "확인 불가",
    tone: "unknown",
    description:
      "대륙 규모의 초대형 게이트 발생 이후 공식 통신망이 소멸한 상태다. 현재 인류의 생존 규모는 확인되지 않는다.",
  },
  {
    name: "남아메리카",
    status: "대부분 소멸",
    tone: "dead",
    description:
      "밀림과 이계 생태계가 융합해 대륙 대부분이 거대한 마경으로 변해 있다. 잔존 인류의 규모는 확인되지 않는다.",
  },
];

const timeline = [
  {
    date: "2026. 03. 17",
    title: "최초의 게이트",
    description:
      "서울 상공에 거대한 공간 균열이 출현했다. 인류는 훗날 이를 최초의 게이트라고 기록했다.",
  },
  {
    date: "2026. 03. 18",
    title: "마물의 출현",
    description:
      "이형의 마물들이 공간의 틈을 찢고 지상으로 쏟아져 나왔다. 서울 중심부는 하루 만에 전쟁터로 변했다.",
  },
  {
    date: "2026. 03. 21",
    title: "서울 중심부 붕괴",
    description:
      "재래식 병력의 방어선이 무너졌다. 정부는 서울 전역에 최고 단계의 대피명령을 선포했다.",
  },
  {
    date: "2026. 04",
    title: "전 세계 동시다발 게이트",
    description:
      "서울 사건 이후 전 세계 주요 도시에서 동일한 공간 균열이 발생했다. 기존의 국제질서와 군사체계가 빠르게 붕괴했다.",
  },
  {
    date: "2026. 06",
    title: "마나의 발견",
    description:
      "게이트를 통해 지구로 유입된 미지의 물질이 관측되었다. 국제학술연합은 그것을 마나라고 명명했다.",
  },
  {
    date: "2026. 08",
    title: "최초의 각성자",
    description:
      "마나에 적응한 일부 인간이 초인적인 힘을 발현했다. 이들이 훗날 헌터라고 불린 존재의 시발점이 되었다.",
  },
  {
    date: "2026. 11",
    title: "제1차 서울 탈환작전",
    description:
      "최초의 헌터 부대가 서울 중심부에 투입되었다. 작전은 막대한 희생 끝에 제한적인 성공을 거두었다.",
  },
  {
    date: "2027",
    title: "제1차 문명 붕괴",
    description:
      "전 세계 국가의 절반 이상이 행정기능을 상실했다. 국경은 의미를 잃었고 생존도시가 국가를 대신하기 시작했다.",
  },
  {
    date: "2028",
    title: "대한민국 방벽도시 체제",
    description:
      "서울특별시, 부산특별시, 제주특별자치도를 중심으로 새로운 국가 생존체계가 확립되었다.",
  },
  {
    date: "현재",
    title: "잔존 인류 시대",
    description:
      "인류는 여전히 게이트를 닫지 못한다. 살아남은 도시들은 마물과 마경 사이에서 간신히 문명의 명맥을 이어간다.",
  },
];

const koreanStatistics = [
  {
    label: "국토 잔존율",
    value: "12.6%",
    description:
      "정부가 실질적으로 통제하는 대한민국 영토의 비율이다.",
    tone: "gold",
  },
  {
    label: "생존 행정구역",
    value: "03",
    description:
      "서울특별시, 부산특별시, 제주특별자치도만 현재 유지된다.",
    tone: "green",
  },
  {
    label: "추정 생존 인구",
    value: "18.4M",
    description:
      "난민 등록자료와 식량배급 기록을 기준으로 산정한 수치다.",
    tone: "white",
  },
  {
    label: "상실 행정구역",
    value: "14",
    description:
      "정부의 행정력과 구조 가능성이 모두 상실된 지역의 수다.",
    tone: "red",
  },
];

const globalStatistics = [
  {
    label: "국가 기능 유지",
    value: "28.2%",
    description:
      "최소한의 중앙 행정체계를 유지하는 국가 및 생존연합의 비율이다.",
  },
  {
    label: "공식 생존국가",
    value: "17",
    description:
      "국제 생존연합이 국가 기능을 인정하는 잔존국가의 수다.",
  },
  {
    label: "부분 유지 지역",
    value: "24",
    description:
      "방벽도시나 군벌도시 형태로 명맥을 이어가는 지역의 수다.",
  },
  {
    label: "국가 기능 소멸",
    value: "63",
    description:
      "중앙정부와 공식 통신망이 완전히 소멸한 국가의 수다.",
  },
];

function StatusBadge({
  status,
  tone,
}: {
  status: string;
  tone: StatusTone;
}) {
  const styles: Record<StatusTone, string> = {
    alive:
      "border-emerald-300/35 bg-emerald-400/[0.04] text-emerald-100",
    warning:
      "border-amber-300/35 bg-amber-400/[0.04] text-amber-100",
    dead:
      "border-red-300/30 bg-red-400/[0.035] text-red-100/90",
    unknown:
      "border-zinc-300/30 bg-white/[0.025] text-zinc-200",
  };

  return (
    <span
      className={`inline-flex shrink-0 border px-3 py-1 text-[9px] tracking-[0.18em] ${styles[tone]}`}
    >
      {status}
    </span>
  );
}

export default function WorldPage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#050607] px-5 py-8 text-[#f0ece3] sm:px-8 sm:py-12">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(213,176,92,0.2),transparent_38%),radial-gradient(circle_at_10%_52%,rgba(87,65,28,0.11),transparent_34%),radial-gradient(circle_at_92%_74%,rgba(114,28,28,0.08),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.018] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none fixed inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.82)] sm:shadow-[inset_0_0_320px_rgba(0,0,0,0.94)]" />

      <article className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="world-rise world-delay-1 relative min-h-[72vh] overflow-hidden border border-[#d1ad5d]/24 bg-black/25 px-6 py-12 shadow-[0_40px_140px_rgba(0,0,0,0.52)] sm:px-10 sm:py-16 lg:flex lg:items-end">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f0d58a]/90 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#d5b86f]/30 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#d5b86f]/30 to-transparent" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-serif text-[clamp(8rem,25vw,23rem)] font-black tracking-[-0.06em] text-[#d5b86f]/[0.045]">
            WORLD
          </div>
          <div className="pointer-events-none absolute right-6 top-6 hidden rotate-[-7deg] border-2 border-[#d5b86f]/25 px-5 py-3 text-center sm:block">
            <p className="text-[8px] tracking-[0.22em] text-[#d5b86f]">
              AUTHENTICATED
            </p>
            <p className="mt-1 font-serif text-xl text-[#f0d58a]">
              DOCUMENT 01
            </p>
          </div>
          <div className="relative w-full">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-4 text-[9px] tracking-[0.28em] text-[#d2b46f]/85 sm:text-[10px]">
                SIGNAL ARCHIVE · DOCUMENT 01
              </p>

              <h1 className="font-serif text-6xl font-normal tracking-[0.1em] text-[#fffaf0] drop-shadow-[0_0_34px_rgba(240,213,138,0.14)] sm:text-8xl lg:text-9xl">
                세계관
              </h1>

              <p className="mt-8 max-w-3xl break-keep text-base leading-8 text-zinc-300 sm:text-lg sm:leading-9">
                최초의 게이트가 출현한 2026년부터 현재의 잔존 인류 시대에
                이르기까지를 다루는 공식 기록이다.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/notice"
                className="group flex min-h-11 items-center gap-3 border border-[#c2a45d]/40 px-5 py-3 text-[10px] tracking-[0.18em] text-[#ead8ae] transition duration-300 hover:border-[#e0c57e]/75 hover:bg-[#b99a5a]/10 hover:text-white"
              >
                <span className="transition duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                문서 목록
              </Link>

              <Link
                href="/"
                className="flex min-h-11 items-center border border-white/15 px-5 py-3 text-[10px] tracking-[0.18em] text-zinc-300 transition duration-300 hover:border-white/35 hover:text-white"
              >
                메인
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-white/[0.09] pt-5 text-[9px] tracking-[0.16em] text-zinc-400 sm:grid-cols-3 sm:text-[10px]">
            <p>
              DOCUMENT STATUS
              <span className="ml-3 text-emerald-200">OPEN</span>
            </p>

            <p>
              CLASSIFICATION
              <span className="ml-3 text-zinc-200">PUBLIC</span>
            </p>

            <p>
              ARCHIVE REVISION
              <span className="ml-3 text-[#e1c57e]">01</span>
            </p>
          </div>
          </div>
        </header>

        <section className="world-rise world-delay-2 border-b border-white/[0.1] py-20 text-center sm:py-28">
          <p className="text-[9px] tracking-[0.34em] text-[#d5b86f]">
            THE BEGINNING OF THE END
          </p>

          <p className="mx-auto mt-9 max-w-5xl break-keep font-serif text-3xl leading-[1.65] text-[#fff4d3] sm:text-5xl">
            모든 것은 서울 상공에 열린
            <br />
            단 하나의 균열에서 시작되었다.
          </p>

          <div className="mx-auto mt-10 h-px w-52 bg-gradient-to-r from-transparent via-[#d5b86f]/80 to-transparent" />
        </section>

        <section id="first-gate" className="world-rise world-delay-6 scroll-mt-28 border-b border-white/[0.1] py-12 sm:py-16">
          <div className="text-center">
            <div className="mx-auto grid max-w-3xl grid-cols-3 border-y border-[#c2a45d]/28 bg-black/20">
              <div className="px-4 py-7">
                <p className="text-[9px] tracking-[0.22em] text-zinc-500">YEAR</p>
                <p className="mt-2 font-serif text-4xl text-[#f0d48b] sm:text-5xl">2026</p>
              </div>
              <div className="border-x border-white/[0.08] px-4 py-7">
                <p className="text-[9px] tracking-[0.22em] text-zinc-500">MONTH</p>
                <p className="mt-2 font-serif text-4xl text-[#f0d48b] sm:text-5xl">03</p>
              </div>
              <div className="px-4 py-7">
                <p className="text-[9px] tracking-[0.22em] text-zinc-500">DAY</p>
                <p className="mt-2 font-serif text-4xl text-[#f0d48b] sm:text-5xl">17</p>
              </div>
            </div>

            <p className="mt-12 font-serif text-sm tracking-[0.3em] text-[#d5b86f]">
              제1장
            </p>

            <h2 className="mt-5 font-serif text-4xl font-normal tracking-[0.08em] text-[#fff9ec] sm:text-6xl">
              최초의 게이트
            </h2>

            <p className="mt-4 text-[10px] tracking-[0.3em] text-zinc-400 sm:text-xs">
              THE FIRST GATE · SEOUL · 2026
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl border-y border-[#c2a45d]/25 py-8 text-center sm:py-10">
            <p className="font-serif text-xl leading-9 text-[#f0ce7c] sm:text-2xl">
              2026년, 서울 상공에 인류 최초의 게이트가 출현했다.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-7 break-keep text-sm leading-8 text-zinc-300 sm:text-base sm:leading-9">
            <p>
              게이트는 이계와 현대를 연결하는 통로 역할을 했다. 인류가
              이해하지 못한 공간의 틈은 서울 하늘을 가로질렀고, 그 너머에는
              기존의 자연법칙이 적용되지 않는 세계가 존재했다.
            </p>

            <p>
              이형의 마물들은 게이트의 경계를 찢고 지상으로 쏟아져 나왔다.
              총탄과 포격은 일부 마물에게조차 제대로 통하지 않았다. 서울의
              도로는 전선으로 변했고, 인류가 구축했던 질서는 불과 며칠 만에
              무너지기 시작했다.
            </p>

            <p>
              그러나 게이트가 재앙만을 가져온 것은 아니었다. 균열을 통해
              이적에 가까운 미지의 물질 또한 유입되었다. 이후 마나라고
              명명된 그 물질은 지구의 대기와 생명체에 스며들었다.
            </p>

            <p>
              마나에 장기간 노출된 일부 인간은 비정상적인 신체 변화와 고유한
              능력을 발현했다. 이들은 재래식 무기가 상대하지 못했던 마물을
              쓰러뜨리기 시작했다.
            </p>

            <p className="font-serif text-lg leading-9 text-[#ead39c] sm:text-xl">
              그것이 헌터의 시발점이었다.
            </p>
          </div>
        </section>

        <section id="korea-status" className="world-rise world-delay-3 scroll-mt-28 border-b border-white/[0.1] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#d5b86f]">
            제2장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#fff9ec] sm:text-5xl">
            대한민국 잔존 현황
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            대한민국 정부는 서울특별시, 부산특별시, 제주특별자치도를 제외한
            모든 지역을 공식적인 상실지역으로 분류한다.
          </p>

          <div className="mt-10 grid grid-cols-1 border-y border-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
            {koreanStatistics.map((stat, index) => (
              <div
                key={stat.label}
                className={`group bg-white/[0.018] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#d5b86f]/[0.035] sm:p-7 ${
                  index > 0
                    ? "border-t border-white/[0.1] sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <p className="text-[9px] tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </p>

                <p
                  className={`mt-4 font-serif text-4xl ${
                    stat.tone === "green"
                      ? "text-emerald-100"
                      : stat.tone === "red"
                        ? "text-red-100/90"
                        : stat.tone === "gold"
                          ? "text-[#f0d48b]"
                          : "text-zinc-100"
                  }`}
                >
                  {stat.value}
                </p>

                <p className="mt-4 break-keep text-xs leading-6 text-zinc-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-emerald-300/25 pb-5">
              <div>
                <p className="text-[9px] tracking-[0.22em] text-emerald-200/80">
                  SURVIVING ADMINISTRATIVE DISTRICTS
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#fff9ec] sm:text-3xl">
                  생존 행정구역
                </h3>
              </div>

              <p className="text-[9px] tracking-[0.18em] text-zinc-400">
                TOTAL · 03
              </p>
            </div>

            <div>
              {koreanSurvivalRegions.map((region, index) => (
                <div
                  key={region.name}
                  className="grid grid-cols-1 gap-5 border-b border-white/[0.1] py-7 sm:grid-cols-[55px_1fr_auto] sm:items-start sm:gap-7"
                >
                  <p className="font-serif text-sm text-[#d5b86f]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <div>
                    <h4 className="font-serif text-2xl text-[#f8f1e5] sm:text-3xl">
                      {region.name}
                    </h4>

                    <p className="mt-4 max-w-3xl break-keep text-sm leading-7 text-zinc-300">
                      {region.description}
                    </p>
                  </div>

                  <StatusBadge status={region.status} tone={region.tone} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-red-300/25 pb-5">
              <div>
                <p className="text-[9px] tracking-[0.22em] text-red-200/75">
                  LOST ADMINISTRATIVE DISTRICTS
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#fff9ec] sm:text-3xl">
                  상실 지역
                </h3>
              </div>

              <p className="text-[9px] tracking-[0.18em] text-zinc-400">
                RECOVERY OPERATIONS · SUSPENDED
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
              {koreanLostRegions.map((region) => (
                <div
                  key={region.name}
                  className="border-b border-white/[0.1] py-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h4 className="font-serif text-xl text-[#f1e9dc] sm:text-2xl">
                      {region.name}
                    </h4>

                    <StatusBadge status={region.status} tone={region.tone} />
                  </div>

                  <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                    {region.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="global-status" className="world-rise world-delay-4 scroll-mt-28 border-b border-white/[0.1] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#d5b86f]">
            제3장
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#fff9ec] sm:text-5xl">
            전 세계 잔존 현황
          </h2>

          <div className="mt-7 border-y border-red-300/25 bg-red-950/[0.05] px-5 py-7 text-center sm:px-8">
            <p className="font-serif text-lg leading-8 text-red-100/90 sm:text-xl">
              강대국을 제외한 대다수 국가는 공식적인 국가기능을 상실한 상태다.
            </p>

            <p className="mt-3 break-keep text-xs leading-6 text-zinc-300 sm:text-sm">
              살아남은 지역 또한 과거의 국토가 아닌 방벽도시와 독립 생존권을
              중심으로 유지된다.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 border-y border-white/[0.12] sm:grid-cols-2 lg:grid-cols-4">
            {globalStatistics.map((stat, index) => (
              <div
                key={stat.label}
                className={`group bg-white/[0.018] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#d5b86f]/[0.035] sm:p-7 ${
                  index > 0
                    ? "border-t border-white/[0.1] sm:border-t-0 sm:border-l"
                    : ""
                }`}
              >
                <p className="text-[9px] tracking-[0.2em] text-zinc-400">
                  {stat.label}
                </p>

                <p className="mt-4 font-serif text-4xl text-[#f0d48b]">
                  {stat.value}
                </p>

                <p className="mt-4 break-keep text-xs leading-6 text-zinc-300">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-10 md:grid-cols-2">
            {globalRegions.map((region) => (
              <div
                key={region.name}
                className="border-b border-white/[0.1] py-7"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-serif text-xl text-[#f5ede0] sm:text-2xl">
                    {region.name}
                  </h3>

                  <StatusBadge status={region.status} tone={region.tone} />
                </div>

                <p className="mt-4 break-keep text-sm leading-7 text-zinc-300">
                  {region.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="timeline" className="world-rise world-delay-5 scroll-mt-28 border-b border-white/[0.1] py-12 sm:py-16">
          <p className="font-serif text-sm tracking-[0.26em] text-[#d5b86f]">
            공식 기록 연표
          </p>

          <h2 className="mt-4 font-serif text-3xl tracking-[0.07em] text-[#fff9ec] sm:text-5xl">
            문명 붕괴의 시작
          </h2>

          <p className="mt-5 max-w-3xl break-keep text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            최초의 게이트 발생 이후 인류 문명이 잔존도시 체제로 재편되기까지의
            주요 기록이다.
          </p>

          <div className="relative mt-10">
            <div className="absolute top-0 bottom-0 left-[6px] w-px bg-gradient-to-b from-[#d5b86f]/60 via-white/20 to-transparent sm:left-[154px]" />

            {timeline.map((item, index) => (
              <div
                key={`${item.date}-${item.title}`}
                className="relative grid grid-cols-1 gap-4 border-b border-white/[0.1] py-7 pl-8 sm:grid-cols-[130px_1fr] sm:gap-10 sm:pl-0"
              >
                <span className="absolute top-9 left-[2px] h-[9px] w-[9px] rounded-full border border-[#f0d48b]/80 bg-[#090a0b] sm:left-[150px]" />

                <p className="font-serif text-sm tracking-[0.04em] text-[#e1c57e] sm:text-lg">
                  {item.date}
                </p>

                <div className="sm:pl-10">
                  <div className="flex items-start gap-4">
                    <span className="hidden pt-1 text-[9px] tracking-[0.18em] text-zinc-400 lg:inline">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-serif text-xl text-[#f8f0e3] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl break-keep text-sm leading-7 text-zinc-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="world-rise world-delay-7 relative overflow-hidden border-y border-[#c2a45d]/24 bg-black/30 px-6 py-20 text-center sm:px-10 sm:py-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(194,164,93,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[clamp(6rem,18vw,14rem)] text-[#c2a45d]/[0.045]">
            HUMANITY
          </div>

          <div className="relative">
            <p className="text-[9px] tracking-[0.34em] text-[#d5b86f]">
              END OF DOCUMENT 01
            </p>

            <div className="mx-auto mt-8 h-px w-52 bg-gradient-to-r from-transparent via-[#d5b86f]/85 to-transparent" />

            <p className="mx-auto mt-9 max-w-4xl break-keep font-serif text-3xl leading-[1.7] text-[#fff5e4] sm:text-5xl">
              인류는 세계를 지켜내지 못했다.
              <br />
              그러나 오늘도 누군가는
              <br />
              내일을 위해 싸우고 있다.
            </p>

            <div className="mx-auto mt-10 h-px w-52 bg-gradient-to-r from-transparent via-[#d5b86f]/85 to-transparent" />
          </div>
        </section>

        <footer className="world-rise world-delay-8 border-t border-white/[0.1] pt-8 text-center">
          <p className="text-[11px] tracking-[0.25em] text-zinc-200 sm:text-xs">
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
        .world-rise {
          opacity: 0;
          transform: translateY(42px);
          animation: worldRise 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .world-delay-1 { animation-delay: 0.04s; }
        .world-delay-2 { animation-delay: 0.16s; }
        .world-delay-3 { animation-delay: 0.28s; }
        .world-delay-4 { animation-delay: 0.4s; }
        .world-delay-5 { animation-delay: 0.52s; }
        .world-delay-6 { animation-delay: 0.64s; }
        .world-delay-7 { animation-delay: 0.76s; }
        .world-delay-8 { animation-delay: 0.88s; }

        @keyframes worldRise {
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
          .world-rise {
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