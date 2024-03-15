"use client";
import BannerHome from "@/components/home/bannerHome";
import SectionProducts from "@/components/home/sectionProducts";
import { useState } from "react";

export default function Home() {
  const nome = "mais uma vez";
  const [color, setColor] = useState(false);

  const switchColor = () => {
    setColor(!color);
  };

  return (
    <>
      <main className="container mx-auto px-4">
        <BannerHome nome={nome} colors={switchColor} valid={color} />
        <SectionProducts />
        <SectionProducts />
      </main>
    </>
  );
}
