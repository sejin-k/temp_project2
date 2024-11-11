'use client'
import RecommendCard from "./recommendCard"
import { useState } from 'react';

function RecommendCart({ recommendList }) {
    const [categoryPrices, setCategoryPrices] = useState({});

    const handlePriceChange = (categoryId, price) => {
        setCategoryPrices(prev => ({
            ...prev,
            [categoryId]: price
        }));
    };

    // 모든 카드의 총액 계산
    const totalAmount = Object.values(categoryPrices).reduce((sum, price) => sum + price, 0);

    return (
        <div className="gridarea__wrapper">
            <div className="container">
                <div className="row g-4">
                    {recommendList?.map((item, index) => (
                        <RecommendCard 
                            key={index}
                            categoryId={item.categoryId}
                            categoryName={item.categoryName}
                            onPriceChange={handlePriceChange}
                        />
                    ))}
                </div>
                
                {/* 총액 표시 섹션 */}
                {recommendList.length > 0 && (
                    <div className="total-amount-section">
                        <div className="total-amount-wrapper">
                            <span className="total-amount-label">총 예상 금액:</span>
                            <span className="total-amount-value">
                                {totalAmount.toLocaleString()}원
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default RecommendCart
