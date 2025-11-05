"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, LogOut, Search, CircleHelp } from "lucide-react";

export default function TopBar() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-[74px] w-full items-center justify-between gap-8 border-b border-black/10 bg-white px-6 py-4">
      <label className="flex max-w-md flex-1 items-center gap-3 rounded-lg px-4 text-sm text-black/60">
        <Search className="h-5 w-5" />
        <input
          type="text"
          placeholder="Type anywhere to Search..."
          className="w-full bg-transparent text-sm text-black/80 placeholder:text-black/50 focus:outline-none"
        />
      </label>
      <div className="relative flex items-center gap-3 text-sm font-medium text-black">
        <span>Miftakhul Rizky [Dept. Teknisi] - Pegawai</span>
        <button
          type="button"
          onClick={() => setOpenMenu((prev) => !prev)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-black/15 text-black/60 transition hover:border-black/30"
          aria-haspopup="menu"
          aria-expanded={openMenu}
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${openMenu ? "rotate-180" : ""}`} />
        </button>

        {openMenu ? (
          <div className="absolute right-0 top-[calc(100%+0.5rem)] min-w-[200px] rounded-lg border border-black/10 bg-white py-2 shadow-lg">
            <Link
              href="/help"
              className="flex items-center gap-3 px-4 py-2 text-sm text-black/70 transition hover:bg-black/5"
              onClick={() => setOpenMenu(false)}
            >
              <CircleHelp className="h-4 w-4" />
              Help Center
            </Link>
            <button
              type="button"
              onClick={() => {
                setOpenMenu(false);
                router.push("/login");
              }}
              className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm text-black/70 transition hover:bg-black/5"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
}

