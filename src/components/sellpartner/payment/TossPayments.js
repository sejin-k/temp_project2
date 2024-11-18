import { useState, useEffect } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

const TossPayments = ({ paymentInfo, changePopupContent }) => {
    const clientKey = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY;
    const customerKey = paymentInfo.customer.customerId;
    const [amount, setAmount] = useState({
        currency: "KRW",
        value: paymentInfo.amount,
    });
    const [ready, setReady] = useState(false);
    const [widgets, setWidgets] = useState(null);

    useEffect(() => {
        async function fetchPaymentWidgets() {
            // ------  결제위젯 초기화 ------
            const tossPayments = await loadTossPayments(clientKey);
            // 회원 결제
            const widgets = tossPayments.widgets({
                customerKey,
            });
            // 비회원 결제
            // const widgets = tossPayments.widgets({ customerKey: ANONYMOUS });

            setWidgets(widgets);
        }

        fetchPaymentWidgets();
    }, [clientKey, customerKey]);

    useEffect(() => {
        async function renderPaymentWidgets() {
            if (widgets == null) {
                return;
            }
            // ------ 주문의 결제 금액 설정 ------
            await widgets.setAmount(amount);

            await Promise.all([
                // ------  결제 UI 렌더링 ------
                widgets.renderPaymentMethods({
                    selector: "#payment-method",
                    variantKey: "DEFAULT",
                }),
                // ------  이용약관 UI 렌더링 ------
                widgets.renderAgreement({
                    selector: "#agreement",
                    variantKey: "AGREEMENT",
                }),
            ]);

            setReady(true);
        }

        renderPaymentWidgets();
    }, [widgets]);

    useEffect(() => {
        if (widgets == null) {
            return;
        }

        widgets.setAmount(amount);
    }, [widgets, amount]);

    const handlePayment = async () => {
        try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
            // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
            const paymentData = await widgets.requestPayment({
                orderId: paymentInfo.orderId,
                orderName: paymentInfo.orderName,
                customerEmail: paymentInfo.customer.email,
                customerName: paymentInfo.customer.name,
                // customerMobilePhone: paymentInfo.customer.phoneNumber,
            });

            // 결제 승인 요청 필요
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/payment/confirm`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    orderId: paymentInfo.orderId,
                    amount: paymentData.amount.value,
                    paymentKey: paymentData.paymentKey,
                }),
            });

            // 응답 데이터 처리
            const responseData = await response.json();
            console.log('응답:', responseData);
        } catch (error) {
            // 결제 승인 요청 실패 로직 구현 필요
            console.log(error); 
        }
    }

    return (
        <div className="wrapper">
            <div className="box_section">
                {/* 결제 UI */}
                <div id="payment-method" />
                {/* 이용약관 UI */}
                <div id="agreement" />
                {/* 결제하기 버튼 */}
                <button
                    className="button"
                    disabled={!ready}
                    onClick={handlePayment}
                >
                    결제하기
                </button>
            </div>
        </div>
    );
};

export default TossPayments; 