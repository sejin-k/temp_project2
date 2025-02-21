import AlertModal from "@/components/common/modal/AlertModal";

export default function BetaCheckModal() {
    return (
        <AlertModal title="상품 추천 결제 안내">
            <p>상품 추천 리스트는 5일 이내 메일로 발송될 예정입니다.</p>
        </AlertModal>
    );
}
