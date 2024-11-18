"use client";
import Link from "next/link";

export default function UserDropdown({ onClose, onLogout }) {
  return (
    <div className="fixed mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50" style={{
      position: 'absolute',
      top: '100%',
      right: 0,
      marginTop: '0.5rem'
    }}>
      <div className="relative">
        <Link
          href="/mypage"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          마이페이지
        </Link>
        <Link
          href="/settings"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          onClick={onClose}
        >
          설정
        </Link>
        <div className="h-[1px] bg-gray-200 my-2"></div>
        <button
          onClick={onLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
        >
          로그아웃
        </button>
      </div>
    </div>
  );
} 