import Link from "next/link";
import { archiveDocuments } from "../data/documents";

type SearchPageProps = {
  searchParams: Promise<{
    q?: string | string[];
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;

  const rawQuery = Array.isArray(params.q)
    ? params.q[0]
    : params.q;

  const query = rawQuery?.trim() ?? "";
  const normalizedQuery = query.toLocaleLowerCase("ko-KR");

  const results = normalizedQuery
    ? archiveDocuments.filter((document) => {
        const searchableText = [
          document.title,
          document.code,
          document.description,
          ...document.keywords,
        ]
          .join(" ")
          .toLocaleLowerCase("ko-KR");

        return searchableText.includes(normalizedQuery);
      })
    : [];

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-[#090a0b] px-5 py-10 text-[#f0ece3] sm:px-8 sm:py-14">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(177,145,79,0.09),transparent_42%)]" />

      <div className="pointer-events-none fixed inset-0 opacity-[0.02] [background-image:linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:64px_64px]" />

      <article className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="border-b border-amber-300/25 pb-8 sm:pb-10">
          <p className="text-[9px] tracking-[0.24em] text-amber-200/70">
            SIGNAL ARCHIVE · SEARCH SYSTEM
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="font-serif text-4xl tracking-[0.08em] text-white sm:text-6xl">
                문서 검색
              </h1>

              <p className="mt-5 break-keep text-sm leading-7 text-zinc-400">
                중앙기록국에 등록된 공개 문서를 검색합니다.
              </p>
            </div>

            <Link
              href="/notice"
              className="w-fit border border-amber-300/30 px-5 py-3 text-[10px] tracking-[0.16em] text-amber-100 transition hover:border-amber-200/65 hover:bg-amber-300/[0.06]"
            >
              ← 문서 목록
            </Link>
          </div>
        </header>

        <form
          action="/search"
          method="get"
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="검색어를 입력하세요."
            autoComplete="off"
            className="min-h-13 min-w-0 flex-1 border border-white/[0.12] bg-white/[0.025] px-5 text-sm text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-amber-300/50"
          />

          <button
            type="submit"
            className="min-h-13 border border-amber-300/30 bg-amber-400/[0.05] px-7 text-[10px] tracking-[0.18em] text-amber-100 transition hover:border-amber-200/65 hover:bg-amber-300/[0.1]"
          >
            SEARCH
          </button>
        </form>

        <section className="mt-10">
          {query ? (
            <div className="flex flex-wrap items-end justify-between gap-3 border-b border-white/[0.1] pb-5">
              <div>
                <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                  SEARCH QUERY
                </p>

                <h2 className="mt-3 break-all font-serif text-2xl text-white sm:text-3xl">
                  “{query}”
                </h2>
              </div>

              <p className="text-[9px] tracking-[0.18em] text-zinc-500">
                RESULT · {String(results.length).padStart(2, "0")}
              </p>
            </div>
          ) : (
            <div className="border-y border-white/[0.1] py-12 text-center">
              <p className="font-serif text-xl text-zinc-300">
                검색어를 입력해 주세요.
              </p>

              <p className="mt-4 text-sm text-zinc-600">
                문서명, 코드, 설정 용어와 키워드를 검색할 수 있습니다.
              </p>
            </div>
          )}

          {query && results.length > 0 && (
            <div>
              {results.map((document) => (
                <Link
                  key={document.href}
                  href={document.href}
                  className="group grid grid-cols-1 gap-5 border-b border-white/[0.09] py-7 transition hover:bg-white/[0.015] sm:grid-cols-[55px_1fr_auto] sm:px-4"
                >
                  <p className="font-serif text-sm text-amber-200/75">
                    {document.number}
                  </p>

                  <div>
                    <p className="text-[9px] tracking-[0.18em] text-zinc-600">
                      {document.code}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl text-zinc-100 transition group-hover:text-amber-100">
                      {document.title}
                    </h3>

                    <p className="mt-4 max-w-3xl break-keep text-sm leading-7 text-zinc-400">
                      {document.description}
                    </p>
                  </div>

                  <p className="text-[9px] tracking-[0.16em] text-zinc-600 transition group-hover:translate-x-1 group-hover:text-amber-200">
                    OPEN →
                  </p>
                </Link>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="border-b border-white/[0.1] py-16 text-center">
              <p className="font-serif text-2xl text-zinc-300">
                일치하는 문서가 없습니다.
              </p>

              <p className="mt-4 text-sm text-zinc-600">
                다른 이름이나 키워드로 다시 검색해 주세요.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-16 border-t border-white/[0.08] pt-7 text-center">
          <p className="text-[9px] tracking-[0.25em] text-zinc-600">
            SIGNAL CENTRAL ARCHIVE · SEARCH DATABASE
          </p>
        </footer>
      </article>
    </main>
  );
}