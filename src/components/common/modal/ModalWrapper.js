"use client";

import { useRef, useEffect } from 'react';
import { useModal } from '@/hooks/useModal';
import styles from './Modal.module.scss';

export default function ModalWrapper({ children }) {
  const dialogRef = useRef(null);
  const { setModalDialog, onClose } = useModal();

  // 모달 열기
  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      document.body.style.overflow = 'hidden';
      setModalDialog(dialogRef);
      dialogRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={dialogRef} onClose={onClose} className={styles.modal}>
      {children}
    </dialog>
  );
}
