import React from "react";

function CategoryDropdown({ 
    depth,
    categoryName, 
    selectedCategories, 
    showDropdowns, 
    toggleDropdown, 
    handleCategorySelect,
    parentCategory 
}) {
    // 현재 depth에 해당하는 카테고리 데이터 결정
    const getCategoryData = () => {
        if (depth === 1) return parentCategory;
        if (!selectedCategories[`depth${depth-1}`]) return [];
        return selectedCategories[`depth${depth-1}`].childCategory || [];
    };

    // 현재 선택된 카테고리 이름 표시
    const getDisplayName = () => {
        const selected = selectedCategories[`depth${depth}`];
        if (!selected) return categoryName;
        const nameKey = `categoryDepth${depth}Name`;
        return selected[nameKey] === "선택 없음" ? "" : selected[nameKey];
    };

    return (
        <div
            className={`dropdown-container ${showDropdowns[`depth${depth}`] ? "active" : ""}`}
            style={{ flex: 1, marginLeft: depth === 1 ? 0 : "10px" }}
        >
            <div className="category-label mb-2">{categoryName}</div>
            <div
                className="category_row"
                onClick={() => toggleDropdown(depth)}
            >
                <div className="category_row__contents">
                    <span className="category_name">{getDisplayName()}</span>
                </div>
            </div>
            {showDropdowns[`depth${depth}`] && (depth === 1 || selectedCategories[`depth${depth-1}`]) && (
                <div className="category-dropdown">
                    {depth > 1 && (
                        <div
                            className="category-dropdown-item"
                            onClick={() =>
                                handleCategorySelect(depth, {
                                    [`categoryDepth${depth}Id`]: null,
                                    [`categoryDepth${depth}Name`]: "선택 없음"
                                })
                            }
                        >
                            선택 없음
                        </div>
                    )}
                    {getCategoryData().map((cat) => (
                        <div
                            key={cat[`categoryDepth${depth}Id`]}
                            className="category-dropdown-item"
                            onClick={() => handleCategorySelect(depth, cat)}
                        >
                            {cat[`categoryDepth${depth}Name`]}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategoryDropdown;