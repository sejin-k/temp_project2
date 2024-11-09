import React, { useState } from "react";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "홍길동",
    email: "user@example.com",
    phone: "010-1234-5678",
    address: "서울시 강남구",
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">회원정보</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            이름
          </label>
          <input
            type="text"
            value={userInfo.name}
            className="w-full px-4 py-2 border rounded-md"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            이메일
          </label>
          <input
            type="email"
            value={userInfo.email}
            className="w-full px-4 py-2 border rounded-md"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            전화번호
          </label>
          <input
            type="tel"
            value={userInfo.phone}
            className="w-full px-4 py-2 border rounded-md"
            readOnly
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            주소
          </label>
          <input
            type="text"
            value={userInfo.address}
            className="w-full px-4 py-2 border rounded-md"
            readOnly
          />
        </div>
        <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark">
          정보 수정
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
