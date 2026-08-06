"use client";

import { useEffect, useState } from "react";

type TocItem = {
  id: string;
  label: string;
};

type DocumentTocProps = {
  title?: string;
  items: TocItem[];
};

export default function DocumentToc({
  title = "목차",
  items,
}: DocumentTocProps) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    function updateActive() {
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = section.id;
        }
      }

      setActive(current);
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActive);
    };
  }, [items]);

  function handleClick(id: string) {
    const section = document.getElementById(id);

    if (!section) {
      return;
    }

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <aside className="sticky top-24 block w-64 shrink-0 self-start">
      <div className="overflow-hidden border border-[#b2914f]/25 bg-[#0b0c0d]/95 shadow-[0_18px_60px_rgba(0,0,0,0.34)] backdrop-blur">
        <div className="border-b border-[#b2914f]/20 px-5 py-4">
          <p className="text-[10px] tracking-[0.24em] text-[#d3b56d]">
            DOCUMENT
          </p>

          <h3 className="mt-2 font-serif text-xl text-[#fff7ea]">
            {title}
          </h3>
        </div>

        <nav className="py-2">
          {items.map((item, index) => {
            const isActive = active === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={`flex w-full items-center gap-3 border-l-2 px-5 py-3 text-left transition duration-300 ${
                  isActive
                    ? "border-[#d5b86f] bg-[#b2914f]/10 text-[#f3d489]"
                    : "border-transparent text-zinc-400 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
                }`}
              >
                <span className="font-serif text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-sm">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}