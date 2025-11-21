import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/ui/navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entertainment App",
  description: "Entertainment app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <div className="bg-blue-950 text-white flex flex-col md:flex-row min-h-screen font-[family-name:var(--font-outfit)]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
