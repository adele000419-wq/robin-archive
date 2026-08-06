"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { archiveDocuments } from "../data/documents";

export default function ArchiveSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return [];
    }

    return archiveDocuments.filter((document) => {
      const searchText = [
        document.title,
        document.code,
        document.description,
        ...document.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchText.includes(keyword);
    });
  }, [query]);

  return (
    <section className="relative z-[60] border-b border-white/[0.08] bg-[#080a09]">
      <div className="mx-auto w-full max-w-7xl px-5 py-3 sm:px-8">
        {!isOpen ? (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex w-full items-center justify-between border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-left transition hover:border-amber-300/30"
          >
            <span className="text-xs tracking-[0.14em] text-zinc-400 sm:text-sm">
              🔍 중앙기록국 문서 검색
            </span>

            <span className="text-[9px] tracking-[0.18em] text-zinc-600">
              SEARCH
            </span>
          </button>
        ) : (
          <div className="relative">
            <div className="flex gap-2">
              <input
                autoFocus
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="문서명이나 키워드를 입력하세요."
                className="min-h-12 min-w-0 flex-1 border border-amber-300/25 bg-black/25 px-4 text-sm text-zinc-100 outline-none placeholder:text-zinc-600"
              />

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="min-h-12 border border-white/[0.1] px-4 text-lg text-zinc-400"
              >
                ×
              </button>
            </div>

            {query.trim() && (
              <div className="absolute inset-x-0 top-[calc(100%+8px)] max-h-[420px] overflow-y-auto border border-white/[0.1] bg-[#0a0c0b] shadow-[0_24px_60px_rgba(0,0,0,0.55)]">
                {results.length > 0 ? (
                  results.map((document) => (
                    <Link
                      key={document.href}
                      href={document.href}
                      onClick={() => {
                        setIsOpen(false);
                        setQuery("");
                      }}
                      className="grid grid-cols-[42px_1fr_auto] gap-4 border-b border-white/[0.07] px-4 py-4 transition hover:bg-amber-300/[0.035]"
                    >
                      <span className="font-serif text-sm text-amber-200/80">
                        {document.number}
                      </span>

                      <span>
                        <span className="block font-serif text-lg text-zinc-100">
                          {document.title}
                        </span>

                        <span className="mt-1 block text-xs leading-6 text-zinc-500">
                          {document.description}
                        </span>
                      </span>

                      <span className="pt-1 text-[9px] text-zinc-600">
                        OPEN →
                      </span>
                    </Link>
                  ))
                ) : (
                  <div className="px-5 py-8 text-center">
                    <p className="font-serif text-lg text-zinc-300">
                      검색 결과가 없습니다.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}