import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import About from "./components/About";

const rnssanz = localFont({ src: "../../public/font/RNSSanz-Normal.otf" });

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Célian Lebacle",
  description: "Portfolio Célian Lebacle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="px-6 py-10">
        <Header />
        <main>{children}</main>
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
