"use client";
import RecommendCard from "./recommendCard";
import { useState } from "react";
import Popup from "@/components/sellpartner/popup/Popup";
import TossPayments from "@/components/sellpartner/payment/TossPayments";
import * as PortOne from "@portone/browser-sdk/v2";

function RecommendCart({ recommendList, handleChangeRecommendCnt }) {
  // 모든 카드의 총액 계산
  const totalAmount = recommendList.reduce((sum, item) => sum + item.amount, 0);
  let orderId = "";

  /* 토스 페이먼츠 결제 코드 시작 ================================================================== */
  // const [showPopup, setShowPopup] = useState(false);
  // const [popupContent, setPopupContent] = useState(null);

  // // 테스트 데이터
  // const paymentInfo = {
  //     amount: totalAmount,
  //     orderId: "Dbnd6a2l7lVsdeqx1YA9X",
  //     orderName: "토스 티셔츠 외 2건",
  //     customer: {
  //         customerId: "x9YEjeoYSurBKSkwyNGe1",
  //         email: "customer123@gmail.com",
  //         name: "김토스",
  //         phoneNumber: "01012341234",
  //     }
  // }

  // // 결제하기 버튼 클릭 핸들러
  // const handlePaymentClick = () => {
  //     setShowPopup(true);
  //     setPopupContent(
  //         <TossPayments
  //             paymentInfo={paymentInfo}
  //             changePopupContent={setPopupContent}
  //         />
  //     );
  // };

  // const handleClosePopup = () => {
  //     setShowPopup(false);
  // };
  /* 토스 페이먼츠 결제 코드 끝 ================================================================== */

  /* 포트원 결제 코드 시작 ====================================================================== */
  const createOrderId = async () => {
    // 백엔드 오더아이디 생성 API 호출
    const orderCreateData = {
      totalAmount,
      recommendList,
      serviceId: "PORECO010000",
    };

    const response = await fetch("/api/payment/order", {
      method: "POST",
      body: JSON.stringify(orderCreateData),
    });

    // 응답 실패 시 에러 발생
    if (!response.ok) {
      throw new Error("Failed to create order ID");
    }

    // 응답 데이터 반환
    const data = await response.json();
    return data.orderId;
  };

  const orderComplete = async (orderId) => {
    // 결제 완료 요청 API 호출
    const notified = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/payment/complete`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId }),
      }
    );
  };

  const productRecommend = async () => {
    const data = recommendList.map((item) => {
      return {
        categoryId: item.categoryId,
        productCnt: item.recommendCnt,
        minPrice: item.minPrice,
        maxPrice: item.maxPrice,
      };
    });
    const productRecommendData = {
      serviceId: "PORECO010000",
      data,
      orderId,
    };

    console.log(JSON.stringify(productRecommendData));

    // 상품 추천 요청 API 호출
    const response = await fetch(`/api/service/product-recommend`, {
      method: "POST",
      body: JSON.stringify(productRecommendData),
    });
  };

  const handlePaymentClick = async () => {
    // 백엔드 오더 생성 API 호출
    orderId = await createOrderId();

    // 포트원 결제창 호출
    const response = await PortOne.requestPayment({
      storeId: process.env.NEXT_PUBLIC_STORE_ID,
      channelKey: process.env.NEXT_PUBLIC_CHANNEL_KEY,
      paymentId: orderId,
      orderName: "상품 추천 서비스",
      totalAmount: totalAmount,
      currency: "CURRENCY_KRW",
      payMethod: "CARD",
      // redirectUrl: ~~ // 결제 완료 후 리다이렉트할 URL(필요시 사용)
    });

    // 결제 요청 오류
    if (response.code !== undefined) {
      return alert(response.message);
    }

    // 결제 완료 요청 API 호출
    const notified = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/payment/complete`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: orderId,
        }),
      }
    );

    // 상품 추천 요청 API 호출
    await productRecommend();
  };
  /* 포트원 결제 코드 끝 ====================================================================== */

  return (
    <div className="gridarea__wrapper">
      <div className="container">
        <div className="row g-4">
          {recommendList?.map((item, index) => (
            <RecommendCard
              key={index}
              categoryId={item.categoryId}
              categoryName={item.categoryName}
              handleChangeRecommendCnt={handleChangeRecommendCnt}
            />
          ))}
        </div>

        {/* 총액 표시 섹션 */}
        <div className="total-amount-section">
          <div className="total-amount-wrapper">
            <span className="total-amount-label">총 예상 금액:</span>
            <span className="total-amount-value">
              {recommendList.length > 0 ? totalAmount.toLocaleString() : 0}원
            </span>
          </div>
        </div>
        <div
          className="sp_bottom_40"
          style={{ textAlign: "right", marginTop: "20px" }}
        >
          <button
            className="default__button"
            onClick={handlePaymentClick}
            style={{
              backgroundColor: "var(--primaryColor)",
              fontSize: "22px",
              paddingTop: "13px",
              paddingBottom: "13px",
              paddingLeft: "30px",
              paddingRight: "30px",
              fontWeight: "500",
              width: "100%",
            }}
          >
            결제하기
          </button>
        </div>
      </div>

      {/* 토스 페이먼츠 결제 팝업 */}
      {/* {showPopup && (
                <Popup
                    headerText="결제 정보"
                    contentComponent={popupContent}
                    changePopupContent={setPopupContent}
                    onClose={handleClosePopup}
                />
            )} */}
    </div>
  );
}

export default RecommendCart;
