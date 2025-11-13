import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | WS Payroll",
  description: "Ringkasan absensi, cuti, reimbursement, dan kalender tim untuk pegawai.",
  keywords: ["dashboard", "absensi", "cuti", "reimbursement", "payroll", "self service", "pegawai"],
  robots: { index: true, follow: true },
  alternates: { canonical: "/dashboard" },
  openGraph: {
    title: "Dashboard | WS Payroll",
    description: "Pantau absensi, cuti, reimbursement, dan kalender tim dalam satu tempat.",
    url: "/dashboard",
    siteName: "WS Payroll",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dashboard | WS Payroll",
    description: "Ringkasan absensi, cuti, reimbursement, dan kalender tim.",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

