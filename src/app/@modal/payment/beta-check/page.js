import ProductRecommendAlertModal from "./ProductRecommendAlertModal";

export default function BetaCheckModal() {
    const handleBtn1 = async () => {
        'use server';
        console.log("버튼1 클릭 이벤트");
    }

    return (
        <ProductRecommendAlertModal />
    );
}
