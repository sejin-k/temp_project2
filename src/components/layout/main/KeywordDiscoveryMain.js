"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import heroStartupImage from "@/assets/img/herobaner/herobanner__startup.jpg";
import KeywordDiscovery from "@/components/sections/keyword-discovery/KeywordDiscovery";
import Brands5 from "@/components/sections/brands/Brands5";

const KeywordDiscoveryMain = () => {
  return (
    <main>
      <Hero2
        title={
          <>
            키워드 <span className="text__gradient">발굴</span>
          </>
        }
        img={heroStartupImage}
      />
      <Brands5 type={2} />
      <KeywordDiscovery />
      <div className="border__line"></div>
    </main>
  );
};

export default KeywordDiscoveryMain;
