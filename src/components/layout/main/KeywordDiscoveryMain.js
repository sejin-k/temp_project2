"use client";
import { useState, useEffect } from "react";

const KeywordDiscoveryMain = () => {
  const [categoryData, setCategoryData] = useState([]);
  // 선택된 카테고리 상태 관리
  const [selectedCategories, setSelectedCategories] = useState({
    depth1: null,
    depth2: null, 
    depth3: null,
    depth4: null
  });

  // 드롭다운 표시 상태 관리
  const [showDropdowns, setShowDropdowns] = useState({
    depth1: false,
    depth2: false,
    depth3: false,
    depth4: false
  });
  // 카테고리 선택 핸들러
  const handleCategorySelect = (depth, category) => {
    const newSelectedCategories = { ...selectedCategories };
    
    // 선택 없음인 경우 해당 depth의 카테고리를 null로 설정
    if (category.categoryDepth2Name === '선택 없음' || 
        category.categoryDepth3Name === '선택 없음' || 
        category.categoryDepth4Name === '선택 없음') {
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
      depth4: false
    };
    if (depth < 4) {
      newShowDropdowns[`depth${depth + 1}`] = true;
    }
    setShowDropdowns(newShowDropdowns);
  };

  // 드롭다운 토글 핸들러
  const toggleDropdown = (depth) => {
    setShowDropdowns(prev => ({
      ...prev,
      [`depth${depth}`]: !prev[`depth${depth}`]
    }));
  };

  // 필터 상태 관리 수정
  const [filters, setFilters] = useState({
    기간: null,
    검색수: null,
    상품수: null,
    경쟁강도: null
  });

  // 필터 버튼 클릭 핸들러
  const handleFilterClick = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: filterType === '기간' ? value : 
                   prev[filterType] === value ? null : value
    }));
  };

  // 모든 필터가 선택되었는지 확인하는 함수
  const isAllFiltersSelected = () => {
    return filters.기간 !== null;
  };

  // 테이블 데이터
  const tableData = [
    {id: 72, 키워드: "릴라이더디자인스", 카테고리: "티셔츠", 검색수: 3300, 상품수: 1360},
    // ... 더 많은 데이터
  ];

  useEffect(() => {
    // 카테고리 데이터 fetch
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
        } catch (err) {
            console.error('카테고리 데이터 조회 중 오류:', err);
        }
    };

    fetchCategories();
}, []);

  return (
    <main className="main_wrapper">
      <div className="container">
        {/* 카테고리 선택 영역 */}
        <div className="mt-4">
          {/* 카테고리 헤더 */}
          <div className="section__title text-left sp_bottom_20">
            <div className="section__title__heading">
              <h3>카테고리</h3>
            </div>
          </div>

          {/* 카테고리 선택 영역 */}
          <div className="category__gradient">
            <div className="category_row_bg">
              <div className="d-flex justify-content-between">
                {/* 대분류 */}
                <div className={`dropdown-container ${showDropdowns.depth1 ? 'active' : ''}`} style={{flex: 1}}>
                  <div className="category-label mb-2">대분류</div>
                  <div 
                    className="category_row" 
                    onClick={() => toggleDropdown(1)}
                  >
                    <div className="category_row__contents">
                      <span className="category_name">
                        {selectedCategories.depth1?.categoryDepth1Name || '대분류'}
                      </span>
                    </div>
                  </div>
                  {showDropdowns.depth1 && (
                    <div className="category-dropdown">
                      {categoryData.map(cat => (
                        <div 
                          key={cat.categoryDepth1Id}
                          className="category-dropdown-item"
                          onClick={() => handleCategorySelect(1, cat)}
                        >
                          {cat.categoryDepth1Name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 중분류 */}
                <div className={`dropdown-container ${showDropdowns.depth2 ? 'active' : ''}`} style={{flex: 1, marginLeft: '10px'}}>
                  <div className="category-label mb-2">중분류</div>
                  <div 
                    className="category_row" 
                    onClick={() => toggleDropdown(2)}
                  >
                    <div className="category_row__contents">
                      <span className="category_name">
                        {selectedCategories.depth2?.categoryDepth2Name === '선택 없음' ? '' : 
                         selectedCategories.depth2?.categoryDepth2Name || '중분류'}
                      </span>
                    </div>
                  </div>
                  {showDropdowns.depth2 && selectedCategories.depth1 && (
                    <div className="category-dropdown">
                      <div 
                        className="category-dropdown-item"
                        onClick={() => handleCategorySelect(2, { categoryDepth2Id: null, categoryDepth2Name: '선택 없음' })}
                      >
                        선택 없음
                      </div>
                      {selectedCategories.depth1.childCategory.map(cat => (
                        <div 
                          key={cat.categoryDepth2Id}
                          className="category-dropdown-item"
                          onClick={() => handleCategorySelect(2, cat)}
                        >
                          {cat.categoryDepth2Name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 소분류 */}
                <div className={`dropdown-container ${showDropdowns.depth3 ? 'active' : ''}`} style={{flex: 1, marginLeft: '10px'}}>
                  <div className="category-label mb-2">소분류</div>
                  <div 
                    className="category_row" 
                    onClick={() => toggleDropdown(3)}
                  >
                    <div className="category_row__contents">
                      <span className="category_name">
                        {selectedCategories.depth3?.categoryDepth3Name === '선택 없음' ? '' : 
                         selectedCategories.depth3?.categoryDepth3Name || '소분류'}
                      </span>
                    </div>
                  </div>
                  {showDropdowns.depth3 && selectedCategories.depth2 && (
                    <div className="category-dropdown">
                      <div 
                        className="category-dropdown-item"
                        onClick={() => handleCategorySelect(3, { categoryDepth3Id: null, categoryDepth3Name: '선택 없음' })}
                      >
                        선택 없음
                      </div>
                      {selectedCategories.depth2.childCategory.map(cat => (
                        <div 
                          key={cat.categoryDepth3Id}
                          className="category-dropdown-item"
                          onClick={() => handleCategorySelect(3, cat)}
                        >
                          {cat.categoryDepth3Name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 세분류 */}
                <div className={`dropdown-container ${showDropdowns.depth4 ? 'active' : ''}`} style={{flex: 1, marginLeft: '10px'}}>
                  <div className="category-label mb-2">세분류</div>
                  <div 
                    className="category_row" 
                    onClick={() => toggleDropdown(4)}
                  >
                    <div className="category_row__contents">
                      <span className="category_name">
                        {selectedCategories.depth4?.categoryDepth4Name === '선택 없음' ? '' : 
                         selectedCategories.depth4?.categoryDepth4Name || '세분류'}
                      </span>
                    </div>
                  </div>
                  {showDropdowns.depth4 && selectedCategories.depth3 && (
                    <div className="category-dropdown">
                      <div 
                        className="category-dropdown-item"
                        onClick={() => handleCategorySelect(4, { categoryDepth4Id: null, categoryDepth4Name: '선택 없음' })}
                      >
                        선택 없음
                      </div>
                      {selectedCategories.depth3.childCategory.map(cat => (
                        <div 
                          key={cat.categoryDepth4Id}
                          className="category-dropdown-item"
                          onClick={() => handleCategorySelect(4, cat)}
                        >
                          {cat.categoryDepth4Name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 필터 섹션 */}
        <div className="category_row mt-4">
          <div className="p-4">
            {/* 기간 필터 */}
            <div className="filter-group mb-4">
              <div className="d-flex align-items-center">
                <label className="filter-label me-4">기간</label>
                <div className="filter-buttons">
                  <button 
                    className={`keyword-filter__button ${filters.기간 === '최근 30일' ? 'selected' : 'unselected'}`}
                    onClick={() => handleFilterClick('기간', '최근 30일')}
                  >
                    최근 30일
                  </button>
                  <button 
                    className={`keyword-filter__button ${filters.기간 === '과거 선택' ? 'selected' : 'unselected'}`}
                    onClick={() => handleFilterClick('기간', '과거 선택')}
                  >
                    과거 선택
                  </button>
                </div>
              </div>
            </div>

            <div className="keyword-filter__section">
              {/* 검색 필터 */}
              <div className="keyword-filter__group">
                <div className="d-flex align-items-center">
                  <label className="keyword-filter__label me-4">검색수</label>
                  <div className="keyword-filter__buttons">
                    {['0-5,000', '500-5,000', '0-10,000', '5,000-10,000'].map((value) => (
                      <button 
                        key={value}
                        className={`keyword-filter__button ${filters.검색수 === value ? 'selected' : 'unselected'}`}
                        onClick={() => handleFilterClick('검색수', value)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 상품수 필터 */}
              <div className="keyword-filter__group">
                <div className="d-flex align-items-center">
                  <label className="keyword-filter__label me-4">상품수</label>
                  <div className="keyword-filter__buttons">
                    {['0-2,000', '0-5,000', '0-10,000', '5,000-10,000'].map((value) => (
                      <button 
                        key={value}
                        className={`keyword-filter__button ${filters.상품수 === value ? 'selected' : 'unselected'}`}
                        onClick={() => handleFilterClick('상품수', value)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 경쟁강도 필터 */}
              <div className="keyword-filter__group">
                <div className="d-flex align-items-center">
                  <label className="keyword-filter__label me-4">경쟁강도</label>
                  <div className="keyword-filter__buttons">
                    {['0-2', '0-5', '0-10'].map((value) => (
                      <button 
                        key={value}
                        className={`keyword-filter__button ${filters.경쟁강도 === value ? 'selected' : 'unselected'}`}
                        onClick={() => handleFilterClick('경쟁강도', value)}
                      >
                        {value}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 필터 적용 버튼 */}
              <div className="d-flex justify-content-end mt-3">
                <button 
                  className={`keyword-filter__button ${isAllFiltersSelected() ? 'selected' : 'unselected'}`}
                  disabled={!isAllFiltersSelected()}
                >
                  조회
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 데이터 테이블 */}
        <div className="mt-4">
          {/* 키워드 발굴 헤더 */}
          <div className="section__title text-left sp_bottom_20">
            <div className="section__title__heading">
              <h3>키워드 발굴</h3>
            </div>
          </div>

          {/* 테이블 */}
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>순위</th>
                  <th>키워드</th>
                  <th>카테고리</th>
                  <th>검색수</th>
                  <th>상품수</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.키워드}</td>
                    <td>{row.카테고리}</td>
                    <td>{row.검색수}</td>
                    <td>{row.상품수}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default KeywordDiscoveryMain;