"use client";
import { useState } from "react";
import About from "@/components/sections/about/About";
import Blogs from "@/components/sections/blogs/Blogs";
import Brands from "@/components/sections/brands/Brands";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero1 from "@/components/sections/hero-banners/Hero1";
import Projects from "@/components/sections/projects/Projects";
import OfferedServices from "@/components/sections/services/OfferedServices";
import Team from "@/components/sections/team/Team";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Video from "@/components/sections/videos/Video";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import OpenMarketBest from "@/components/sections/openmarket/OpenMarketBest";
import GuideKeyword from "@/components/sections/guide/GuideKeyword";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Hero3 from "@/components/sections/hero-banners/Hero3";
import Hero4 from "@/components/sections/hero-banners/Hero4";

const IndexMain = () => {
  const { isOnepage } = useHeaderContex();

  return (
    <main>
      {/* <Hero1 /> */}
      {/* <Hero2 /> */}
      {/* <Hero3 /> */}
      <Hero4 />

      {/* <GuideKeyword /> */}
      <OpenMarketBest />
      <OfferedServices />
      <Video />
      <About />
      <Team />
      <PinkColor />
      <Projects />
      <Testimonials />
      {isOnepage ? <Contact1 /> : ""}
      <Brands />
      <Blogs />
    </main>
  );
};

export default IndexMain;
