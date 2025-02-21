import { useContext } from "react";
import { ModalContext } from "@/providers/ModalProvider";
import { useRouter } from "next/navigation";

export const useModal = () => {
    const { modalDialog, setModalDialog, inputData, setInputData } = useContext(ModalContext);
    const router = useRouter();

    const onClose = () => {
        document.body.style.overflow = 'unset'; // 스크롤 허용
        setInputData(null); // 데이터 초기화
        router.back(); // 이전 페이지로 이동
    }

    const handleBackdropClick = (e) => {
        if (e.target === modalDialog.current) {
            document.body.style.overflow = 'unset'; // 스크롤 허용
            setInputData(null); // 데이터 초기화
            router.back(); // 이전 페이지로 이동
        }
    }

    return { modalDialog, setModalDialog, inputData, setInputData, onClose, handleBackdropClick };
}
