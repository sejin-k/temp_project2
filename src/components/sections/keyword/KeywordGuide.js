import React from "react";
import Image from "next/image";

const KeywordGuide = () => {
  const guideSteps = [
    {
      title: "키워드 발굴 서비스 소개",
      description:
        "AI 기반 키워드 분석으로 최적의 상품 키워드를 발굴하여 매출 증대에 도움을 드립니다.",
      points: [
        "실시간 검색어 트렌드 분석",
        "경쟁사 키워드 벤치마킹",
        "시즌별 인기 키워드 추천",
      ],
      image: "/images/keyword/guide-1.jpg",
    },
    {
      title: "키워드 분석 프로세스",
      description:
        "데이터 기반의 체계적인 키워드 분석으로 최적의 결과를 도출합니다.",
      points: [
        "상품 카테고리 기반 키워드 추출",
        "검색량 및 경쟁강도 분석",
        "구매 전환율이 높은 키워드 선별",
      ],
      image: "/images/keyword/guide-2.jpg",
    },
    {
      title: "키워드 최적화 및 적용",
      description:
        "분석된 키워드를 효과적으로 적용하여 검색 노출을 극대화합니다.",
      points: [
        "상품 타이틀 최적화",
        "상세 설명 키워드 배치",
        "태그 및 검색어 설정",
      ],
      image: "/images/keyword/guide-3.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">키워드 발굴 서비스 가이드</h2>
          <p className="text-gray-600">
            효과적인 키워드 전략으로 매출 증대를 경험하세요
          </p>
        </div>

        <div className="space-y-20">
          {guideSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-12 ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeywordGuide;
