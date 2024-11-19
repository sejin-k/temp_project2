import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import aboutImage3 from "@/assets/img/about/about__3.png";
const About4 = () => {
  return (
    <div
      className="about position-relative sp_bottom_140 sp_top_140"
      id="about__mission__area"
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className="about__img__wrapper about__img__wrapper--3"
              data-tilt
            >
              <Image className="about__img__1" src={aboutImage3} alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="about__inner">
              <div className="section__title section__title--2 ">
                <div className="section__title__small">
                  <span>OUR ABOUT</span>
                </div>
                <div className="section__title__heading">
                  <h3>셀파트너(SellPartner)는 위탁판매, 구매대행, 사입 등의 온라인 판매자를 위한 이커머스 데이터 플랫폼입니다.</h3>
                </div>
              </div>
              <div className="about__text__2">
                <p>
                저희는 잘 팔릴 물건을 발굴하고, 판매자 분들의 매출을 
                최대한으로 이끌 수 있도록 고민하고 연구 합니다.
                </p>
              </div>

              {/* <div className="about__mission__vission special__spacing">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="about__mission__vission__wrapper">
                      <span>Our Mission:</span>
                      <p>
                        Lorem ipsum dolor amet consectetur adipiscing elit sed
                        do eiusmod.
                      </p>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="about__mission__vission__wrapper">
                      <span>Our Mission:</span>
                      <p>
                        Lorem ipsum dolor amet consectetur adipiscing elit sed
                        do eiusmod.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="about__button">
                <ButtonPrimary text="셀파트너 더 알아보기" path="http://sellpartner.kr" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
