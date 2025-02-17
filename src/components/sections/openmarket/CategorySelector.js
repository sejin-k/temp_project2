import { useRef } from "react";
import styles from './CategorySelector.module.css';

const CategorySelector = ({
  category1List,
  category2List,
  selectedCategory,
  selectedCategory2,
  onCategory1Select,
  onCategory2Select,
}) => {
  const category1ScrollRef = useRef(null);
  const category2ScrollRef = useRef(null);

  const handleScroll = (direction, ref) => {
    const container = ref.current;
    const scrollAmount = container.offsetWidth;
    
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (!category1List || category1List.length === 0) {
    return (
      <div className={styles.no_data_wrapper}>
        카테고리 데이터 준비중입니다.
      </div>
    );
  }

  return (
    <div className={styles.category_selector}>
      {/* 대분류 카테고리 */}
      <div className={styles.category_group}>
        <div className={styles.scroll_container}>
          <ul ref={category1ScrollRef} className={styles.category_list}>
            {category1List?.map((category) => (
              <li key={category.categoryDepth1Id}>
                <button
                  className={`${styles.category_button} ${
                    selectedCategory === category.categoryDepth1Id ? styles.active : ""
                  }`}
                  onClick={() => onCategory1Select(category.categoryDepth1Id)}
                >
                  {category.categoryDepth1Name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleScroll("left", category1ScrollRef)}
            className={`${styles.scroll_button} ${styles.left}`}
          >
            ‹
          </button>
          <button
            onClick={() => handleScroll("right", category1ScrollRef)}
            className={`${styles.scroll_button} ${styles.right}`}
          >
            ›
          </button>
        </div>
      </div>

      {/* 중분류 카테고리 */}
      <div className={styles.category_group}>
        <div className={styles.scroll_container}>
          <ul ref={category2ScrollRef} className={styles.category_list}>
            {category2List?.map((category) => (
              <li key={category.categoryDepth2Id}>
                <button
                  className={`${styles.category_button} ${
                    selectedCategory2 === category.categoryDepth2Id ? styles.active : ""
                  }`}
                  onClick={() => onCategory2Select(category.categoryDepth2Id)}
                >
                  {category.categoryDepth2Name}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleScroll("left", category2ScrollRef)}
            className={`${styles.scroll_button} ${styles.left}`}
          >
            ‹
          </button>
          <button
            onClick={() => handleScroll("right", category2ScrollRef)}
            className={`${styles.scroll_button} ${styles.right}`}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySelector; 