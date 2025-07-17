// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Convert Anything Instantly",
  description: "Fast and accurate unit and currency conversions",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">ConvertApp</h1>
          <div className="space-x-4">
            <Link href="/converter" className="text-blue-600 hover:underline">Unit Converter</Link>
            <Link href="/currency" className="text-green-600 hover:underline">Currency Exchange</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
