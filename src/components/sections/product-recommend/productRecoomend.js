"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
// import RecommendCart
import Category from "@/components/sections/category/Category";
import RecommendCart from "@/components/sections/recommendCart/recommendCart";
import HeroInner from "@/components/sections/hero-banners/HeroInner";

const ProductRecommend = () => {
  const [recommendList, setRecommendList] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleAddCategory = (categoryId, categoryName, isChecked) => {
    if (isChecked) {
      // 카테고리 추가
      const newCategory = {
        categoryId: categoryId,
        categoryName: categoryName,
        recommendCnt: 30,
        minPrice: 0,
        maxPrice: 100000,
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

  return (
    <main>
      <HeroInner title={"상품 추천"} currentItem={"Product Recommend"} />

      <div className="container">
        <div className="section__title text-left sp_bottom_40">
          <div className="section__title__heading">
            <h3>카테고리</h3>
          </div>
        </div>
      </div>
      <Category
        onAddCategory={handleAddCategory}
        selectedCategories={selectedCategories}
      />

      <div className="container">
        <div className="section__title text-left sp_bottom_40">
          <div className="section__title__heading">
            <h3>추천 카테고리</h3>
          </div>
        </div>
      </div>
      <RecommendCart recommendList={recommendList} />

    </main>
  );
};

export default ProductRecommend;
