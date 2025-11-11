"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, LogOut, Search, CircleHelp, Menu } from "lucide-react";

type TopBarProps = {
  onMenuToggle?: () => void;
};

export default function TopBar({ onMenuToggle }: TopBarProps) {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openMenu]);

  // Close search on mobile when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSearchOpen]);

  return (
    <header className="sticky top-0 z-30 flex h-16 md:h-[74px] w-full items-center justify-between gap-2 md:gap-4 lg:gap-8 border-b border-black/10 bg-white px-2 md:px-4 lg:px-6 py-2 md:py-4">
      <div className="flex items-center gap-2 md:gap-3 lg:gap-8 flex-1 min-w-0">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMenuToggle}
          className="lg:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-black/15 text-black/60 transition hover:border-black/30 hover:bg-black/5 active:bg-black/10"
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Search - Desktop: always visible, Mobile: toggleable */}
        <div className="hidden md:flex flex-1 max-w-md">
          <label className="flex w-full items-center gap-2 md:gap-3 rounded-lg px-3 md:px-4 text-xs md:text-sm text-black/60 border border-black/10 bg-[#f7f7f7]">
            <Search className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
            <input
              type="text"
              placeholder="Type anywhere to Search..."
              className="w-full bg-transparent text-xs md:text-sm text-black/80 placeholder:text-black/50 focus:outline-none py-2"
            />
          </label>
        </div>

        {/* Mobile search - icon button */}
        <button
          type="button"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
          className="md:hidden inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-black/15 text-black/60 transition hover:border-black/30 hover:bg-black/5 active:bg-black/10"
          aria-label="Toggle search"
        >
          <Search className="h-5 w-5" />
        </button>

        {/* Mobile search expanded */}
        {isSearchOpen && (
          <div
            ref={searchRef}
            className="md:hidden absolute left-0 top-full w-full bg-white border-b border-black/10 px-2 py-3 z-40"
          >
            <label className="flex w-full items-center gap-2 rounded-lg px-3 text-sm text-black/60 border border-black/10 bg-[#f7f7f7]">
              <Search className="h-4 w-4 shrink-0" />
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="w-full bg-transparent text-sm text-black/80 placeholder:text-black/50 focus:outline-none py-2"
              />
            </label>
          </div>
        )}
      </div>

      <div className="relative flex items-center gap-1.5 md:gap-2 lg:gap-3 shrink-0" ref={menuRef}>
        {/* User info - responsive display */}
        <div className="flex flex-col items-end">
          <span className="hidden lg:inline text-xs md:text-sm font-medium text-black">
            Miftakhul Rizky [Dept. Teknisi] - Pegawai
          </span>
          <span className="hidden md:inline lg:hidden text-xs font-medium text-black">
            Miftakhul Rizky [Dept. Teknisi] - Pegawai
          </span>
          <span className="md:hidden text-[12px] font-medium text-black leading-tight">
            Miftakhul Rizky [Dept. Teknisi] - Pegawai
          </span>
        </div>

        <button
          type="button"
          onClick={() => setOpenMenu((prev) => !prev)}
          className="inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-lg border border-black/15 text-black/60 transition hover:border-black/30 hover:bg-black/5 active:bg-black/10 shrink-0"
          aria-haspopup="menu"
          aria-expanded={openMenu}
        >
          <ChevronDown className={`h-3.5 w-3.5 md:h-4 md:w-4 transition-transform ${openMenu ? "rotate-180" : ""}`} />
        </button>

        {openMenu ? (
          <div className="absolute right-0 top-[calc(100%+0.5rem)] min-w-[180px] md:min-w-[200px] rounded-lg border border-black/10 bg-white py-2 shadow-lg z-50">
            <Link
              href="/help"
              className="flex items-center gap-3 px-3 md:px-4 py-2 text-xs md:text-sm text-black/70 transition hover:bg-black/5 active:bg-black/10"
              onClick={() => setOpenMenu(false)}
            >
              <CircleHelp className="h-3.5 w-3.5 md:h-4 md:w-4" />
              Help Center
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpenMenu(false);
                router.push("/login");
              }}
              className="flex w-full items-center gap-3 px-3 md:px-4 py-2 text-left text-xs md:text-sm text-black/70 transition hover:bg-black/5 active:bg-black/10"
            >
              <LogOut className="h-3.5 w-3.5 md:h-4 md:w-4" />
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}

