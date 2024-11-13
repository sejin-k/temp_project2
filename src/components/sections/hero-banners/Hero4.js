"use client";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";

const Hero4 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="hero4">
      <div className="container">
        <div
          className="row justify-content-center"
          style={{ paddingTop: "50px", paddingBottom: "0px" }}
        >
          <div className="col-lg-8 text-center">
            <div className="hero4__content">
              <h1
                className="hero4__title"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ fontSize: "2.5rem" }}
              >
                어려운 상품소싱, 더이상 헤멜 필요 없이
                <br />
                <span className="text__gradient">
                  셀파트너 하나로 끝내보세요!
                </span>
              </h1>
              <p
                className="hero4__description"
                data-aos="fade-up"
                data-aos-delay="200"
                style={{ marginTop: "15px", marginBottom: "20px" }}
              >
                키워드 발굴부터 상품 추천까지, 상품 소싱에 필요한 모든 것을
                제공합니다.
              </p>
              <div
                className="hero4__buttons"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {/* <Link href="/keyword-discovery" className="btn btn-primary">
                  시작하기
                </Link>
                <Link href="/keyword-discovery" className="btn btn-primary">
                  시작하기
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
