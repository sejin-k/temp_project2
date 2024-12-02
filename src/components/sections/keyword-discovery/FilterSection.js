import FilterGroup from './FilterGroup';

const FilterSection = ({ 
  filters, 
  handleFilterClick, 
  isAllFiltersSelected, 
  onSearch,
  isLoading 
}) => {
  const filterConfigs = [
    {
      label: "검색수",
      options: ["0-5,000", "500-5,000", "0-10,000", "5,000-10,000"]
    },
    {
      label: "상품수",
      options: ["0-2,000", "0-5,000", "0-10,000", "5,000-10,000"]
    },
    {
      label: "경쟁강도",
      options: ["낮음", "중간", "높음"]
    }
  ];

  return (
    <div className="category_row mt-4">
      <div className="p-4">
        {/* 기간 필터 */}
        <div className="filter-group mb-4">
          <div className="d-flex align-items-center">
            <label className="filter-label me-4">기간</label>
            <div className="filter-buttons">
              {["최근 30일", "과거 선택"].map((value) => (
                <button
                  key={value}
                  className={`keyword-filter__button ${
                    filters.기간 === value ? "selected" : "unselected"
                  }`}
                  onClick={() => handleFilterClick("기간", value)}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="keyword-filter__section">
          {/* 검색수, 상품수, 경쟁강도 필터 */}
          {filterConfigs.map((config) => (
            <FilterGroup
              key={config.label}
              label={config.label}
              options={config.options}
              selectedValue={filters[config.label]}
              onFilterClick={handleFilterClick}
            />
          ))}

          {/* 필터 적용 버튼 */}
          <div className="d-flex justify-content-end mt-3">
            <button
              className={`keyword-filter__button ${
                isAllFiltersSelected() ? "selected" : "unselected"
              }`}
              disabled={!isAllFiltersSelected() || isLoading}
              onClick={onSearch}
            >
              {isLoading ? "조회중..." : "조회"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection; 