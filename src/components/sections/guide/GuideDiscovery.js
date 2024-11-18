"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const GuideDiscovery = () => {
  const [guideData, setGuideData] = useState([
    {
      id: 1,
      title: "상품 등록 기본 가이드",
      description: "상품 등록의 기본적인 절차와 주의사항을 안내합니다.",
      icon: "fas fa-box",
    },
    {
      id: 2,
      title: "이미지 등록 가이드",
      description: "효과적인 상품 이미지 등록 방법을 안내합니다.",
      icon: "fas fa-image",
    },
    {
      id: 3,
      title: "상품명 작성 가이드",
      description: "검색에 최적화된 상품명 작성 방법을 안내합니다.",
      icon: "fas fa-pen",
    },
    {
      id: 4,
      title: "상품 설명 작성 가이드",
      description: "구매 전환율을 높이는 상품 설명 작성법을 안내합니다.",
      icon: "fas fa-file-alt",
    },
  ]);

  return (
    <section className="guide__discovery section__space">
      <div className="container">
        <div className="section__title text-center">
          <div className="section__title__button">
            <span className="text__gradient">가이드 목록</span>
          </div>
          <div className="section__title__heading">
            <h2>상품 등록 가이드 모음</h2>
          </div>
        </div>

        <div className="row mt-5">
          {guideData.map((guide) => (
            <div key={guide.id} className="col-lg-6 mb-4">
              <div className="guide__card p-4 h-100">
                <div className="guide__card-icon mb-3">
                  <i className={`${guide.icon} fa-2x text-primary`}></i>
                </div>
                <h3 className="guide__card-title h4 mb-3">{guide.title}</h3>
                <p className="guide__card-description mb-4">
                  {guide.description}
                </p>
                <Link
                  href={`/guide/${guide.id}`}
                  className="btn btn-outline-primary"
                >
                  자세히 보기
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideDiscovery;
