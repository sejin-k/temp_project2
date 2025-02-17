import styles from './ProductList.module.css';

const ProductList = ({ products, isExpanded, initialProducts, onShowMore, currentPage, totalPages, onPageChange }) => {
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
        {products.map((product, index) => (
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
            <button className={styles.show_more_button} onClick={onShowMore}>
              더보기 ({initialProducts}/{products.length})
            </button>
          ) : (
            <PaginationButtons
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
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