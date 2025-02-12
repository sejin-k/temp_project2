'use client';
import Modal from "@/components/common/modal/Modal";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductRecommendAlertModal() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const totalAmount = searchParams.get("totalAmount");
    const recommendList = JSON.parse(searchParams.get("recommendList"));
    console.log(">>>>>>>>>>>111");
    console.log(totalAmount, recommendList);

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

    const handleConfirm = async () => {
        const orderId = await createOrderId();
        console.log(orderId);
        router.back();
    }
    
    return (
        <Modal title="상품 추천 안내">
            <p>
                상품 추천 리스트는 5일 이내 메일로 발송될 예정입니다.
            </p>
            <button className="default__button" style={{ width: "100%" }} onClick={handleConfirm}>확인</button>
        </Modal>
    )
}