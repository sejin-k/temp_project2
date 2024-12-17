import Image from "next/image";
import aboutHrImage from "@/assets/img/about/about__hr.png";
import aboutEventImage from "@/assets/img/about/event__about.png";
import ctaFreeImage from "@/assets/img/freepik/free__1.png";
import worryImage from "@/assets/img/freepik/worry__1.png";
import Link from "next/link";

const Offer2 = ({ type, isVideo, img, title, tag, id, pt }) => {
  return (
    <div
      className={`about ext-about position-relative sp_bottom_140 sp_top_140 padding-top: 140px;" 
        `}
      id={id ? id : "tb_about"}
    >
      <div className="container ">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={
                  isVideo && !img ? worryImage : img ? img : worryImage
                  // isVideo && !img ? aboutHrImage : img ? img : aboutHrImage
                }
                placeholder="blur"
                alt="about__hr"
              />
              {isVideo ? (
                <div className="video__button">
                  <Link
                    className="video__card--link glightbox"
                    data-gallery="video_popup"
                    href="https://www.youtube.com/watch?v=gLb2Gbo_bbs"
                  >
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7.5L0.250002 14.8612L0.250003 0.138783L13 7.5Z"
                        fill="#F8422E"
                      ></path>
                    </svg>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div
                className={`section__title section__title--2  sp_bottom_20 ${
                  type === 2 ? "section__title--3" : ""
                }`}
              >
                <div className="section__title__small">
                  <span>Probluems</span>
                </div>
                {/* <div className="section__title__button">
                  <span className="text__gradient">
                    {tag ? tag : "How we help"}
                  </span>
                </div> */}
                <div className="section__title__heading">
                  <h3>
                    {title
                      ? title
                      : type === 2
                      ? "아직도 잘 팔리는 상품을 찾기위해 돌아다니고 계시나요?"
                      : "셀파트너(SellPartner)는 온라인 판매자를 위한 이커머스 데이터 플랫폼입니다."}
                  </h3>
                </div>
              </div>
              <p style={{ marginBottom: "0px" }}>
                현재 많은 판매자 분들은 감과 경험에 의존하여 상품을 선택하시고
                계십니다.
              </p>
              <p>혹시 아래 유형에 해당하지 않으시나요?</p>
              <div className="about__list">
                <ul>
                  <li>
                    <i className="icofont-check"></i>상품 선택을 감에만 의존하고
                    계신 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>온라인 판매를 시작하신 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>어떤 상품을 판매해야 할지
                    고민이신 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>매출 100만 원을 넘기지
                    못하고 계신 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>매출 성장을 위해 상품을
                    찾고 계신 분들
                  </li>

                  <li>
                    <i className="icofont-check"></i>수익성 높은 상품을 알고
                    싶으신 분들
                  </li>
                </ul>
              </div>
              <div className="about__vision__wrapper">
                <div className="about__button">
                  <Link
                    className={`default__button  ${
                      type === 2 ? "" : "btn__black"
                    }`}
                    href="#service__area"
                    scroll={true}
                  >
                    더 알아보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer2;
