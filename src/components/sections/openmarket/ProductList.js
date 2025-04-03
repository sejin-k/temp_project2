import styles from './ProductList.module.css';
import { useState, useEffect } from 'react';

const ProductList = ({ platformId, categoryDepth1Id, categoryDepth2Id }) => {

  // 오픈마켓 베스트 상품 변수
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_PRODUCTS = 10; // 초기 표시 상품 수
  const PRODUCTS_PER_PAGE = 20; // 확장 후 페이지당 상품 수

  // 베스트 상품 조회
  const getBestProducts = async (platformId, categoryDepth1Id, categoryDepth2Id) => {
    // URL 파라미터 구성
    const params = new URLSearchParams({
      platformId: platformId,
      categoryDepth1Id: categoryDepth1Id,
      categoryDepth2Id: categoryDepth2Id,
    });

    const response = await fetch(`/api/service/best-product/products?${params}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // 응답 실패 시 에러 발생
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data.products;
  }

  // 총 페이지 수 계산
  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  // 현재 표시할 상품 가져오기
  const getCurrentProducts = () => {
    if (!isExpanded) {
      return products.slice(0, INITIAL_PRODUCTS);
    }
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return products.slice(startIndex, endIndex);
  };

  // 더보기 버튼 클릭 핸들러
  const handleShowMore = () => {
    setIsExpanded(true);
  };

  // 오픈마켓 베스트 상품 조회
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getBestProducts(platformId, categoryDepth1Id, categoryDepth2Id);
        setProducts(fetchedProducts);
        setCurrentPage(1);
        setIsExpanded(false);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    if (platformId && categoryDepth1Id && categoryDepth2Id) {
      fetchProducts();
    }
  }, [platformId, categoryDepth1Id, categoryDepth2Id]);

  if (!products || products.length === 0) {
    return (
      <div className={styles.no_data_wrapper}>
        데이터 준비중입니다.
      </div>
    );
  }

  return (
    <div className={styles.product_list_container}>
      <div className="row row-cols-5">
        {getCurrentProducts().map((product, index) => (
          <div key={`${product.platformId}-${product.productId}-${index}`} className="col mb-4">
            <div className={styles.product_card}>
              <div className={styles.product_image_wrapper}>
                <span className={styles.rank_badge}>
                  {product.rank}위
                </span>
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className={styles.product_image}
                />
              </div>
              
              <div className={styles.product_info}>
                <h4 className={styles.product_title}>{product.productName}</h4>
                <div className={styles.price_wrapper}>
                  {product.listPrice !== product.price ? (
                    <>
                      <div className={styles.price_row}>
                        <span className={styles.original_price}>
                          {product.price.toLocaleString()}원
                        </span>
                        <span className={styles.discount_rate}>
                          {Math.round((1 - product.listPrice / product.price) * 100)}%
                        </span>
                      </div>
                      <div className={`${styles.current_price} ${styles.discounted}`}>
                        {product.listPrice.toLocaleString()}원
                      </div>
                    </>
                  ) : (
                    <div className={styles.current_price}>
                      {product.listPrice.toLocaleString()}원
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > 0 && (
        <div className={styles.pagination_container}>
          {!isExpanded ? (
            <button className={styles.show_more_button} onClick={handleShowMore}>
              더보기 ({INITIAL_PRODUCTS}/{products.length})
            </button>
          ) : (
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      )}
    </div>
  );
};

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (currentPage > 1) {
      pages.push(
        <button
          key="prev"
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.pagination_button}
        >
          &lt;
        </button>
      );
    }

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={styles.pagination_button}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis1" className={styles.ellipsis}>...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`${styles.pagination_button} ${currentPage === i ? styles.active : ''}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis2" className={styles.ellipsis}>...</span>);
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className={styles.pagination_button}
        >
          {totalPages}
        </button>
      );
    }

    if (currentPage < totalPages) {
      pages.push(
        <button
          key="next"
          onClick={() => onPageChange(currentPage + 1)}
          className={styles.pagination_button}
        >
          &gt;
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      {renderPageNumbers()}
    </div>
  );
};

export default ProductList; 