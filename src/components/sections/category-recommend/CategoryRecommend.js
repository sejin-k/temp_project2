"use client";
import { useState } from "react";
import CategorySelect from "./CategorySelect";
import CategoryGraph from "./CategoryGraph";
import CategoryTable from "./CategoryTable";
import { useRouter } from "next/navigation";

const CategoryRecommend = () => {
  const [recommendedCategories, setRecommendedCategories] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const router = useRouter();

  // 카테고리 추천 API 호출 함수
  const fetchRecommendedCategories = async (categories) => {
    try {
      let categoryIds = [];
      
      if (categories.depth1) {
        categoryIds = []
        const depth1Children = categories.depth1.childCategory || [];
        categoryIds.push(...depth1Children.map(cat => cat.categoryDepth2Id));
      }
      
      if (categories.depth2) {
        categoryIds = []
        const depth2Children = categories.depth2.childCategory || [];
        categoryIds.push(...depth2Children.map(cat => cat.categoryDepth3Id));
      }

      if (categories.depth3) {
        categoryIds = []
        const depth3Children = categories.depth3.childCategory || [];
        categoryIds.push(...depth3Children.map(cat => cat.categoryDepth4Id));
      }

      if (categoryIds.length > 0) {
        const params = new URLSearchParams({
          categoryIds: categoryIds.join(','),
          platformId: 1,
        });

        const response = await fetch(`/api/service/category-recommend?${params}`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("카테고리 추천 데이터를 불러오는데 실패했습니다");
        }

        const data = await response.json();

        if (data.length > 0) {
          setRecommendedCategories(data);
          setOriginalData(data);
        }
      } else {
        router.push("/empty/category", { scroll: false });
      }
    } catch (err) {
      console.error("카테고리 추천 데이터 조회 중 오류:", err);
    }
  };

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
      <CategorySelect onCategorySelect={fetchRecommendedCategories} />

      <div className="mt-4">
        {recommendedCategories.length > 0 ? (
          <div className="mt-4">
            <div className="section__title" style={{ textAlign: "left", marginBottom: "20px" }}>
              <h3>추천 카테고리</h3>
            </div>
            
            <CategoryGraph recommendedCategories={recommendedCategories} />
            
            <CategoryTable 
              recommendedCategories={recommendedCategories}
              originalData={originalData}
              setRecommendedCategories={setRecommendedCategories}
            />
          </div>
        ) : (
          <div className="mt-4">
            <div className="" role="alert" style={{ textAlign: "center", background: "#f8f9fa", color: "#666" }}>
              비교할 하위 카테고리가 존재하지 않습니다.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryRecommend;
