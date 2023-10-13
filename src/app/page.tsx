'use client';

import Hero from "./components/Hero";
import About from "./components/About";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Techno } from "../../typing";

export default function Home() {
  const [techno, setTechno] = useState<Techno[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAllTechno`);
      const data = await response.json();

      setTechno(data.techno);
    };

    fetchData();
  }, []);

  if (!techno) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>
          Célian Lebacle Portfolio
        </title>
        <meta
          name="description"
          content="Discover my porfolio"
        />
      </Head>
      <Hero />
      <About techno={techno} />
    </>
  );
}