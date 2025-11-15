import type { NextConfig } from "next";
// Enable PWA using next-pwa. This wraps the Next.js config and generates a Workbox-based service worker in production builds.
import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache";

// Base Next.js configuration stays intact; PWA is disabled in development to keep normal DX.
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // You can put any of your existing Next.js options here. Keeping minimal to avoid breaking server components or API routes.
};

// Export the config wrapped with PWA for production builds. In dev, PWA is disabled.
export default withPWA({
  dest: "public", // Service worker and related files emitted to public/
  register: true, // Auto-inject SW registration client script
  skipWaiting: true, // Immediately activate updated SW on next load
  disable: process.env.NODE_ENV === "development",
  runtimeCaching, // Sensible defaults: cache static assets and pages for offline support
  buildExcludes: [
    /middleware-manifest\.json$/,
  ],
})(nextConfig);
