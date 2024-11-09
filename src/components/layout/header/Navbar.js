"use client";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { style } = useHeaderContex();

  return (
    <div className="headerarea__component headerarea__nav-left">
      <div className="main__menu d-flex align-items-center">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link href="/keyword" className="btn btn-outline">
                키워드 발굴
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/recommend" className="btn btn-outline">
                상품 추천
              </Link>
            </li>
            <li className="header__nav-item">
              <Link href="/guide" className="btn btn-outline">
                가이드
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
