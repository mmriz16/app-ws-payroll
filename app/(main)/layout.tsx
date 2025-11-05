import type { ReactNode } from "react";
import SideMenu from "../components/sidemenu";
import TopBar from "../components/topbar";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen items-start bg-[#1c2029] text-white">
      <SideMenu />
      <div className="flex h-screen flex-1 flex-col overflow-y-auto bg-[#f7f7f7] text-black">
        <TopBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

