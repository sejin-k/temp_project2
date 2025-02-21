import AlertModal from "@/components/common/modal/AlertModal";

export default function EmptyModalPage({ params }) {
  const { type } = params;
  let title = "";
  let body = "";

  switch (type) {
    case "category":
        title = "하위카테고리 없음"
        body = <p>하위카테고리가 존재하지 않습니다.</p>
        break;
    case "product":
        title = "상품 없음"
        body = <p>상품이 존재하지 않습니다.</p>
        break;
  }

  return (
    <AlertModal title={title}>
        {body}
    </AlertModal>
  );
}
