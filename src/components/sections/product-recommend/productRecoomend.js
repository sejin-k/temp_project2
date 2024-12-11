"use client";

import { useState, useEffect } from "react";
import Category from "@/components/sections/category/Category";
import RecommendCart from "@/components/sections/recommendCart/recommendCart";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const ProductRecommend = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [recommendList, setRecommendList] = useState([]);

  const handleAddCategory = (categoryId, categoryName, isChecked) => {
    if (isChecked) {
      // 카테고리 추가
      const newCategory = {
        categoryId: categoryId,
        categoryName: categoryName,
        recommendCnt: 30,
        minPrice: 0,
        maxPrice: 100000,
        amount: 30000,
      };

      setSelectedCategories((prev) => [...prev, newCategory]);
      setRecommendList((prev) => [...prev, newCategory]);
    } else {
      // 카테고리 제거
      setSelectedCategories((prev) =>
        prev.filter((cat) => cat.categoryId !== categoryId)
      );
      setRecommendList((prev) =>
        prev.filter((cat) => cat.categoryId !== categoryId)
      );
    }
  };

  const handleChangeRecommendCnt = (categoryId, recommendCnt, amount) => {
    setRecommendList((prev) =>
      prev.map((cat) =>
        cat.categoryId === categoryId
          ? { ...cat, recommendCnt: recommendCnt, amount: amount }
          : cat
      )
    );
  };

  return (
    <main>
      {/* <HeroInner title={"상품 추천"} currentItem={"Product Recommend"} /> */}

      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="section__title text-left">
          <div
            className="section__title"
            style={{ textAlign: "left", marginBottom: "20px" }}
          >
            <h3>카테고리 선택</h3>
          </div>
        </div>
      </div>
      <Category
        onAddCategory={handleAddCategory}
        selectedCategories={selectedCategories}
      />

      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="section__title text-left sp_40">
          <div className="section__title" style={{ textAlign: "center" }}>
            <h3>선택 된 카테고리</h3>
          </div>
        </div>
      </div>
      <RecommendCart
        recommendList={recommendList}
        handleChangeRecommendCnt={handleChangeRecommendCnt}
      />
    </main>
  );
};

export default ProductRecommend;
