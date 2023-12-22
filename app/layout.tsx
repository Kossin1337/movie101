import { useState } from "react";
import type { Metadata } from "next";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Movie 101",
  description: "React | Next.js 14 | TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="content-wrapper">
          <Hero />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
