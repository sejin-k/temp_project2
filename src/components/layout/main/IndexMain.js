"use client";
import { useState } from "react";
import About from "@/components/sections/about/About";
import About4 from "@/components/sections/about/About4";
// import Services1 from "@/components/sections/services/Services1";
import Services2 from "@/components/sections/services/Services2";
import Services3 from "@/components/sections/services/Services3";
import Services4 from "@/components/sections/services/Services4";

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
// import Hero1 from "@/components/sections/hero-banners/Hero1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Hero3 from "@/components/sections/hero-banners/Hero3";
import Hero4 from "@/components/sections/hero-banners/Hero4";
import Hero5 from "@/components/sections/hero-banners/Hero5";
import Hero6 from "@/components/sections/hero-banners/Hero6";
import Hero7 from "@/components/sections/hero-banners/Hero7";
// import Hero4 from "@/components/sections/hero-banners/Hero4";
// import Hero4 from "@/components/sections/hero-banners/Hero4";

import CallToAction from "@/components/sections/CallToActions/CallToAction";
import WorkProcess from "@/components/sections/work-process/WorkProcess";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";
import Offer2 from "@/components/sections/offers/Offer2";
import Offer4 from "@/components/sections/offers/Offer4";
import EmptySpace from "@/components/shared/others/emptySpace";
import Services5 from "@/components/sections/services/Services5";

const IndexMain = () => {
  const { isOnepage } = useHeaderContex();
  const isDarkMode = false;

  return (
    <main>
      {/* <Hero5 /> */}
      {/* <Hero5 /> */}
      {/* <Hero6 /> */}
      <Hero7 />
      {/* <Hero1 /> */}
      {/* <Hero4 /> */}
      {/* <OpenMarketBest /> */}
      <Offer2 type={2} />
      <Hero4 />

      {/* <About4 /> */}
      <Services4 />
      {/* <Services2 /> */}
      {/* <Services3 />
      <Services4 />
      <Services5 /> */}
      <WorkProcess />
      {/* <CounterUp2 /> */}
      <Offer4 type={2} />

      <CallToAction />
      <EmptySpace />
      {/* <PinkColor /> */}
      {/* <Testimonials /> */}
      {/* {isOnepage ? <Contact1 /> : ""} */}
      {/* <Brands />
      <Blogs /> */}
    </main>
  );
};

export default IndexMain;
