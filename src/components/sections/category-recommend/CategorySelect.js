"use client";
import { useState, useEffect } from "react";
import CategoryDropdown from "@/components/sellpartner/category/CategoryDropdown";

/**
 * 카테고리 선택 컴포넌트
 * 4단계(대분류, 중분류, 소분류, 세분류)의 카테고리 선택 드롭다운을 표시
 */
const CategorySelect = ({ onCategorySelect }) => {
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState({
    depth1: null,
    depth2: null,
    depth3: null,
    depth4: null,
  });
  const [showDropdowns, setShowDropdowns] = useState({
    depth1: false,
    depth2: false,
    depth3: false,
    depth4: false,
  });

  // 카테고리 선택 핸들러
  const handleCategorySelect = async (depth, category) => {
    const newSelectedCategories = { ...selectedCategories };

    if (
      category.categoryDepth2Name === "선택 없음" ||
      category.categoryDepth3Name === "선택 없음" ||
      category.categoryDepth4Name === "선택 없음"
    ) {
      newSelectedCategories[`depth${depth}`] = null;
    } else {
      newSelectedCategories[`depth${depth}`] = category;
    }

    for (let i = depth + 1; i <= 4; i++) {
      newSelectedCategories[`depth${i}`] = null;
    }

    setSelectedCategories(newSelectedCategories);

    const newShowDropdowns = {
      depth1: false,
      depth2: false,
      depth3: false,
      depth4: false,
    };
    if (depth < 4) {
      newShowDropdowns[`depth${depth + 1}`] = true;
    }
    setShowDropdowns(newShowDropdowns);

    // 부모 컴포넌트의 핸들러 호출
    onCategorySelect(newSelectedCategories);
  };

  const toggleDropdown = (depth) => {
    setShowDropdowns((prev) => ({
      ...prev,
      [`depth${depth}`]: !prev[`depth${depth}`],
    }));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`/api/service/categories?platformId=${1}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("카테고리 데이터를 불러오는데 실패했습니다");
        }

        const data = await response.json();
        setCategoryData(data.categoryList);

        if (data.categoryList && data.categoryList.length > 0) {
          const firstCategory = data.categoryList[0];
          const newSelectedCategories = {
            ...selectedCategories,
            depth1: firstCategory
          };
          setSelectedCategories(newSelectedCategories);
          onCategorySelect(newSelectedCategories);
        }
      } catch (err) {
        console.error("카테고리 데이터 조회 중 오류:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="mt-4">
      {/* 카테고리 헤더 */}
      <div
        className="section__title"
        style={{ textAlign: "left", marginBottom: "20px" }}
      >
        <h3>카테고리 별 검색</h3>
      </div>

      {/* 카테고리 선택 영역 */}
      <div
        className="category__gradient"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div
          className="category_row_bg"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            className="d-flex justify-content-between"
            style={{ position: "relative", zIndex: 9999 }}
          >
            {/* 대분류 */}
            <CategoryDropdown
              depth={1}
              categoryName="1차 카테고리"
              parentCategory={categoryData}
              selectedCategories={selectedCategories}
              showDropdowns={showDropdowns}
              toggleDropdown={toggleDropdown}
              handleCategorySelect={handleCategorySelect}
            />

            {/* 중분류 */}
            <CategoryDropdown
              depth={2}
              categoryName="2차 카테고리"
              parentCategory={categoryData}
              selectedCategories={selectedCategories}
              showDropdowns={showDropdowns}
              toggleDropdown={toggleDropdown}
              handleCategorySelect={handleCategorySelect}
            />

            {/* 소분류 */}
            <CategoryDropdown
              depth={3}
              categoryName="3차 카테고리"
              parentCategory={categoryData}
              selectedCategories={selectedCategories}
              showDropdowns={showDropdowns}
              toggleDropdown={toggleDropdown}
              handleCategorySelect={handleCategorySelect}
            />

            {/* 세분류 */}
            <CategoryDropdown
              depth={4}
              categoryName="4차 카테고리"
              parentCategory={categoryData}
              selectedCategories={selectedCategories}
              showDropdowns={showDropdowns}
              toggleDropdown={toggleDropdown}
              handleCategorySelect={handleCategorySelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelect; 