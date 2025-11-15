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
  // Link PWA web manifest so browsers can install the app
  manifest: "/manifest.json",
  // Define theme color for the browser UI and taskbar
  themeColor: "#0f172a",
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
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "WS Payroll Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "WS Payroll",
    description: "Ringkasan dan pengelolaan HR self-service.",
    images: ["/logo.png"],
  },
  icons: {
    // Favicon and Apple touch icon
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  // Make the app draw behind system UI for better PWA fullscreen feel
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* PWA: body remains unchanged; service worker registration is auto-injected by next-pwa */}
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
