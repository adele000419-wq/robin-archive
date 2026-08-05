"use client";

import { useState } from "react";
import {
  hunterNews,
  type HunterNewsCategory,
} from "../data/news";

const categoryStyle: Record<HunterNewsCategory, string> = {
  속보: "border-red-300/30 bg-red-400/[0.05] text-red-100",
  협회: "border-amber-300/30 bg-amber-400/[0.05] text-amber-100",
  문서: "border-sky-300/30 bg-sky-400/[0.05] text-sky-100",
  운영: "border-violet-300/30 bg-violet-400/[0.05] text-violet-100",
};

function TopNotice() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="relative z-50 w-full bg-[#070908] text-[#eee8dc]">
      {visible && (
        <section className="border-b border-amber-300/25 bg-amber-950/[0.1]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
            <div className="flex min-w-0 items-center gap-3">
              <span className="shrink-0">📢</span>

              <p className="break-keep text-xs leading-6 text-amber-100/90 sm:text-sm">
                SIGNAL 아카이브에 오신 것을 환영합니다. 문서는 계속 추가 및
                수정됩니다.
              </p>
            </div>

            <button
              type="button"
              aria-label="공지 닫기"
              onClick={() => setVisible(false)}
              className="shrink-0 px-2 py-1 text-lg text-amber-100/55 transition hover:text-amber-100"
            >
              ×
            </button>
          </div>
        </section>
      )}

      <section className="border-b border-white/[0.09] bg-[#090b0a]/95">
        <div className="mx-auto w-full max-w-7xl px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span>🔥</span>

            <p className="font-serif text-sm tracking-[0.12em] text-zinc-300">
              헌터 뉴스
            </p>
          </div>

          <div className="mt-3 space-y-2">
            {hunterNews.map((news, index) => (
              <div
                key={`${news.category}-${index}`}
                className="flex flex-col gap-2 border-t border-white/[0.06] pt-3 sm:flex-row sm:items-center"
              >
                <span
                  className={`w-fit border px-2 py-1 text-[9px] tracking-[0.14em] ${
                    categoryStyle[news.category]
                  }`}
                >
                  {news.category}
                </span>

                <p className="break-keep text-xs leading-6 text-zinc-300 sm:text-sm">
                  {news.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TopNotice;