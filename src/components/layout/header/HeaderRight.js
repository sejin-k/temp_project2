"use client";
import Link from "next/link";
import Image from "next/image";
import { useHeaderContex } from "@/providers/HeaderContex";
import { useAuth } from "@/providers/AuthProvider";
import userIconWhite from "@/assets/img/login/user_white.svg";
import userIconBlack from "@/assets/img/login/user_black.svg";
import UserDropdown from "./UserDropdown";
import { useState, useRef, useEffect } from "react";

const HeaderRight = () => {
  const { style } = useHeaderContex();
  const { isLogin, loading, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center gap-8 h-16">
      <div className="headerarea__component">
        <div className="headerarea__right">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                href="/openmarket-best"
                className="btn btn-outline"
                style={{
                  fontWeight: "700", // Navbar와 동일한 굵기
                  fontSize: "16px", // Navbar와 동일한 크기
                }}
              >
                오픈마켓 베스트
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                href="/keyword-discovery"
                className="btn btn-outline"
                style={{
                  fontWeight: "700", // Navbar와 동일한 굵기
                  fontSize: "16px", // Navbar와 동일한 크기
                }}
              >
                키워드 발굴
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                href="/product-recommend"
                className="btn btn-outline"
                style={{
                  fontWeight: "700", // Navbar와 동일한 굵기
                  fontSize: "16px", // Navbar와 동일한 크기
                }}
              >
                상품추천
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                href="/membership"
                className="btn btn-outline"
                style={{
                  fontWeight: "700", // Navbar와 동일한 굵기
                  fontSize: "16px", // Navbar와 동일한 크기
                }}
              >
                멤버쉽
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                href="/guide"
                className="btn btn-outline"
                style={{
                  fontWeight: "700", // Navbar와 동일한 굵기
                  fontSize: "16px", // Navbar와 동일한 크기
                }}
              >
                가이드
              </Link>
            </li>
            <li className="header__nav-item">
              {loading ? (
                <div className="w-[24px] h-[24px] animate-pulse bg-gray-200 rounded-full" />
              ) : isLogin ? (
                <div className="btn" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="flex items-center focus:outline-none transition-all duration-300"
                    style={{ background: "transparent" }}
                  >
                    <Image
                      src={isHovered ? userIconBlack : userIconWhite}
                      alt="user icon"
                      width={36}
                      height={36}
                      className="transition-all duration-300"
                    />
                  </button>

                  {isDropdownOpen && (
                    <UserDropdown
                      onClose={() => setIsDropdownOpen(false)}
                      onLogout={handleLogout}
                    />
                  )}
                </div>
              ) : (
                <Link href="/login" className="btn btn-primary">
                  로그인/가입
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderRight;
