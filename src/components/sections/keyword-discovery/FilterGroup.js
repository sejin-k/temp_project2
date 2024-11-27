const FilterGroup = ({ label, options, selectedValue, onFilterClick }) => {
  return (
    <div className="keyword-filter__group">
      <div className="d-flex align-items-center">
        <label className="keyword-filter__label me-4">{label}</label>
        <div className="keyword-filter__buttons">
          {options.map((value) => (
            <button
              key={value}
              className={`keyword-filter__button ${
                selectedValue === value ? "selected" : "unselected"
              }`}
              onClick={() => onFilterClick(label, value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterGroup; 