import type { ReactNode } from "react";
import TopNotice from "../components/TopNotice";
import ArchiveSearch from "../components/ArchiveSearch";

export default function NoticeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <TopNotice />
      <ArchiveSearch />
      {children}
    </>
  );
}