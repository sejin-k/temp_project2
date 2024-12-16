"use client";
import { useState, useEffect } from "react";
import CategoryDropdown from "@/components/sellpartner/category/CategoryDropdown";
import FilterSection from "./FilterSection";

const KeywordDiscovery = () => {
  const [categoryData, setCategoryData] = useState([]);
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
  const handleCategorySelect = (depth, category) => {
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
  };

  // 드롭다운 토글 핸들러
  const toggleDropdown = (depth) => {
    setShowDropdowns((prev) => ({
      ...prev,
      [`depth${depth}`]: !prev[`depth${depth}`],
    }));
  };

  // 필터 상태 관리 수정
  const [filters, setFilters] = useState({
    기간: null,
    검색수: null,
    상품수: null,
    경쟁강도: null,
  });

  // 필터 버튼 클릭 핸들러
  const handleFilterClick = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]:
        filterType === "기간"
          ? value
          : prev[filterType] === value
          ? null
          : value,
    }));
  };

  // 모든 필터가 선택되었는지 확인하는 함수
  const isAllFiltersSelected = () => {
    return filters.기간 !== null;
  };

  const [keywords, setKeywords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 필터값을 API 파라미터로 변환하는 함수
  const getApiParameters = () => {
    let selectedCategory = null;
    if (selectedCategories.depth4) {
      selectedCategory = selectedCategories.depth4.categoryDepth4Id;
    } else if (selectedCategories.depth3) {
      selectedCategory = selectedCategories.depth3.categoryDepth3Id;
    } else if (selectedCategories.depth2) {
      selectedCategory = selectedCategories.depth2.categoryDepth2Id;
    } else if (selectedCategories.depth1) {
      selectedCategory = selectedCategories.depth1.categoryDepth1Id;
    }

    // 검색수 필터 파싱
    const searchCntFilter = filters.검색수;
    const [minSearch, maxSearch] = searchCntFilter
      .split("-")
      .map((num) => parseInt(num.replace(/,/g, "")));

    // 상품수 필터 파싱
    const productCntFilter = filters.상품수;
    const [minProduct, maxProduct] = productCntFilter
      .split("-")
      .map((num) => parseInt(num.replace(/,/g, "")));

    console.log(filters.검색수?.[0]);

    // 경쟁강도 파싱
    const competitionFilter = filters.경쟁강도;

    return {
      categoryId: selectedCategory,
      minSearchCnt: minSearch,
      maxSearchCnt: maxSearch,
      minProductCnt: minProduct,
      maxProductCnt: maxProduct,
      competitionIntensity: competitionFilter,
    };
  };

  // 키워드 조회 API 호출 함수
  const fetchKeywords = async () => {
    try {
      setIsLoading(true);
      const params = getApiParameters();
      console.log(params);

      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/keyword-discovery/keyword?${queryString}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("키워드 조회에 실패했습니다");
      }

      const data = await response.json();
      setKeywords(data.keywords || []);
    } catch (error) {
      console.error("키워드 조회 중 오류:", error);
      // 에러 처리 로직 추가 가능
    } finally {
      setIsLoading(false);
    }
  };

  // 조회 버튼 클릭 핸들러
  const handleSearch = () => {
    if (isAllFiltersSelected()) {
      fetchKeywords();
    }
  };

  console.log(categoryData);
  useEffect(() => {
    // 카테고리 데이터 fetch
    const fetchCategories = async () => {
      try {
        const params = new URLSearchParams({
          platformId: 1,
        });

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_SERVER_URL}/service/product-recommend/category?${params}`,
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

  // 정렬 상태 추가
  const [sortConfig, setSortConfig] = useState({
    column: "rank",
    direction: "asc",
  });

  // 정렬 처리 함수
  const handleSort = (column) => {
    const isAsc =
      sortConfig.column === column && sortConfig.direction === "asc";
    setSortConfig({
      column,
      direction: isAsc ? "desc" : "asc",
    });

    const sortedData = [...keywords].sort((a, b) => {
      // rank는 인덱스 기반으로 정렬
      if (column === "rank") {
        const rankA = keywords.indexOf(a) + 1;
        const rankB = keywords.indexOf(b) + 1;
        return isAsc ? rankB - rankA : rankA - rankB;
      }

      // 다른 컬럼들은 기존 로직 유지
      if (
        column === "searchCnt" ||
        column === "productCnt" ||
        column === "competitionRate"
      ) {
        const valueA = parseInt(a[column]) || 0;
        const valueB = parseInt(b[column]) || 0;
        return isAsc ? rankB - rankA : rankA - rankB;
      }

      // 문자열 컬럼의 경우
      if (a[column] < b[column]) return isAsc ? 1 : -1;
      if (a[column] > b[column]) return isAsc ? -1 : 1;
      return 0;
    });

    setKeywords(sortedData);
  };

  // 정렬된 키워드 데이터 계산
  const sortedKeywords = [...keywords]
    .map((keyword) => ({
      ...keyword,
      // 경쟁률 = 검색수 / 상품수
      competitionRate:
        keyword.productCnt === 0
          ? 0
          : (keyword.searchCnt / keyword.productCnt).toFixed(2),
    }))
    .sort((a, b) => {
      if (sortConfig.column === "rank") {
        return sortConfig.direction === "asc"
          ? a.rank - b.rank
          : b.rank - a.rank;
      }
      if (sortConfig.column === "searchCnt") {
        return sortConfig.direction === "asc"
          ? a.searchCnt - b.searchCnt
          : b.searchCnt - a.searchCnt;
      }
      if (sortConfig.column === "productCnt") {
        return sortConfig.direction === "asc"
          ? a.productCnt - b.productCnt
          : b.productCnt - a.productCnt;
      }
      if (sortConfig.column === "competitionRate") {
        return sortConfig.direction === "asc"
          ? parseFloat(a.competitionRate) - parseFloat(b.competitionRate)
          : parseFloat(b.competitionRate) - parseFloat(a.competitionRate);
      }
      return 0;
    });

  // 테이블 헤더에 정렬 표시 스타일 수정
  const getSortIndicator = (column) => {
    if (sortConfig.column !== column) {
      return " ↕"; // 정렬되지 않은 상태
    }
    return sortConfig.direction === "asc" ? " ↑" : " ↓";
  };

  // 테이블 헤더 스일 추가
  const getHeaderStyle = (column) => ({
    cursor: "pointer",
    // backgroundColor: sortConfig.column === column ? "#f0f0f0" : "transparent",
    backgroundColor:
      sortConfig.column === column ? "rgb(243 238 255)" : "transparent",

    padding: "12px 8px",
    position: "relative",
    userSelect: "none", // 텍스트 선택 방지
  });

  return (
    <main className="main_wrapper" style={{ paddingTop: "100px" }}>
      <div className="container">
        {/* 카테고리 선택 영역 */}

        {/* <div className="section__title text-center sp_bottom_40">
          <div className="section__title__button">
            <span className="text__gradient" style={{ fontSize: "1.6rem" }}>
              키워드 발굴
            </span>
          </div>
        </div> */}

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

        {/* 필터 섹션 */}
        <div style={{ position: "relative", zIndex: 0 }}>
          <FilterSection
            filters={filters}
            handleFilterClick={handleFilterClick}
            isAllFiltersSelected={isAllFiltersSelected}
            onSearch={handleSearch}
            isLoading={isLoading}
          />
        </div>

        {/* 데이터 테이블 */}
        <div className="mt-4">
          <div
            className="section__title"
            style={{ textAlign: "left", marginBottom: "40px" }}
          >
            <h3>키워드 결과</h3>
          </div>

          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th
                    onClick={() => handleSort("rank")}
                    style={getHeaderStyle("rank")}
                  >
                    순위{getSortIndicator("rank")}
                  </th>
                  <th>키워드</th>
                  <th>카테고리</th>
                  <th
                    onClick={() => handleSort("searchCnt")}
                    style={getHeaderStyle("searchCnt")}
                  >
                    검색량{getSortIndicator("searchCnt")}
                  </th>
                  <th
                    onClick={() => handleSort("productCnt")}
                    style={getHeaderStyle("productCnt")}
                  >
                    상품수{getSortIndicator("productCnt")}
                  </th>
                  <th
                    onClick={() => handleSort("competitionRate")}
                    style={getHeaderStyle("competitionRate")}
                  >
                    경쟁률{getSortIndicator("competitionRate")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="6" className="text-center">
                      로딩중...
                    </td>
                  </tr>
                ) : sortedKeywords.length > 0 ? (
                  sortedKeywords.map((keyword, index) => (
                    <tr key={index}>
                      <td>
                        {sortConfig.column === "rank" &&
                        sortConfig.direction === "desc"
                          ? sortedKeywords.length - index
                          : index + 1}
                      </td>
                      <td>{keyword.keywordName}</td>
                      <td>{keyword.categoryName}</td>
                      <td>{keyword.searchCnt}</td>
                      <td>{keyword.productCnt}</td>
                      <td>{keyword.competitionRate}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">
                      데이터가 없습니다
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KeywordDiscovery;
