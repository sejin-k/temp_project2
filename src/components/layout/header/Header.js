"use client";

import { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import mobileMenu from "@/libs/mobileMenu";
import HeaderLarge from "./HeaderLarge";
import HeaderMobile from "./HeaderMobile";
import { useHeaderContex } from "@/providers/HeaderContex";
import MobileMenu2 from "./MobileMenu2";
import HeaderTop from "./HeaderTop";

const Header = () => {
  const { style, bg, isNotHeaderTop } = useHeaderContex();
  useEffect(() => {
    mobileMenu();
  }, []);
  return (
    <>
      <header className="fixed-header">
        <div
          className={`headerarea fixed-top ${
            bg === "black" ? "bg__black" : ""
          } ${style === 3 ? "" : "headerarea__transparent"} ${
            !style
              ? "headerarea--1 main__header "
              : `headerarea--${style}  headerarea--headerarea__display__none`
          }`}
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            zIndex: 1000,
          }}
        >
          {style === 2 ? <HeaderTop /> : ""}
          <HeaderLarge />
          {style === 4 ? "" : <HeaderMobile />}
        </div>
      </header>
      <div style={{ paddingTop: "80px" }} />
      {style === 4 ? <MobileMenu2 /> : <MobileMenu />}
    </>
  );
};

export default Header;
