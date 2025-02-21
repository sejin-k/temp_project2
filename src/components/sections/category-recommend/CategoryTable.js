"use client";
import { useState } from 'react';

/**
 * 카테고리 데이터 테이블 컴포넌트
 * 카테고리별 검색량과 상품수를 정렬 가능한 테이블로 표시
 * 
 * @param {Array} recommendedCategories - 추천된 카테고리 데이터 배열
 * @param {Array} originalData - 정렬 초기화를 위한 원본 데이터
 * @param {Function} setRecommendedCategories - 카테고리 데이터 업데이트 함수
 */
const CategoryTable = ({ recommendedCategories, originalData, setRecommendedCategories }) => {
  // 정렬 상태 관리
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'desc'
  });

  /**
   * 테이블 정렬 처리 함수
   * 같은 컬럼을 연속해서 클릭하면 오름차순 -> 내림차순 -> 정렬초기화 순으로 동작
   * 
   * @param {string} key - 정렬 기준이 되는 데이터 키
   */
  const handleSort = (key) => {
    let direction = 'desc';
    
    if (sortConfig.key === key) {
      if (sortConfig.direction === 'desc') {
        direction = 'asc';
      } else if (sortConfig.direction === 'asc') {
        setSortConfig({ key: null, direction: null });
        setRecommendedCategories([...originalData]);
        return;
      }
    }
    
    setSortConfig({ key, direction });

    const sortedData = [...recommendedCategories].sort((a, b) => {
      if (direction === 'asc') {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    });
    setRecommendedCategories(sortedData);
  };

  /**
   * 정렬 방향 표시 아이콘 반환 함수
   * 
   * @param {string} key - 정렬 컬럼 키
   * @returns {string} 정렬 방향을 나타내는 이모지
   */
  const getSortArrow = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? ' ⬆️' : ' ⬇️';
    }
    return ' ⇅';
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>카테고리명</th>
            <th 
              onClick={() => handleSort('monthly_search_cnt')}
              style={{ 
                cursor: 'pointer',
                userSelect: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              월간 검색량
              <span style={{ 
                fontSize: '14px',
                opacity: sortConfig.key === 'monthly_search_cnt' ? 1 : 0.5,
                marginLeft: '4px'
              }}>
                {getSortArrow('monthly_search_cnt')}
              </span>
            </th>
            <th 
              onClick={() => handleSort('product_cnt')}
              style={{ 
                cursor: 'pointer',
                userSelect: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              상품수
              <span style={{ 
                fontSize: '14px',
                opacity: sortConfig.key === 'product_cnt' ? 1 : 0.5,
                marginLeft: '4px'
              }}>
                {getSortArrow('product_cnt')}
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {recommendedCategories.map((category, index) => (
            <tr key={index}>
              <td>{category.category_name}</td>
              <td>{category.monthly_search_cnt.toLocaleString()}</td>
              <td>{category.product_cnt.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable; 