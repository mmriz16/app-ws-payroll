import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import DocumentTitleWatcher from "./components/document-title-watcher";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WS Payroll",
    template: "%s | WS Payroll",
  },
  description: "Platform HR self-service untuk absensi, cuti, reimbursement, dan payroll.",
  applicationName: "WS Payroll",
  keywords: [
    "ws payroll",
    "hr",
    "self service",
    "absensi",
    "cuti",
    "reimbursement",
    "pegawai",
  ],
  robots: { index: true, follow: true },
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "WS Payroll",
    description: "Pantau dan kelola absensi, cuti, reimbursement, dan payroll dalam satu tempat.",
    url: "http://localhost:3000/",
    siteName: "WS Payroll",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "WS Payroll",
    description: "Ringkasan dan pengelolaan HR self-service.",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <DocumentTitleWatcher />
        {children}
      </body>
    </html>
  );
}
