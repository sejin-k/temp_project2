import { useRef, useState, useEffect } from "react";
import styles from './CategorySelector.module.css';

const CategorySelector = ({ platformId, selectedCategory, onCategorySelect }) => {

  // 카테고리 스크롤을 위한 ref 설정  
  const category1ScrollRef = useRef(null); // 대분류 카테고리 스크롤 컨테이너 참조
  const category2ScrollRef = useRef(null); // 소분류 카테고리 스크롤 컨테이너 참조
  // 카테고리 상태 관리를 위한 useState 훅
  const [categories, setCategories] = useState([]);
  const [category1, setCategory1] = useState([]);
  const [category2, setCategory2] = useState([]);


  // 스크롤 이동 함수
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

  // 오픈마켓별 카테고리 정보를 API로 조회하는 함수
  const getOpenMarketInfo = async (platformId) => {
    // 오픈 마켓 별 카테고리 정보 API 호출
    const response = await fetch(`/api/service/best-product/categories?platformId=${platformId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // 응답 실패 시 에러 발생
    if (!response.ok) {
      throw new Error("Failed to fetch market info");
    }

    const marketInfoData = await response.json();

    return marketInfoData.data;
  };

  const handleCategorySelect = (categoryLevel, categoryInfo) => {
    // 대분류 카테고리 선택 시
    if (categoryLevel === 1) {
      // 자식 카테고리 정렬 - 대분류 카테고리 이름과 같은 중분류 카테고리를 맨 앞으로, 나머지는 ID 기준 오름차순
      const childCategory = categoryInfo.childCategory;
      childCategory.sort((a, b) => {
        if (a.categoryDepth2Name === categoryInfo.categoryDepth1Name) return -1;
        if (b.categoryDepth2Name === categoryInfo.categoryDepth1Name) return 1;
        return a.categoryDepth2Id - b.categoryDepth2Id;
      });

      // setCategory1(categoryInfo);
      setCategory2(childCategory);
      onCategorySelect([categoryInfo.categoryDepth1Id, childCategory[0].categoryDepth2Id]);
    } else if (categoryLevel === 2) {
      onCategorySelect([selectedCategory[0], categoryInfo.categoryDepth2Id]);
    }
  };

  // platformId가 변경될 때마다 카테고리 정보를 조회
  useEffect(() => {
    // 오픈 마켓 별 카테고리 정보 API 호출
    const fetchCategories = async () => {
      const marketInfo = await getOpenMarketInfo(platformId);
      // 카테고리 정렬 - "전체" 카테고리를 맨 앞으로, 나머지는 ID 기준 오름차순
      marketInfo.categories.sort((a, b) => {
        if (a.categoryDepth1Name === "전체") return -1;
        if (b.categoryDepth1Name === "전체") return 1;
        return a.categoryDepth1Id - b.categoryDepth1Id;
      });

      // 카테고리 정보 설정
      setCategories(marketInfo.categories);
      handleCategorySelect(1, marketInfo.categories[0]);
    };

    fetchCategories();
  }, [platformId]);

  if (!categories || categories.length === 0) {
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
            {categories.map((category) => (
              <li key={category.categoryDepth1Id}>
                <button className={`${styles.category_button} ${selectedCategory[0] === category.categoryDepth1Id ? styles.active : ''}`}
                  onClick={() => handleCategorySelect(1, category)}
                >
                  {category.categoryDepth1Name}
                </button>
              </li>
            ))}
          </ul>

          {/* 대분류 카테고리 왼쪽 스크롤 버튼 */}
          <button
            onClick={() => handleScroll("left", category1ScrollRef)}
            className={`${styles.scroll_button} ${styles.left}`}
          >
            ‹
          </button>

          {/* 대분류 카테고리 오른쪽 스크롤 버튼 */}
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
            {category2.map((category) => (
              <li key={category.categoryDepth2Id}>
                <button
                  className={`${styles.category_button} ${selectedCategory[1] === category.categoryDepth2Id ? styles.active : ''}`}
                  onClick={() => handleCategorySelect(2, category)}
                >
                  {category.categoryDepth2Name}
                </button>
              </li>
            ))}
          </ul>

          {/* 중분류 카테고리 왼쪽 스크롤 버튼 */}
          <button
            onClick={() => handleScroll("left", category2ScrollRef)}
            className={`${styles.scroll_button} ${styles.left}`}
          >
            ‹
          </button>

          {/* 중분류 카테고리 오른쪽 스크롤 버튼 */}
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