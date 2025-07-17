"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-br from-indigo-100 to-blue-50 text-gray-800">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-1 text-center px-4 py-16">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="ConvX Logo"
          width={100}
          height={100}
          className="mb-4 rounded-full shadow-md"
        />

        {/* App Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-2">ConvX</h1>

        {/* Slogan */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-xl italic">
          Convert Anything, Anytime.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Button onClick={() => router.push("/currency")}>💱 Currency Exchange</Button>
          <Button onClick={() => router.push("/converter")}>🔁 Unit Converter</Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-md py-6 px-4 flex flex-col items-center">
        <div className="flex space-x-6 mb-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-gray-900 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-600 transition" />
          </a>
          <a href="https://google.com" target="_blank" rel="noopener noreferrer">
            <FaGlobe className="text-2xl hover:text-green-600 transition" />
          </a>
        </div>
        <p className="text-sm text-gray-500">© 2025 ConvX. All rights reserved.</p>
      </footer>
    </div>
  );
}
