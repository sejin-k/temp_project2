'use client'
import RecommendCntRadio from "@/components/sellpartner/recommendCart/recommendCntRadio";
import { useState, useEffect } from "react";

function RecommendCard({categoryId, categoryName, onPriceChange}) {
    const [checkedCnt, setCheckedCnt] = useState(30);
    const [priceRange, setPriceRange] = useState({min: 0, max: 100000});
    const [totalPrice, setTotalPrice] = useState(30000); // 기본값 3만원
    
    // 추천 건수에 따른 가격 매핑
    const getPriceByCount = (count) => {
        const priceMap = {
            30: 30000,  // 3만원
            50: 50000,  // 5만원
            100: 100000  // 10만원
        };
        return priceMap[count];
    };

    // 추천 건수 변경 시 가격도 자동 변경
    const handleCntChange = (cnt) => {
        setCheckedCnt(cnt);
        const newPrice = getPriceByCount(cnt);
        setTotalPrice(newPrice);
        onPriceChange(categoryId, newPrice);
    };
    
    // 컴포넌트 마운트 시 초기 가격 설정
    useEffect(() => {
        const initialPrice = getPriceByCount(checkedCnt);
        setTotalPrice(initialPrice);
        onPriceChange(categoryId, initialPrice);
    }, []);

    const handlePriceChange = (e, type) => {
        const value = parseInt(e.target.value);
        setPriceRange(prev => {
            const newRange = {
                ...prev,
                [type]: value
            };
            if (type === 'min' && value > prev.max) {
                newRange.min = prev.max;
            } else if (type === 'max' && value < prev.min) {
                newRange.max = prev.min;
            }
            return newRange;
        });
    };

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
            <div className="recommend-card">
                <div className="recommend-card__header">
                    <h3 className="category-name">{categoryName}</h3>
                </div>
                <div className="recommend-card__content">
                    <div className="product-count-section">
                        <h4>상품 추천 개수</h4>
                        <RecommendCntRadio onDataChange={handleCntChange} />
                    </div>
                    <div className="price-range-section">
                        <h4>가격 범위</h4>
                        <div className="price-range-slider">
                            <div className="double-slider">
                                <input
                                    type="range"
                                    className="slider slider-min"
                                    value={priceRange.min}
                                    min="0"
                                    max={priceRange.max}
                                    onChange={(e) => handlePriceChange(e, 'min')}
                                />
                                <input
                                    type="range"
                                    className="slider slider-max"
                                    value={priceRange.max}
                                    min={priceRange.min}
                                    max="100000"
                                    onChange={(e) => handlePriceChange(e, 'max')}
                                />
                            </div>
                            <div className="price-inputs">
                                <input
                                    type="number"
                                    className="price-input"
                                    value={priceRange.min}
                                    onChange={(e) => handlePriceChange(e, 'min')}
                                    min="0"
                                    max={priceRange.max}
                                />
                                <span>~</span>
                                <input
                                    type="number"
                                    className="price-input"
                                    value={priceRange.max}
                                    onChange={(e) => handlePriceChange(e, 'max')}
                                    min={priceRange.min}
                                    max="100000"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="total-price-section">
                        <h4>금액</h4>
                        <p className="total-price">{totalPrice?.toLocaleString()}원</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendCard;
