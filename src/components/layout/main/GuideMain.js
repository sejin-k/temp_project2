"use client";
import Contact1 from "@/components/sections/contacts/Contact1";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import heroStartupImage from "@/assets/img/herobaner/herobanner__startup.jpg";
import GuideDiscovery from "@/components/sections/guide/GuideDiscovery";
import Brands5 from "@/components/sections/brands/Brands5";
import Hero12 from "@/components/sections/hero-banners/Hero12";
import heroIntConsultingImage from "@/assets/img/herobaner/international__consulting.png";

const GuideMain = () => {
  const isDarkMode = false;

  return (
    <div className="main-wrapper">
      {/* <Hero2
        title={
          <>
            가이드 <span className="text__gradient">안내</span>
          </>
        }
        img={heroStartupImage}
      /> */}
      {/* <Brands5 type={2} /> */}

      <div className="border__line"></div>

      <Hero12
        bgImg={heroIntConsultingImage}
        title={
          <>
            셀파트너 최대한으로 이용하기 <br />
            <span className="text__gradient">Business</span> &amp;{" "}
            <span className="text__gradient">Consulting</span>.
          </>
        }
        desc={"셀파트너를 통해 최대의 효율을 받아봅시다."}
        isNotTag={true}
      />
      <GuideDiscovery />
    </div>
  );
};

export default GuideMain;
