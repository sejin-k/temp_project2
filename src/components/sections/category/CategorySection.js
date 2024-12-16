import React, { useState } from "react";

const CategorySection = ({
  name,
  data,
  onDataChange,
  onAddCategory,
  selectedCategories,
}) => {
  const [activeCategory, setActiveCategory] = useState(null);

  // 카테고리 클릭 시 하위 카테고리 변경
  const handleCategoryClick = (categoryId) => {
    console.log("클릭됨", categoryId);
    setActiveCategory(categoryId);
    if (onDataChange) {
      onDataChange(categoryId);
    }
  };

  // 체크박스 변경 이벤트 처리
  const handleCheckboxChange = (e, categoryId, categoryName) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    if (onAddCategory) {
      onAddCategory(categoryId, categoryName, e.target.checked);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        borderTop: "1px solid #ddd",
        borderRadius: "4px",
      }}
    >
      <h4
        style={{
          marginRight: "20px",
          marginBottom: "0",
          width: "100px",
          minWidth: "100px",
          maxWidth: "100px",
          backgroundColor: "#FE0094",
          justifyContent: "space-around",
          padding: "8px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          fontSize: "18px",
          // color: "#282424",
          color: "#FFF",
          fontWeight: "700",
        }}
      >
        {name}
      </h4>
      <div>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            margin: 0,
            padding: "8px",
          }}
        >
          {data?.map((d) => (
            <li
              key={d.categoryId}
              className="single__transform"
              style={{
                width: "160px",
                marginRight: "10px",
                marginBottom: "10px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                className={`${activeCategory === d.categoryId ? "active" : ""}`}
                onClick={() => handleCategoryClick(d.categoryId)}
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleCheckboxChange(e, d.categoryId, d.categoryName)
                  }
                  checked={
                    selectedCategories?.some(
                      (cat) => cat.categoryId === d.categoryId
                    ) || false
                  }
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    accentColor: "#FE0094",
                    cursor: "pointer",
                    width: "20px",
                    height: "20px",
                    marginRight: "8px",
                  }}
                />
                <span>{d.categoryName}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategorySection;
