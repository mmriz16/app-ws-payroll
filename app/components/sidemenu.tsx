"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  ChevronRight,
  FileText,
  HelpCircle,
  Home,
  UserCircle2,
  X,
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
      { label: "Data Pegawai", href: "/data-pegawai" },
      { label: "Pengajuan Cuti / Izin", href: "/pengajuan-cuti-ijin" },
      { label: "Approval Cuti / Izin", href: "/approval-cuti-ijin" },
      { label: "Laporan Terlambat / Tidak Absen", href: "/laporan-terlambat-tidak-absen" },
      { label: "Pengajuan Reimbursement", href: "/pengajuan-reimbursement" },
      { label: "Absen Project", href: "/absen-project" },
    ],
    defaultOpen: false,
  },
  {
    label: "Project",
    icon: Briefcase,
    children: [{ label: "Acknowledge", href: "/acknowledge" }],
    defaultOpen: false,
  },
  {
    label: "Absensi",
    icon: FileText,
    children: [
      { label: "Absensi Pegawai", href: "/absensi/absensi-pegawai" },
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

function NestedLink({ item, onLinkClick }: { item: SubItem; onLinkClick?: () => void }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onLinkClick}
      className={`relative flex items-center gap-3 md:gap-6 rounded-md px-2 py-2 text-xs md:text-sm transition hover:text-white hover:font-bold ${
        isActive ? "text-white font-bold" : "text-white/50"
      }`}
    >
      <span className="h-full w-px self-stretch bg-white/50" aria-hidden />
      <span>{item.label}</span>
    </Link>
  );
}

type SideMenuProps = {
  isOpen?: boolean;
  onClose?: () => void;
};

export default function SideMenu({ isOpen = false, onClose }: SideMenuProps) {
  const pathname = usePathname();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  // Close mobile menu when route changes
  useEffect(() => {
    if (onClose && isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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

  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-[280px] md:w-[320px] flex-col gap-4 md:gap-8 overflow-y-auto bg-[#2b303b] px-4 md:px-6 py-4 md:py-6 text-white transition-transform duration-300 ease-in-out lg:sticky lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${isOpen ? "flex" : "hidden lg:flex"}`}
      >
        {/* Mobile header with close button */}
        <div className="flex items-center justify-between gap-3 lg:justify-start">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative h-8 w-8 md:h-10 md:w-10">
              <Image
                src="/logo.png"
                alt="GenHR logo"
                fill
                sizes="40px"
                className="object-contain"
                priority
              />
            </div>
            <span className="text-lg md:text-xl font-bold">GenHR</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-md text-white/70 transition hover:bg-white/10 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
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
                    className={`flex items-center justify-between border border-transparent text-[#95979D] px-3 md:px-4 py-3 md:py-4 text-left text-xs md:text-sm font-regular transition ${
                      isSectionActive || isOpen ? "bg-transparent font-bold text-white" : "hover:bg-transparent hover:font-bold hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2 md:gap-3">
                      <Icon className="h-4 w-4 md:h-5 md:w-5" />
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`h-3.5 w-3.5 md:h-4 md:w-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-2 md:gap-3 border border-transparent text-[#95979D] px-3 md:px-4 py-3 md:py-4 text-xs md:text-sm font-regular transition ${
                      isLinkActive ? "bg-black/50 font-bold text-white" : "hover:bg-transparent hover:font-bold hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="flex-1">{item.label}</span>
                  </Link>
                )}

                {hasChildren && isOpen ? (
                  <div className="flex flex-col gap-1 md:gap-2 bg-black/50 px-3 md:px-4 py-2 md:py-4">
                    {item.children!.map((child) => (
                      <NestedLink key={child.href} item={child} onLinkClick={handleLinkClick} />
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

