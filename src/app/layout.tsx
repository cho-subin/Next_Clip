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
      <body className="bg-backgroundColor max-w-[420px] mx-auto relative h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
