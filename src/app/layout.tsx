import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/components/Header";
import ScrollButton from "@/components/ScrollButton";

const rnssanz = localFont({ src: "../../public/font/RNSSanz-Normal.otf" });
const monumentextended = localFont({
  src: "../../public/font/MonumentExtended-Ultrabold.otf",
});

const montserrat = Montserrat({
  subsets: ["latin-ext"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Célian Lebacle",
  description: "Welcome to my portfolio! Above you can find my education, skills, projects and all the links to contact me",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body
        className={`${montserrat.variable} ${rnssanz.style} ${monumentextended.style} `}
      >        
        <main className="dark px-6 py-10 md:px-24 2xl:container">          
          {children}
          <ScrollButton />
        </main>
      </body>
    </html>
  );
}
