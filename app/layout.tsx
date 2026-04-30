import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BalanceProvider } from "@/context/BalanceContext";
import { AuthProvider } from "@/context/AuthContext";
import FloatingShapes from "@/components/animations/FloatingShapes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GrowPulse — Social Media Growth Platform",
  description:
    "Boost your social media presence with premium likes, followers, and views for Instagram, TikTok, and YouTube.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#fafbfe] text-gray-900">
        <AuthProvider>
          <BalanceProvider>
            <FloatingShapes />
            <Header />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
          </BalanceProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
