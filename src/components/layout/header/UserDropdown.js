"use client";
import Link from "next/link";

export default function UserDropdown({ onClose, onLogout }) {
  return (
    <div 
      className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
      style={{
        position: 'absolute',
        top: '100%',
        right: '-8px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '180px'
      }}
    >
      <Link
        href="/mypage"
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
        onClick={onClose}
      >
        마이페이지
      </Link>
      <Link
        href="/settings"
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center"
        onClick={onClose}
      >
        설정
      </Link>
      <button
        onClick={onLogout}
        className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-center"
      >
        로그아웃
      </button>
    </div>
  );
} 