import React, { useState } from "react";

const AccountSettings = () => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleDeleteAccount = () => {
    // 계정 삭제 로직 구현
    console.log("계정 삭제 처리");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">계정 설정</h2>

      <div className="space-y-6">
        <div className="p-6 bg-red-50 rounded-lg">
          <h3 className="text-xl font-bold text-red-600 mb-4">계정 탈퇴</h3>
          <p className="text-gray-700 mb-4">
            계정을 삭제하면 모든 데이터가 영구적으로 삭제되며 복구할 수
            없습니다. 신중하게 결정해 주세요.
          </p>

          {!showDeleteConfirm ? (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              계정 탈퇴하기
            </button>
          ) : (
            <div className="space-y-4">
              <p className="font-medium text-red-600">
                정말로 계정을 삭제하시겠습니까?
              </p>
              <div className="flex gap-4">
                <button
                  onClick={handleDeleteAccount}
                  className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
                >
                  확인
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600"
                >
                  취소
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
