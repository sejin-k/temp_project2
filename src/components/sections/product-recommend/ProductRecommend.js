import React, { useState } from "react";

function ProductRecommend() {
  // ... 기존 state들 ...

  // 카드 제거 핸들러 추가
  const handleRemoveCard = (categoryId) => {
    // 체크박스 해제
    setSelectedCategories((prev) => ({
      ...prev,
      [categoryId]: false,
    }));

    // 추천 목록에서 제거
    setRecommendList((prev) =>
      prev.filter((item) => item.categoryId !== categoryId)
    );
  };

  return (
    <div className="container">
      {/* ... 기존 카테고리 목록 ... */}

      {/* 추천 카드 영역 */}
      <div className="row g-4 mt-4">
        {recommendList.map((item, index) => (
          <div key={index} className="col-xl-3 col-lg-4 col-md-6">
            <div className="gridarea__wraper" style={{ position: "relative" }}>
              {/* X 버튼 추가 */}
              <button
                onClick={() => handleRemoveCard(item.categoryId)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                  zIndex: 10,
                  color: "#666",
                  padding: "5px 10px",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-label="Remove card"
              >
                ×
              </button>

              {/* 기존 카드 내용 */}
              <div className="gridarea__content">
                <div className="gridarea__heading">
                  <h3>{item.categoryName}</h3>
                </div>
                <div className="gridarea__price">
                  <input
                    type="number"
                    min="1"
                    value={item.recommendCnt}
                    onChange={(e) =>
                      handleRecommendCntChange(item.categoryId, e.target.value)
                    }
                    className="form-control mb-3"
                  />
                  <div className="price-inputs">
                    <input
                      type="number"
                      placeholder="최소 금액"
                      value={item.minPrice}
                      onChange={(e) =>
                        handlePriceChange(
                          item.categoryId,
                          "minPrice",
                          e.target.value
                        )
                      }
                      className="form-control"
                    />
                    <span className="mx-2">~</span>
                    <input
                      type="number"
                      placeholder="최대 금액"
                      value={item.maxPrice}
                      onChange={(e) =>
                        handlePriceChange(
                          item.categoryId,
                          "maxPrice",
                          e.target.value
                        )
                      }
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ... 기존 결제 버튼 등 ... */}
    </div>
  );
}

export default ProductRecommend;
