"use client";
import TermsPrimary from "@/components/sections/terms/TermsPrimary";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
// import HeroInner from "@/components/hero/HeroInner";

const TermsMain = () => {
  return (
    <>
      <main>
        {/* <HeroInner title={"이용약관"} currentItem={"이용약관"} /> */}
        <div style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <TermsPrimary />
        </div>
      </main>
    </>
  );
};

export default TermsMain;
