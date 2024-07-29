import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
