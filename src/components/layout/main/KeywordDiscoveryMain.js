"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import heroStartupImage from "@/assets/img/herobaner/herobanner__startup.jpg";
import KeywordDiscovery from "@/components/sections/keyword-discovery/KeywordDiscovery";
import Brands5 from "@/components/sections/brands/Brands5";

const KeywordDiscoveryMain = () => {
  const isDarkMode = false;

  return (
    <main>
      <KeywordDiscovery isDarkMode={isDarkMode} />
      <div className="border__line"></div>
    </main>
  );
};

export default KeywordDiscoveryMain;
