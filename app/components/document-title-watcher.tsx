"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TITLE_OVERRIDES: Record<string, string> = {
  "/": "Login",
  "/login": "Login",
  "/dashboard": "Dashboard",
  "/faq": "FAQ",
};

function toTitleCase(value: string) {
  return value
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function resolveTitle(pathname: string) {
  const normalized = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;

  if (TITLE_OVERRIDES[normalized]) {
    return TITLE_OVERRIDES[normalized];
  }

  const segments = normalized.split("/").filter(Boolean);

  if (segments.length === 0) {
    return "GenHR";
  }

  const lastSegment = segments[segments.length - 1];
  return toTitleCase(lastSegment);
}

export default function DocumentTitleWatcher() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) {
      return;
    }

    const pageTitle = resolveTitle(pathname);
    document.title = pageTitle === "GenHR" ? "GenHR" : `GenHR - ${pageTitle}`;
  }, [pathname]);

  return null;
}

