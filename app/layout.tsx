import type { Metadata } from "next";
import type { NextFont } from "next/dist/compiled/@next/font";
import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSemiCondensed: NextFont = Barlow_Semi_Condensed({
  weight: ["500", "600"],
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Testimonials Grid Section",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowSemiCondensed.className}`}>{children}</body>
    </html>
  );
}
