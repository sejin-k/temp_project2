"use client";
import { useState, useEffect } from "react";
import CategoryDropdown from "@/components/sellpartner/category/CategoryDropdown";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Chart.js 등록
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CategoryRecommend = () => {
    
  const [categoryData, setCategoryData] = useState([]);
  const [recommendedCategories, setRecommendedCategories] = useState([]); // 추천 결과 저장
  // 선택된 카테고리 상태 관리
  const [selectedCategories, setSelectedCategories] = useState({
    depth1: null,
    depth2: null,
    depth3: null,
    depth4: null,
  });

  // 드롭다운 표시 상태 관리
  const [showDropdowns, setShowDropdowns] = useState({
    depth1: false,
    depth2: false,
    depth3: false,
    depth4: false,
  });
  // 카테고리 선택 핸들러
  const handleCategorySelect = async (depth, category) => {
    const newSelectedCategories = { ...selectedCategories };

    // 선택 없음인 경우 해당 depth의 카테고리를 null로 설정
    if (
      category.categoryDepth2Name === "선택 없음" ||
      category.categoryDepth3Name === "선택 없음" ||
      category.categoryDepth4Name === "선택 없음"
    ) {
      newSelectedCategories[`depth${depth}`] = null;
    } else {
      newSelectedCategories[`depth${depth}`] = category;
    }

    // 하위 depth들은 초기화
    for (let i = depth + 1; i <= 4; i++) {
      newSelectedCategories[`depth${i}`] = null;
    }

    setSelectedCategories(newSelectedCategories);

    // 현재 depth의 드롭다운은 닫고, 다음 depth의 드롭다운은 열기
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

    // 카테고리 추천 API 호출
    await fetchRecommendedCategories(newSelectedCategories);
  };

  // 드롭다운 토글 핸들러
  const toggleDropdown = (depth) => {
    setShowDropdowns((prev) => ({
      ...prev,
      [`depth${depth}`]: !prev[`depth${depth}`],
    }));
  };

  // 카테고리 추천 API 호출 함수
  const fetchRecommendedCategories = async (categories) => {
    try {
      // 선택된 카테고리들의 ID 추출
      let categoryIds = [];
      
      // depth1이 선택된 경우
      if (categories.depth1) {
        categoryIds = []
        const depth1Children = categories.depth1.childCategory || [];
        categoryIds.push(...depth1Children.map(cat => cat.categoryDepth2Id));
      }
      
      // depth2가 선택된 경우
      if (categories.depth2) {
        categoryIds = []
        const depth2Children = categories.depth2.childCategory || [];
        categoryIds.push(...depth2Children.map(cat => cat.categoryDepth3Id));
      }

      // depth3가 선택된 경우
      if (categories.depth3) {
        categoryIds = []
        const depth3Children = categories.depth3.childCategory || [];
        categoryIds.push(...depth3Children.map(cat => cat.categoryDepth4Id));
      }

      // 카테고리 ID가 있는 경우에만 API 호출
      if (categoryIds.length > 0) {
        const params = new URLSearchParams({
          categoryIds: categoryIds.join(','),
          platformId: 1,
        });

        const response = await fetch(
          `/api/service/category-recommend?${params}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("카테고리 추천 데이터를 불러오는데 실패했습니다");
        }

        const data = await response.json();
        setRecommendedCategories(data || []);
      } else {
        setRecommendedCategories([]); // 선택된 카테고리가 없으면 추천 목록 초기화
      }
    } catch (err) {
      console.error("카테고리 추천 데이터 조회 중 오류:", err);
    }
  };

  useEffect(() => {
    // 카테고리 데이터 fetch
    const fetchCategories = async () => {
      try {
        const params = new URLSearchParams({
          platformId: 1,
        });

        const response = await fetch(
          `/api/service/categories?platformId=${1}`,
          {
            method: "GET",
          }
        );

        if (!response.ok) {
          throw new Error("카테고리 데이터를 불러오는데 실패했습니다");
        }

        const data = await response.json();
        setCategoryData(data.categoryList);
      } catch (err) {
        console.error("카테고리 데이터 조회 중 오류:", err);
      }
    };

    fetchCategories();
  }, []);

  // 차트 옵션 수정
  const options = {
    responsive: true,
    maintainAspectRatio: false,  // 추가: 종횡비 유지 해제
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '카테고리별 검색량 및 상품수',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {  // x축 옵션 추가
        ticks: {
          minRotation: 45  // 레이블 45도 회전
        }
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: '검색량',
        },
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: '상품수',
        },
        ticks: {
          callback: function(value) {
            return value.toLocaleString();
          }
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  // 차트 데이터 생성 함수
  const getChartData = () => {
    console.log(recommendedCategories);
    return {
      labels: recommendedCategories.map(cat => cat.category_name),
      datasets: [
        {
          label: '월간 검색량',
          data: recommendedCategories.map(cat => cat.monthly_search_cnt),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
          yAxisID: 'y',
          datalabels: {
            align: 'end',
            anchor: 'end',
            formatter: (value) => value.toLocaleString()
          }
        },
        {
          label: '상품수',
          data: recommendedCategories.map(cat => cat.product_cnt),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          yAxisID: 'y1',
          datalabels: {
            align: 'end',
            anchor: 'end',
            formatter: (value) => value.toLocaleString()
          }
        },
      ],
    };
  };

  // Chart.js 플러그인 설정
  const plugins = [{
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      
      chart.data.datasets.forEach((dataset, i) => {
        const meta = chart.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
          const data = dataset.data[index].toLocaleString();
          const position = bar.getCenterPoint();
          
          // 데이터 값이 큰 경우 막대 안에, 작은 경우 막대 위에 표시
          const barHeight = bar.height;
          const yPos = position.y - barHeight / 2; // 기본적으로 막대 위에 표시
          
          ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
          ctx.fillText(data, position.x, yPos);
        });
      });
      ctx.restore();
    }
  }];

  return (
    <div className="container" style={{ paddingTop: "100px" }}>
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

        <div className="mt-4">
            {/* 추천 결과 표시 영역 수정 */}
            {recommendedCategories.length > 0 && (
            <div className="mt-4">
                <div className="section__title" style={{ textAlign: "left", marginBottom: "20px" }}>
                <h3>추천 카테고리</h3>
                </div>
                
                {/* 차트 영역 수정 */}
                <div className="chart-scroll-container" style={{ 
                width: '100%',
                overflowX: 'auto',
                overflowY: 'hidden',
                marginBottom: '30px'
                }}>
                <div style={{ 
                    height: '400px',
                    minWidth: `${Math.max(800, recommendedCategories.length * 100)}px` // 최소 800px, 데이터 개수에 따라 증가
                }}>
                    <Bar options={options} data={getChartData()} plugins={plugins} />
                </div>
                </div>
                
                {/* 테이블 목록 */}
                <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>카테고리명</th>
                        <th>월간 검색량</th>
                        <th>상품수</th>
                        <th>기준일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {recommendedCategories.map((category, index) => (
                        <tr key={index}>
                        <td>{category.category_name}</td>
                        <td>{category.monthly_search_cnt.toLocaleString()}</td>
                        <td>{category.product_cnt.toLocaleString()}</td>
                        <td>{new Date(category.retrieved_dt).toLocaleDateString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            )}
        </div>
    </div>
  );
};

export default CategoryRecommend;
