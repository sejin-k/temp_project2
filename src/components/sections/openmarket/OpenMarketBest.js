"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const OpenMarketBest = () => {
  const [selectedMarket, setSelectedMarket] = useState("naver");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_PRODUCTS = 10; // 초기 표시 상품 수
  const PRODUCTS_PER_PAGE = 20; // 확장 후 페이지당 상품 수

  // 100개의 더미 상품 데이터 생성 함수
  const generateDummyProducts = (category) => {
    const products = [];
    for (let i = 1; i <= 100; i++) {
      const basePrice = Math.floor(Math.random() * 900000) + 100000;
      const discountRate = Math.floor(Math.random() * 60) + 5;
      const originalPrice = Math.floor(basePrice / (1 - discountRate / 100));
      const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
      const reviewCount = Math.floor(Math.random() * 90000) + 1000;

      products.push({
        id: i,
        title: `${category} 인기상품 ${i}호`,
        price: `${basePrice.toLocaleString()}원`,
        originalPrice: `${originalPrice.toLocaleString()}원`,
        discountRate: `${discountRate}%`,
        mall: `판매처 ${i}`,
        rating: parseFloat(rating),
        reviewCount: reviewCount,
        category: category,
        imageUrl: `https://picsum.photos/200/200?random=${i}`,
      });
    }
    return products;
  };

  // 네이버 쇼핑 더미데이터
  const dummyProducts = {
    naver: {
      all: generateDummyProducts("all"),
      fashion: generateDummyProducts("fashion"),
      beauty: generateDummyProducts("beauty"),
      digital: generateDummyProducts("digital"),
      food: generateDummyProducts("food"),
      home: generateDummyProducts("home"),
    },
  };

  const markets = [
    { id: "naver", name: "네이버", icon: "/images/markets/naver.png" },
    { id: "coupang", name: "쿠팡", icon: "/images/markets/coupang.png" },
    { id: "11st", name: "11번가", icon: "/images/markets/11st.png" },
    { id: "gmarket", name: "G마켓", icon: "/images/markets/gmarket.png" },
  ];

  const categories = [
    { id: "all", name: "전체" },
    { id: "fashion", name: "패션의류" },
    { id: "beauty", name: "화장품/미용" },
    { id: "digital", name: "디지털/가전" },
    { id: "food", name: "식품" },
    { id: "home", name: "가구/인테리어" },
  ];

  // 마켓이나 카테고리 변경시 상품 목록 업데이트
  useEffect(() => {
    if (selectedMarket === "naver") {
      const products =
        selectedCategory === "all"
          ? dummyProducts.naver.all
          : dummyProducts.naver[selectedCategory] || [];
      setAllProducts(products);
      setCurrentPage(1);
      setIsExpanded(false); // 카테고리 변경시 접힌 상태로 초기화
    } else {
      setAllProducts([]);
    }
  }, [selectedMarket, selectedCategory]);

  // 총 페이지 수 계산
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

  // 현재 표시할 상품 가져오기
  const getCurrentProducts = () => {
    if (!isExpanded) {
      return allProducts.slice(0, INITIAL_PRODUCTS);
    }
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const endIndex = startIndex + PRODUCTS_PER_PAGE;
    return allProducts.slice(startIndex, endIndex);
  };

  // 더보기 버튼 클릭 핸들러
  const handleShowMore = () => {
    setIsExpanded(true);
  };

  // 페이지네이션 버튼 생성
  const renderPaginationButtons = () => {
    const buttons = [];

    // 이전 페이지 버튼
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => setCurrentPage(currentPage - 1)}
          className="btn btn-outline-primary mx-1"
        >
          &lt;
        </button>
      );
    }

    // 페이지 번호 버튼
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`btn ${
            currentPage === i ? "btn-primary" : "btn-outline-primary"
          } mx-1`}
        >
          {i}
        </button>
      );
    }

    // 다음 페이지 버튼
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => setCurrentPage(currentPage + 1)}
          className="btn btn-outline-primary mx-1"
        >
          &gt;
        </button>
      );
    }

    return buttons;
  };

  return (
    <section className="openmarket-best sp_top_100">
      <div className="container">
        <div className="section__title text-center sp_bottom_40">
          <div className="section__title__button">
            <span className="text__gradient">오픈마켓 베스트</span>
          </div>
          <div className="section__title__heading">
            <h2>인기 상품 모아보기</h2>
          </div>
        </div>

        {/* 마켓 선택 탭 */}
        <div className="market-tabs sp_bottom_30">
          <ul className="nav justify-content-center">
            {markets.map((market) => (
              <li key={market.id} className="nav-item">
                <button
                  className={`nav-link ${
                    selectedMarket === market.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedMarket(market.id)}
                >
                  <span>{market.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 카테고리 선택 */}
        <div className="category-tabs sp_bottom_30">
          <ul className="nav justify-content-center">
            {categories.map((category) => (
              <li key={category.id} className="nav-item">
                <button
                  className={`nav-link ${
                    selectedCategory === category.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* 상품 목록 */}
        <div className="row row-cols-5">
          {getCurrentProducts().map((product) => (
            <div key={product.id} className="col mb-4">
              <div className="product-card border rounded">
                {/* 상품 이미지 */}
                <div
                  className="product-image mb-3"
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* 상품 정보 */}
                <div className="product-info p-3">
                  <p
                    className="mall mb-2"
                    style={{
                      fontSize: "13px",
                      color: "#666",
                    }}
                  >
                    {product.mall}
                  </p>

                  <h4
                    className="title mb-2"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      height: "40px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      lineHeight: "1.4",
                    }}
                  >
                    {product.title}
                  </h4>

                  <div className="price-info mb-2">
                    <span
                      className="discount-rate text-danger me-2"
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                    >
                      {product.discountRate}
                    </span>
                    <span
                      className="current-price fw-bold"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {product.price}
                    </span>
                    <div
                      className="original-price text-muted text-decoration-line-through"
                      style={{
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {product.originalPrice}
                    </div>
                  </div>

                  <div
                    className="rating-info"
                    style={{
                      fontSize: "13px",
                      color: "#666",
                    }}
                  >
                    <span className="stars text-warning me-1">★</span>
                    <span className="rating me-2">{product.rating}</span>
                    <span className="review-count text-muted">
                      리뷰 {product.reviewCount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 더보기 버튼 또는 페이지네이션 */}
        {allProducts.length > 0 && (
          <div className="text-center mt-4 mb-5">
            {!isExpanded ? (
              <button
                className="btn btn-outline-primary px-5"
                onClick={handleShowMore}
              >
                더보기 ({INITIAL_PRODUCTS}/{allProducts.length})
              </button>
            ) : (
              <div className="pagination-buttons">
                {renderPaginationButtons()}
              </div>
            )}
          </div>
        )}

        {allProducts.length === 0 && selectedMarket !== "naver" && (
          <div className="col-12 text-center py-5">
            <p>해당 마켓의 데이터는 준비 중입니다.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default OpenMarketBest;
