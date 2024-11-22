import WPArorowButton from "@/components/shared/buttons/WPArorowButton";
import WorkProcessCard from "@/components/shared/cards/WorkProcessCard";
import serviceBgImage3 from "@/assets/img/service/service__bg__3.png";
import serviceBgImage4 from "@/assets/img/service/service__bg__4.png";
import serviceBgImage5 from "@/assets/img/service/service__bg__5.png";
import brandImage1 from "@/assets/img/brand/brand_1.png";
import brandImage2 from "@/assets/img/brand/brand_2.png";
import brandImage3 from "@/assets/img/brand/brand_3.png";
import wpBgImage from "@/assets/img/process/process__bg__1.png";
import CounterUp2 from "@/components/sections/counter-up/CounterUp2";

import React from "react";
import { Exo_2 } from "next/font/google";

const WorkProcess = ({ type }) => {
  const arrows = [
    {
      path: "/service",
      duration: 1800,
    },
    {
      path: "/projects",
      duration: 2400,
    },
    {
      path: "/",
      duration: 3000,
    },
  ];
  const items = [
    {
      id: 1,
      title: "키워드 수집",
      desc: "현재 시장에서 수요가 높은 키워드의 정보를 수집합니다.",
      duration: 1500,
      path: "/",
      img: <img src={brandImage3.src} alt="브랜드 이미지 3" />,
    },
    {
      id: 2,
      title: "오픈마켓 상품 데이터 수집",
      desc: "수요가 높은 키워드를 바탕으로 키워드에 해당 하는 상품 데이터를 수집합니다.",
      duration: 2100,
      path: "/",
      img: <img src={brandImage1.src} alt="브랜드 이미지 1" />,
    },
    {
      id: 3,
      title: "AI를 통한 상품 데이터 분석",
      desc: "데이터 가공 및 정제 후 셀파트너만의 AI 모델을 통해 상품을 분석합니다.",
      duration: 2700,
      path: "/",
      img: <img src={brandImage2.src} alt="브랜드 이미지 2" />,
    },
    {
      id: 4,
      title: "팔릴 확률이 높은 상품 추천",
      desc: "셀파트너 AI 모델을 통해 팔릴 확률이 높은 상품을 엄선하여 추천합니다.",
      duration: 3500,
      path: "/",
      img: <img src={brandImage3.src} alt="브랜드 이미지 3" />,
    },
    
  ];

  return (
    <div
      className={`work__process sp_top_140  ${
        type === 2 ? "sp_bottom_140" : "sp_bottom_270"
      }`}
      style={{ background: `#F6F9FF url('${serviceBgImage4.src}')` }}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title section__title--3 text-center sp_bottom_70">
            <div class="section__title__small"><span>HOW TWO?</span></div>
              {/* <div className="section__title__button">
                <span>{type === 2 ? "What we can do" : "Work Process"}</span>
              </div> */}
              <div className="section__title__heading">
                <h3>
                  {type === 2 ? "MAIN GOAL EVENT CONFERENCE." : "어떤 원리로 팔릴 확률이"}
                </h3>
                <h3>
                  {type === 2 ? "MAIN GOAL EVENT CONFERENCE." : "높은 상품을 추천할 수 있나요?"}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="work__process__inner__wrap">
          {items?.map((item, idx) => (
            <React.Fragment key={idx}>
              <WorkProcessCard item={item} />
              {idx < 3 ? <WPArorowButton arrow={arrows[idx]} /> : ""}
            </React.Fragment>
          ))}
        </div>
      </div>
      <br/><br/><br/>
      <CounterUp2 />
    </div>
  );
};

export default WorkProcess;
