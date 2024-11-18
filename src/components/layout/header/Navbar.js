"use client";
import Link from "next/link";
import { useHeaderContex } from "@/providers/HeaderContex";

const Navbar = () => {
  const { style } = useHeaderContex();

  return (
    <div
      className="headerarea__nav-left"
      style={{ margin: 0, marginLeft: "-400px" }}
    >
      <div className="main__menu d-flex align-items-center">
        <nav className="header__nav">
          <ul
            className="header__nav-list"
            style={{
              display: "flex",
              gap: "10px",
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}
          >
            <li className="header__nav-item">
              <Link 
                href="/keyword-discovery" 
                className="btn btn-outline"
                style={{
                  fontWeight: "700",  // 글자 굵기 추가
                  fontSize: "16px"    // 글자 크기 설정
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
                  fontWeight: "700",  // 글자 굵기 추가
                  fontSize: "16px"    // 글자 크기 설정
                }}
              >
                상품 추천
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
