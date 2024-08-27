import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/common/header/Header";

export const metadata = {
  title: "Clip",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="relative mx-auto h-screen max-w-[420px] bg-backgroundColor">
        <Header />
        {children}
      </body>
    </html>
  );
}
