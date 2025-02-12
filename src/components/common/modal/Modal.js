"use client";

import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import ModalHeader from './ModalHeader';
import styles from './Modal.module.scss';

export default function Modal({ children, title, closeBtn=true, headerCenter=false }) {
  const router = useRouter();
  const dialogRef = useRef(null);

  // 모달 열기
  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
    }
  }, []);

  // Modal Close 관련 함수
  // 1. 모달 닫기 함수
  const onClose = () => {
    router.back();
  };

  // 2. 배경 클릭 시 닫기
  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      router.back();
    }
  };

  return (
    <dialog 
      ref={dialogRef} 
      onClose={onClose}
      // onClick={handleBackdropClick}
      className={styles.modal}
    >
      <ModalHeader 
        title={title} 
        onClose={onClose}
        closeBtn={closeBtn} 
        center={headerCenter} />

      <div className={styles['modal-body']}>
        {children}
      </div>
    </dialog>
  );
}
