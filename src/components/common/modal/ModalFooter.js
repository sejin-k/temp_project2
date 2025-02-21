'use client'
import styles from './Modal.module.scss';
import { useModal } from '@/hooks/useModal';

export default function ModalFooter({ btnText="확인", onBtnClick }) {
    const { onClose } = useModal();

    const handleBtnClick = () => {
        if (onBtnClick) {
            onBtnClick();
        }
        onClose();
    }

    return (
        <div className={styles['modal-footer']}>
            <button className="default__button" style={{ width: "100%" }} onClick={handleBtnClick}>{btnText}</button>
        </div>
    );
}