"use client";
import { useState } from "react";
import PricingCard from "@/components/shared/cards/PricingCard";
import servcieBgImage3 from "@/assets/img/service/service__bg__3.png";

const Pricing = ({ plan, title, isDarkBg, isGrdient, tag, bg, isNotTag }) => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabClick = (tabType) => {
    setActiveTab(tabType);
  };

  const plans = [
    [
      {
        id: 1,
        // name: "셀파트너 라이트",
        name: "FREE",
        price: "무료",
        // business: "Small Business",
        features: ["셀파트너가 처음이라면", "무료로 체험해보세요"],
      },
      {
        id: 2,
        // name: "셀파트너 코어",
        name: "베이직",
        price: "15,900원",
        // business: "Mid Business",
        features: ["초기 판매자라면", "베이직으로 매출 상승을!"],
      },
      {
        id: 3,
        // name: "셀파트너 프리미엄",
        name: "스탠다드",
        price: "32,700원",
        // business: "Big Business",
        features: ["성장을 꿈꾸는 판매자라면", "스탠다드가 정답입니다"],
      },
      {
        id: 4,
        name: "프리미엄",
        price: "54,900원",
        // business: "All Business",
        features: ["대규모 사업자라면", " 프리미엄으로 혁신하세요"],
        // isSpecial: true,
      },
    ],
    [
      {
        id: 1,
        // name: "셀파트너 라이트",
        name: "FREE",
        price: "무료",
        // business: "Small Business",
        features: ["셀파트너가 처음이라면", "무료로 체험해보세요"],
      },
      {
        id: 2,
        // name: "셀파트너 코어",
        name: "베이직",
        price: "159,000원",
        // business: "Mid Business",
        features: ["초기 판매자라면", "베이직으로 매출 상승을!"],
      },
      {
        id: 3,
        // name: "셀파트너 프리미엄",
        name: "스탠다드",
        price: "327,000원",
        // business: "Big Business",
        features: ["성장을 꿈꾸는 판매자라면", "스탠다드가 정답입니다"],
      },
      {
        id: 4,
        name: "프리미엄",
        price: "549,000원",
        // business: "All Business",
        features: ["대규모 사업자라면", " 프리미엄으로 혁신하세요"],
        // isSpecial: true,
      },
    ],
  ];
  return (
    <div
      className="pricing sp_top_120 sp_bottom_120 special__spacing"
      style={{
        background:
          bg === "white"
            ? ""
            : `${isDarkBg ? "var(--blackBlue)" : "#F6F9FF"} url('${
                servcieBgImage3.src
              }')`,
      }}
      id="tb__pricing"
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className={`section__title ${
                isDarkBg ? "section__title--3 sp_bottom_70" : "sp_bottom_50"
              } text-center  `}
            >
              {isNotTag ? (
                ""
              ) : (
                <div
                  className={`${
                    plan === 2
                      ? "section__title__button"
                      : "section__title__small"
                  } `}
                >
                  <span className={`${isGrdient ? "text__gradient" : ""}`}>
                    {tag ? tag : "멤버쉽 금액"}
                  </span>
                </div>
              )}
              <div className="section__title__heading">
                <h3>
                  {title ? title : "멤버쉽을 통해 매출 상승을 이끌어 보세요."}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <ul className="nav  pricing__tab" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className={`pricing__tab__link ${
                    activeTab === "monthly" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("monthly")}
                  type="button"
                >
                  월간 결제 금액
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className={`pricing__tab__link ${
                    activeTab === "yearly" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("yearly")}
                  type="button"
                >
                  연간 결제 금액
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content tab__content__wrapper" id="myTabContent">
          <div
            className={`tab-pane fade ${
              activeTab === "monthly" ? "active show" : ""
            }`}
            id="projects__one"
            role="tabpanel"
          >
            <div className="social__wrapper">
              <div className="row">
                {plans[0]?.map((planSingle, idx1) => (
                  <PricingCard key={idx1} plan={planSingle} />
                ))}
              </div>
            </div>
          </div>
          <div
            className={`tab-pane fade ${
              activeTab === "yearly" ? "active show" : ""
            }`}
            id="projects__two"
            role="tabpanel"
          >
            <div className="social__wrapper">
              <div className="row">
                {plans[1]?.map((planSingle, idx1) => (
                  <PricingCard key={idx1} plan={planSingle} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 멤버십 비교표 추가 */}
      <div
        className="membership-comparison container sp_bottom_120"
        style={{ background: bg === "white" ? "" : "var(--white)" }}
      >
        <div className="comparison-header">
          <h3 className="text-center mb-5">멤버십 구독상품 비교</h3>
          <div className="comparison-grid">
            <div className="comparison-row header-row">
              <div className="feature-name"></div>
              <div className="plan-name">무료회원</div>
              <div className="plan-name">베이직</div>
              <div className="plan-name">스탠다드</div>
              <div className="plan-name">프리미엄</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">아이템 발굴</div>
              <div className="plan-value">3개월</div>
              <div className="plan-value">6개월</div>
              <div className="plan-value">1년</div>
              <div className="plan-value">1년</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">인기 키워드: 키워드 데이터</div>
              <div className="plan-value light">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">인기 키워드: 조건 필터</div>
              <div className="plan-value light">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">주제별 키워드: 엑셀 다운로드</div>
              <div className="plan-value">✕</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">키워드 분석</div>
              <div className="feature-subheading" colSpan="5">
                메인: 즐겨찾기
              </div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">메인: 즐겨찾기</div>
              <div className="plan-value">30개</div>
              <div className="plan-value">100개</div>
              <div className="plan-value">500개</div>
              <div className="plan-value">2,000개</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">메인: 최근 검색 내역</div>
              <div className="plan-value">50개</div>
              <div className="plan-value">50개</div>
              <div className="plan-value">100개</div>
              <div className="plan-value">200개</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">메인: 엑셀 다운로드</div>
              <div className="plan-value light">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
            </div>

            <div className="comparison-row">
              <div className="feature-name">
                상품 목록: 예상 판매량/매출액 (베타)
              </div>
              <div className="plan-value light">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
              <div className="plan-value dark">●</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
