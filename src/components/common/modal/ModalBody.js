import styles from './Modal.module.scss';

export default function ModalBody({ children }) {
    return (
        <div className={styles['modal-body']}>
            {children}
        </div>
    );
}