"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const illustrationSrc = "/login-illustration.png";
const logoSrc = "/login-logo.png";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white lg:flex-row">
      <div className="relative hidden flex-1 overflow-hidden lg:block">
        <Image
          src={illustrationSrc}
          alt="Illustration of city buildings"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-6 left-6 max-w-lg bg-white p-6 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-bold text-black">GenHR. Simplify the process</h2>
          <p className="mt-2 text-base text-black/80">
            2018 Innovis Cipta Teknologi
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 lg:w-[500px] lg:px-8 lg:py-8 xl:px-10">
        <header className="flex items-center gap-3 sm:gap-4">
          <div className="relative h-12 w-12 sm:h-16 sm:w-16">
            <Image
              src={logoSrc}
              alt="GenHR logo"
              fill
              sizes="(max-width: 640px) 48px, 64px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-xl font-bold text-black sm:text-2xl">GenHR</span>
        </header>

        <main className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-8">
          <div>
            <h1 className="text-base font-medium text-black sm:text-lg sm:font-normal">
              Sign into your pages account
            </h1>
          </div>

          <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black sm:text-base sm:font-normal" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="e.g. steve.jobs"
                className="w-full rounded-md border border-black/10 bg-[#f7f7f7] px-4 py-3.5 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60 sm:py-4"
                autoComplete="username"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-black sm:text-base sm:font-normal" htmlFor="password">
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-black/10 bg-[#f7f7f7] px-4 py-3.5 pr-12 text-sm text-black placeholder:text-black/50 focus:border-[#43918B] focus:outline-none focus:ring-2 focus:ring-[#43918B]/60 sm:py-4"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-black/50 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#43918B]/60 sm:right-4"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
              <div className="flex flex-col gap-2 text-xs text-black sm:flex-row sm:items-center sm:justify-between sm:text-sm">
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    name="remember"
                    className="size-3.5 accent-[#43918B] sm:size-4"
                  />
                  Remember me
                </label>
                <Link href="#" className="text-[#43918B] hover:underline sm:text-sm">
                  Forget Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md border border-black/10 bg-[#43918B] px-4 py-3.5 text-sm font-semibold text-white transition active:bg-[#4aa098] sm:py-4 sm:text-base hover:bg-[#4aa098]"
            >
              Login
            </button>
          </form>
        </main>

        <footer className="mt-8 flex flex-col gap-1.5 text-black sm:mt-10 sm:gap-2">
          <span className="text-2xl font-bold sm:text-3xl">GenHR</span>
          <p className="text-xs leading-relaxed text-black sm:text-base">
            Please Contact your HR Departement for User Credentials
          </p>
        </footer>
      </div>
    </div>
  );
}

