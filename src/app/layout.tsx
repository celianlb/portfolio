import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Header from "./components/Header";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import { Social } from "../../typing";
import { sanityClient } from "./sanity";

const rnssanz = localFont({ src: "../../public/font/RNSSanz-Normal.otf" });
const monumentextended = localFont({ src: "../../public/font/MonumentExtended-Ultrabold.otf" });

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const social: Social[] = await sanityClient.fetch(`*[_type == "social"]`);
  return (
    <html lang="fr" >
      <body className={`${montserrat.variable} ${rnssanz.style} ${monumentextended.style} px-6 py-10 md:px-24`}>
        <Header />
        <main>{children}</main>
        <Footer social={social}/>
      </body>
    </html>
  );
}
