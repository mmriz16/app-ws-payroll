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
        <div className="absolute bottom-6 left-6 max-w-lg rounded-md bg-white p-6 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-bold text-black">GenHR. Simplify the process</h2>
          <p className="mt-2 text-base text-black/80">
            2018 Innovis Cipta Teknologi
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between px-6 py-8 sm:px-10 lg:w-[500px] lg:px-8 lg:py-8 xl:px-10">
        <header className="flex items-center gap-4">
          <div className="relative h-16 w-16">
            <Image
              src={logoSrc}
              alt="GenHR logo"
              fill
              sizes="64px"
              className="object-contain"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-black">GenHR</span>
        </header>

        <main className="mt-12 flex flex-col gap-8">
          <div>
            <h1 className="text-lg text-black">Sign into your pages account</h1>
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-base text-black" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                placeholder="e.g. steve.jobs"
                className="w-full rounded-md border border-black/10 bg-[#f7f7f7] px-4 py-4 text-sm text-black placeholder:text-black/50 focus:border-[#55aea8] focus:outline-none focus:ring-2 focus:ring-[#55aea8]/60"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-base text-black" htmlFor="password">
                Password
              </label>
              <div className="relative w-full">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-black/10 bg-[#f7f7f7] px-4 py-4 pr-12 text-sm text-black placeholder:text-black/50 focus:border-[#55aea8] focus:outline-none focus:ring-2 focus:ring-[#55aea8]/60"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 transition hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#55aea8]/60"
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
              <div className="flex items-center justify-between text-sm text-black">
                <label className="flex items-center gap-2 text-black">
                  <input
                    type="checkbox"
                    name="remember"
                    className="size-4 accent-[#55aea8]"
                  />
                  Remember me
                </label>
                <Link href="#" className="text-sm text-[#55aea8] hover:underline">
                  Forget Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md border border-black/10 bg-[#55aea8] px-4 py-4 text-base font-semibold text-white transition hover:bg-[#4aa098]"
            >
              Login
            </button>
          </form>
        </main>

        <footer className="mt-10 flex flex-col gap-2 text-black">
          <span className="text-3xl font-bold">GenHR</span>
          <p className="text-base text-black">
            Please Contact your HR Departement for User Credentials
          </p>
        </footer>
      </div>
    </div>
  );
}

