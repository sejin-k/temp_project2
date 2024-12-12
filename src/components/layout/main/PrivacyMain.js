"use client";
import PrivacyPrimary from "@/components/sections/privacy/PrivacyPrimary";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
// import HeroInner from "@/components/hero/HeroInner";

const PrivacyMain = () => {
  return (
    <>
      <main>
        {/* <HeroInner title={"이용약관"} currentItem={"이용약관"} /> */}
        <div style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <PrivacyPrimary />
        </div>
      </main>
    </>
  );
};

export default PrivacyMain;
