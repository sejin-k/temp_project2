import React from "react";

const Membership = () => {
  const membershipInfo = {
    level: "PREMIUM",
    validUntil: "2024.12.31",
    benefits: [
      "무제한 키워드 검색",
      "실시간 시장 분석",
      "AI 추천 서비스",
      "전문가 상담",
    ],
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">멤버십 현황</h2>
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-medium">현재 등급</span>
          <span className="text-xl font-bold text-primary">
            {membershipInfo.level}
          </span>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-lg font-medium">유효기간</span>
          <span className="text-gray-600">{membershipInfo.validUntil}</span>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-medium mb-3">멤버십 혜택</h3>
          <ul className="space-y-2">
            {membershipInfo.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark">
        멤버십 연장하기
      </button>
    </div>
  );
};

export default Membership;
