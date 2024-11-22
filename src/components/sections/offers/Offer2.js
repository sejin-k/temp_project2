import Image from "next/image";
import aboutHrImage from "@/assets/img/about/about__hr.png";
import aboutEventImage from "@/assets/img/about/event__about.png";
import ctaFreeImage from "@/assets/img/freepik/free__1.png";
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
                  isVideo && !img ? ctaFreeImage : img ? img : ctaFreeImage
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
                <div class="section__title__small"><span>OUR ABOUT</span></div>
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
                      ? "셀파트너(SellPartner)는 온라인 판매자를 위한 이커머스 데이터 플랫폼입니다."
                      : "셀파트너(SellPartner)는 온라인 판매자를 위한 이커머스 데이터 플랫폼입니다."}
                  </h3>
                </div>
              </div>
              <p className="sp_bottom_10">
              저희는 잘 팔릴 물건을 발굴하고, 판매자 분들의 매출을 최대한으로 이끌 수 있도록 고민하고 연구 합니다.
              </p>
              <div className="about__list">
                <ul>
                  <li>
                    <i className="icofont-check"></i>온라인 판매를 처음 하시는 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>어떤 물건을 판매해야 할지 모르겠는 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>한 달 매출이 200이 넘지 않는 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>위탁판매나 사입판매를 하시는 분들
                  </li>
                  
                  {/* <li>
                    <i className="icofont-check"></i>잘 팔릴 물건을 찾는 분들
                  </li>
                  <li>
                    <i className="icofont-check"></i>온라인 판매자를 전업으로 하시고 싶은 분
                  </li> */}

                </ul>
              </div>
              <div className="about__vision__wrapper">
                <div className="about__button">
                  <Link
                    className={`default__button  ${
                      type === 2 ? "" : "btn__black"
                    }`}
                    href="http://sellpartner.kr"
                  >
                    셀파트너 더 알아보기
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
