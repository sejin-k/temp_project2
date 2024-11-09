"use client";
import { useState } from "react";
import UserProfile from "./UserProfile";
import Membership from "./Membership";
import CouponRegister from "./CouponRegister";
import AccountSettings from "./AccountSettings";

const MyPageContent = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "회원정보" },
    { id: "membership", label: "멤버십 현황" },
    { id: "coupon", label: "쿠폰등록" },
    { id: "settings", label: "계정 설정" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <UserProfile />;
      case "membership":
        return <Membership />;
      case "coupon":
        return <CouponRegister />;
      case "settings":
        return <AccountSettings />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-10">마이페이지</h1>
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64">
            <div className="bg-white rounded-lg shadow-md p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        activeTab === tab.id
                          ? "bg-primary text-white"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPageContent;
