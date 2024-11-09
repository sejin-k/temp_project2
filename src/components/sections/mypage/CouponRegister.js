import React, { useState } from "react";

const CouponRegister = () => {
  const [couponCode, setCouponCode] = useState("");
  const [coupons] = useState([
    {
      code: "WELCOME2024",
      discount: "10%",
      validUntil: "2024.12.31",
      status: "사용가능",
    },
    {
      code: "SPECIAL50",
      discount: "50%",
      validUntil: "2024.06.30",
      status: "사용완료",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 쿠폰 등록 로직 구현
    setCouponCode("");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">쿠폰등록</h2>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="쿠폰 코드를 입력하세요"
            className="flex-1 px-4 py-2 border rounded-md"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark"
          >
            등록하기
          </button>
        </div>
      </form>

      <div>
        <h3 className="text-xl font-bold mb-4">보유 쿠폰 목록</h3>
        <div className="space-y-4">
          {coupons.map((coupon, index) => (
            <div
              key={index}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium">{coupon.code}</p>
                <p className="text-sm text-gray-600">
                  할인율: {coupon.discount}
                </p>
                <p className="text-sm text-gray-600">
                  유효기간: {coupon.validUntil}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  coupon.status === "사용가능"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {coupon.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponRegister;
