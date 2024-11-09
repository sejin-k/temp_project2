"use client";
import { useState } from "react";
import About from "@/components/sections/about/About";
import Contact1 from "@/components/sections/contacts/Contact1";
import OfferedServices from "@/components/sections/services/OfferedServices";
import Team from "@/components/sections/team/Team";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import KeywordDiscovery from "@/components/sections/keyword/KeywordDiscovery";
import KeywordGuide from "@/components/sections/keyword/KeywordGuide";
import ProductRecommend from "@/components/sections/recommend/ProductRecommend";
import About3 from "@/components/sections/about/About3";

const GuideMain = () => {
  const { isOnepage } = useHeaderContex();

  return (
    <main>
      <KeywordDiscovery />
      <KeywordGuide />
      <ProductRecommend />
      {/* <OfferedServices /> */}
      <About />
      <About3 />
      {/* <Team /> */}
      {/* <PinkColor /> */}
      {isOnepage ? <Contact1 /> : ""}
    </main>
  );
};

export default GuideMain;
