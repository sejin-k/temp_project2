"use client";
import servcieBgImage3 from "@/assets/img/service/service__bg__3.png";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

const Category = ({ isDarkBg, bg, onAddCategory, selectedCategories }) => {
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [categoryDepth2Data, setCategoryDepth2Data] = useState();
    const [categoryDepth3Data, setCategoryDepth3Data] = useState();
    const [categoryDepth4Data, setCategoryDepth4Data] = useState();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const params = new URLSearchParams({
                    platform_name: '네이버'
                });
                
                const response = await fetch(
                    `http://localhost:8000/service/product-recommend/category?${params}`,
                    {
                        method: 'GET',
                    }
                );

                if (!response.ok) {
                    throw new Error('카테고리 데이터를 불러오는데 실패했습니다');
                }

                const data = await response.json();
                setCategoryData(data.data.category_list);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
                console.error('카테고리 데이터 조회 중 오류:', err);
            }
        };

        fetchCategories();
    }, []);

    // 로딩 상태 처리
    if (isLoading) {
        return <div>로딩 중...</div>;
    }

    // 에러 상태 처리
    if (error) {
        return <div>에러: {error}</div>;
    }
    
    // 대분류 카테고리 초기화
    const categoryDepth1Data = categoryData?.map((data) => ({
        'categoryId': data.categoryDepth1Id,
        'categoryName': data.categoryDepth1Name,
        'categoryActiveYn': data.activeYn,
        'childCategory' : data.childCategory
    }));


    // 카테고리 변경 시 핸들
    const handleCategoryDepth1Change = (categoryId) => {
        setCategoryDepth4Data(null);
        setCategoryDepth3Data(null);

        const idx = categoryDepth1Data.findIndex((data) => data.categoryId === categoryId);
        const tempData = categoryDepth1Data[idx].childCategory.map((data) => ({
            'categoryId': data.categoryDepth2Id,
            'categoryName': data.categoryDepth2Name,
            'categoryActiveYn': data.activeYn,
            'childCategory' : data.childCategory
        }))

        if (tempData != undefined) {
            setCategoryDepth2Data(tempData);
        }
    };
    
    const handleCategoryDepth2Change = (categoryId) => {
        setCategoryDepth4Data(null);

        const idx = categoryDepth2Data.findIndex((data) => data.categoryId === categoryId);
        const tempData = categoryDepth2Data[idx].childCategory.map((data) => ({
            'categoryId': data.categoryDepth3Id,
            'categoryName': data.categoryDepth3Name,
            'categoryActiveYn': data.activeYn,
            'childCategory' : data.childCategory
        }))

        if (tempData != undefined) {
            setCategoryDepth3Data(tempData);
        }
    }

    const handleCategoryDepth3Change = (categoryId) => {
        const idx = categoryDepth3Data.findIndex((data) => data.categoryId === categoryId);
        const tempData = categoryDepth3Data[idx].childCategory.map((data) => ({
            'categoryId': data.categoryDepth4Id,
            'categoryName': data.categoryDepth4Name,
            'categoryActiveYn': data.activeYn,
            'childCategory' : data.childCategory
        }))

        if (tempData != undefined) {
            setCategoryDepth4Data(tempData);
        }
    }

    return (
        <div
            className="pricing sp_top_120 sp_bottom_120 special__spacing"
            style={{
                background:
                    bg === "white"
                        ? ""
                        : `${isDarkBg ? "var(--blackBlue)" : "var(--pinkcolor)"} url('${servcieBgImage3.src
                        }')`,
            }}
            id="tb__pricing"
        >
            <div className="container">
                <div className="tab-content tab__content__wrapper" id="myTabContent">
                    {categoryData?.map((data, idx) => (
                        <div
                            key={idx}
                            className={`tab-pane fade  ${idx === 0 ? "active show" : ""}`}
                            id={`projects__${idx === 0 ? "one" : "two"}`}
                            role="tabpanel"
                            aria-labelledby={`projects__${idx === 0 ? "one" : "two"}`}
                        >
                            <div className="social__wrapper">
                                <div className="row">
                                    <CategoryCard 
                                        data={categoryDepth1Data} 
                                        onDataChange={handleCategoryDepth1Change} 
                                        onAddCategory={onAddCategory}
                                        selectedCategories={selectedCategories}
                                    />
                                    <CategoryCard 
                                        data={categoryDepth2Data} 
                                        onDataChange={handleCategoryDepth2Change} 
                                        onAddCategory={onAddCategory}
                                        selectedCategories={selectedCategories}
                                    />
                                    <CategoryCard 
                                        data={categoryDepth3Data} 
                                        onDataChange={handleCategoryDepth3Change} 
                                        onAddCategory={onAddCategory}
                                        selectedCategories={selectedCategories}
                                    />
                                    <CategoryCard 
                                        data={categoryDepth4Data}
                                        onAddCategory={onAddCategory}
                                        selectedCategories={selectedCategories}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
