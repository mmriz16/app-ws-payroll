"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  UserCircle2,
} from "lucide-react";

type SubItem = {
  label: string;
  href: string;
};

type MenuItem = {
  label: string;
  icon: LucideIcon;
  href?: string;
  children?: SubItem[];
  defaultOpen?: boolean;
};

const menuItems: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    label: "Self Service",
    icon: UserCircle2,
    children: [
      { label: "Data Pegawai", href: "/self-service/data-pegawai" },
      { label: "Pengajuan Cuti / Izin", href: "/self-service/pengajuan-cuti" },
      { label: "Approval Cuti / Izin", href: "/self-service/approval-cuti" },
      { label: "Laporan Terlambat / Tidak Absen", href: "/self-service/laporan-terlambat" },
      { label: "Pengajuan Reimbursement", href: "/self-service/pengajuan-reimbursement" },
      { label: "Absen Project", href: "/self-service/absen-project" },
    ],
    defaultOpen: false,
  },
  {
    label: "Project",
    icon: Briefcase,
    children: [{ label: "Acknowledge", href: "/project/acknowledge" }],
    defaultOpen: false,
  },
  {
    label: "Absensi",
    icon: FileText,
    children: [
      { label: "Absensi Pegawai", href: "/absensi/pegawai" },
      { label: "Rekap Realisasi", href: "/absensi/rekap-realisasi" },
    ],
    defaultOpen: false,
  },
  {
    label: "FAQ",
    href: "/faq",
    icon: HelpCircle,
  },
];

function NestedLink({ item }: { item: SubItem }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      className={`relative flex items-center gap-6 rounded-md px-2 py-2 text-sm transition hover:text-white hover:font-bold ${
        isActive ? "text-white" : "text-white/50"
      }`}
    >
      <span className="h-full w-px self-stretch bg-white/50" aria-hidden />
      <span>{item.label}</span>
    </Link>
  );
}

export default function SideMenu() {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const resolveIsOpen = (item: MenuItem) => {
    if (!item.children) {
      return false;
    }

    const stored = openSections[item.label];

    if (stored === undefined) {
      const active = item.children.some((child) => pathname.startsWith(child.href));
      return active || item.defaultOpen === true;
    }

    return stored;
  };

  const toggleSection = (item: MenuItem) => {
    const fallbackOpen = item.children?.some((child) => pathname.startsWith(child.href)) || item.defaultOpen === true;

    setOpenSections((prev) => {
      const current = prev[item.label];
      const nextValue = current === undefined ? !fallbackOpen : !current;
      return { ...prev, [item.label]: nextValue };
    });
  };

  return (
    <aside className="sticky top-0 hidden h-screen w-[320px] flex-col gap-8 overflow-y-auto bg-[#2b303b] px-6 py-6 text-white lg:flex">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10">
          <Image
            src="/login-logo.png"
            alt="GenHR logo"
            fill
            sizes="40px"
            className="object-contain"
            priority
          />
        </div>
        <span className="text-xl font-bold">GenHR</span>
      </div>

      <nav className="flex flex-1 flex-col gap-0">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const hasChildren = Boolean(item.children?.length);
          const isSectionActive = item.children?.some((child) => pathname.startsWith(child.href));
          const isLinkActive = item.href ? pathname === item.href : false;
          const isOpen = hasChildren ? resolveIsOpen(item) : false;

          return (
            <div key={item.label} className="flex flex-col gap-0">
              {hasChildren ? (
                <button
                  type="button"
                  onClick={() => toggleSection(item)}
                  className={`flex items-center justify-between border border-transparent text-[#95979D] px-4 py-4 text-left text-sm font-regular transition ${
                    isSectionActive || isOpen ? "bg-transparent font-bold text-white" : "hover:bg-transparent hover:font-bold hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    {item.label}
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href ?? "#"}
                  className={`flex items-center gap-3 border border-transparent text-[#95979D] px-4 py-4 text-sm font-regular transition ${
                    isLinkActive ? "bg-black/50 font-bold text-white" : "hover:bg-transparent hover:font-bold hover:text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="flex-1">{item.label}</span>
                </Link>
              )}

              {hasChildren && isOpen ? (
                <div className="flex flex-col gap-2 bg-black/50 px-4 py-4">
                  {item.children!.map((child) => (
                    <NestedLink key={child.href} item={child} />
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

