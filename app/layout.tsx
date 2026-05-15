import React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Geist, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Macenza",
  description: "At Macenza, we’re driven by ideas that make a difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "antialiased",
        playfair.variable,
        inter.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="font-playfair">
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
