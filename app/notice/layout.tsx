import type { ReactNode } from "react";
import TopNotice from "@/app/components/TopNotice";

export default function NoticeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <TopNotice />
      {children}
    </>
  );
}