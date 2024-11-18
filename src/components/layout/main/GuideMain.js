"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import heroStartupImage from "@/assets/img/herobaner/herobanner__startup.jpg";
import GuideDiscovery from "@/components/sections/guide/GuideDiscovery";
import Brands5 from "@/components/sections/brands/Brands5";

const GuideMain = () => {
  const isDarkMode = false;

  return (
    <div className="main-wrapper">
      <Hero2
        title={
          <>
            가이드 <span className="text__gradient">안내</span>
          </>
        }
        img={heroStartupImage}
      />
      <Brands5 type={2} />
      <GuideDiscovery />
      <div className="border__line"></div>
    </div>
  );
};

export default GuideMain;
