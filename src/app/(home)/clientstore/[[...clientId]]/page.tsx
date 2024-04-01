import BannerStore from "@/components/clientsStore/bannerStore";
import MainSection from "@/components/clientsStore/mainSection";
import StoreInfo from "@/components/clientsStore/storeInfo";
import React from "react";

export default function Loja({ params }: { params: any }) {
  return (<main className="container mx-auto px-4 xl:px-0">
    <BannerStore/>
    <StoreInfo/>
    <MainSection/>
  </main>)
}
