import React, { useState } from 'react'

const CategoryCard = ({ data, onDataChange, onAddCategory, selectedCategories }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    // 카테고리 클릭 시 하위 카테고리 변경
    const handleCategoryClick = (categoryId) => {
        setActiveCategory(categoryId);
        if (onDataChange) {
            onDataChange(categoryId);
        }
    }

    // 체크박스 변경 이벤트 처리
    const handleCheckboxChange = (e, categoryId, categoryName) => {
        e.stopPropagation(); // 이벤트 버블링 방지
        if (onAddCategory) {
            onAddCategory(categoryId, categoryName, e.target.checked);
        }
    }

    return (
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 category__single__wrap">
            <div className="common__gradient__bg category__gradient single__transform">
                <div className='category_bg' style={{ 
                    height: '300px',  // 고정 높이 설정
                    overflowY: 'auto' // 스크롤 가능하도록 설정
                }}>
                    {data?.map((d) => (
                        <div 
                            className={`category_row ${activeCategory === d.categoryId ? 'active' : ''}`}
                            key={d.categoryId} 
                            onClick={() => handleCategoryClick(d.categoryId)}
                            style={{ 
                                cursor: 'pointer',
                                backgroundColor: d.categoryName ? 'var(--whiteColor)' : 'transparent' // 카테고리가 없는 경우 흰색 배경
                            }}
                        >
                            <div className="common__gradient__bg category__inner__gradient">
                                <div className="category_row__contents">
                                    <input 
                                        type="checkbox"
                                        onChange={(e) => handleCheckboxChange(e, d.categoryId, d.categoryName)}
                                        checked={selectedCategories?.some(cat => cat.categoryId === d.categoryId) || false}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ display: d.categoryName ? 'block' : 'none' }} // 카테고리가 없는 경우 체크박스 숨김
                                    />
                                    <span className="category_name">{d.categoryName || ''}</span>
                                    {d.categoryName && ( // 카테고리가 있는 경우에만 화살표 표시
                                        <svg 
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={activeCategory === d.categoryId ? 'active' : ''}
                                            style={{ 
                                                transition: 'transform 0.3s ease',
                                                transform: activeCategory === d.categoryId ? 'rotate(180deg)' : 'rotate(0deg)'
                                            }}
                                        >
                                            <path 
                                                d="M9 18L15 12L9 6" 
                                                stroke="currentColor"
                                                strokeWidth="2" 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategoryCard
