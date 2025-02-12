import styles from './Modal.module.scss';

export default function ModalHeader({ title, onClose, closeBtn=true, center=false }) {
    return (
        <div className={`${styles['modal-header']} ${center ? styles['center'] : ''}`}>
            <h5>{title}</h5>
            {closeBtn && (
                <button className={`btn-close ${styles['modal-header-close']}`} onClick={onClose} />
            )}
        </div>
    );
}