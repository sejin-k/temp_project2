'use client'
import RecommendCard from "./recommendCard"
import { useState } from 'react';
import Popup from "@/components/sellpartner/popup/Popup";
import TossPayments from "@/components/sellpartner/payment/TossPayments";

function RecommendCart({ recommendList }) {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState(null);
    const [categoryPrices, setCategoryPrices] = useState({});

    // 모든 카드의 총액 계산
    const totalAmount = Object.values(categoryPrices).reduce((sum, price) => sum + price, 0);

    // 테스트 데이터
    const paymentInfo = {
        amount: totalAmount,
        orderId: "Dbnd6a2l7lVsdeqx1YA9X",
        orderName: "토스 티셔츠 외 2건",
        customer: {
            customerId: "x9YEjeoYSurBKSkwyNGe1",
            email: "customer123@gmail.com",
            name: "김토스",
            phoneNumber: "01012341234",
        }
    }

    const handlePriceChange = (categoryId, price) => {
        setCategoryPrices(prev => ({
            ...prev,
            [categoryId]: price
        }));
    };

    // 결제하기 버튼 클릭 핸들러
    const handlePaymentClick = () => {
        setShowPopup(true);
        setPopupContent(
            <TossPayments
                paymentInfo={paymentInfo}
                changePopupContent={setPopupContent}
            />
        );
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="gridarea__wrapper">
            <div className="container">
                <div className="row g-4">
                    {recommendList?.map((item, index) => (
                        <RecommendCard
                            key={index}
                            categoryId={item.categoryId}
                            categoryName={item.categoryName}
                            onPriceChange={handlePriceChange}
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
                <div className="sp_bottom_40">
                    <button
                        className="default__button"
                        onClick={handlePaymentClick}
                    >
                        결제하기
                    </button>
                </div>
            </div>

            {/* 결제 팝업 */}
            {showPopup && (
                <Popup
                    headerText="결제 정보"
                    contentComponent={popupContent}
                    changePopupContent={setPopupContent}
                    onClose={handleClosePopup}
                />
            )}
        </div>
    );
}

export default RecommendCart
