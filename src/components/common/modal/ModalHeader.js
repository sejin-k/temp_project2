import styles from './Modal.module.scss';
import { useModal } from '@/hooks/useModal';

export default function ModalHeader({ title }) {
    const { onClose } = useModal();

    return (
        <div className={styles['modal-header']}>
            <h5>{title}</h5>
            <button className={`btn-close ${styles['modal-header-close']}`} onClick={onClose} />
        </div>
    );
}