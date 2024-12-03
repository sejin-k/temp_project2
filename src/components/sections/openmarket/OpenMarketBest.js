"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import allIcon from "@/assets/img/markets/all.png";
import naverIcon from "@/assets/img/markets/naver.png";
import coupangIcon from "@/assets/img/markets/coupang.png";
import elevenstreetIcon from "@/assets/img/markets/11street.png";
import gmarketIcon from "@/assets/img/markets/gmarket.png";
import auctionIcon from "@/assets/img/markets/auction.png";

const marketIcons = {
    0: allIcon,
    1: naverIcon,
    2: coupangIcon,
    3: elevenstreetIcon,
    4: gmarketIcon,
    5: auctionIcon,
};

const OpenMarketBest = () => {
    const [marketInfo, setMarketInfo] = useState([]);
    const [category1List, setCategory1List] = useState([]);
    const [category2List, setCategory2List] = useState([]);

    const [selectedMarket, setSelectedMarket] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedCategory2, setSelectedCategory2] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [allProducts, setAllProducts] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const INITIAL_PRODUCTS = 10; // 초기 표시 상품 수
    const PRODUCTS_PER_PAGE = 20; // 확장 후 페이지당 상품 수

    // 오픈 마켓 별 카테고리 정보 가져오기
    useEffect(() => {
        const getMarketInfo = async () => {
            // 오픈 마켓 별 카테고리 정보 API 호출
            const response = await fetch('/api/service/best-product/categories')

            // 응답 실패 시 에러 발생
            if (!response.ok) {
                throw new Error('Failed to fetch market info');
            }

            const marketInfoData = await response.json();

            // 마켓 아이콘 맵핑
            marketInfoData.data.map((market) => {
                market.icon = marketIcons[market.platformId];
            });

            setMarketInfo(marketInfoData.data);
            setCategory1List(marketInfoData.data[0].categories.sort((a, b) =>
                Number(a.categoryDepth1Id) - Number(b.categoryDepth1Id)));
            setCategory2List(marketInfoData.data[0].categories[0].childCategory.sort((a, b) =>
                Number(a.categoryDepth2Id) - Number(b.categoryDepth2Id)));

            // 초기 선택 마켓 설정
            setSelectedMarket(marketInfoData.data[0].platformId);
            setSelectedCategory(marketInfoData.data[0].categories[0].categoryDepth1Id);
            setSelectedCategory2(marketInfoData.data[0].categories[0].childCategory[0].categoryDepth2Id);

        }

        getMarketInfo();
    }, []);

    const handleMarketClick = (platformId) => {
        setSelectedMarket(platformId);
        setCategory1List(marketInfo.find(
            (market) => market.platformId === platformId).categories.sort((a, b) =>
                Number(a.categoryDepth1Id) - Number(b.categoryDepth1Id)));
        handleCategory1Click(category1List[0].categoryDepth1Id);
    }

    const handleCategory1Click = (categoryId) => {
        // 대분류 카테고리 선택
        setSelectedCategory(categoryId);
        setCategory2List(marketInfo.find(
            (market) => market.platformId === selectedMarket).categories.find(
                (category) => category.categoryDepth1Id === categoryId).childCategory.sort((a, b) =>
                    Number(a.categoryDepth2Id) - Number(b.categoryDepth2Id)));

        handleCategory2Click(category2List[0].categoryDepth2Id);
    }

    const handleCategory2Click = (categoryId) => {
        // 중분류 카테고리 선택 시
        setSelectedCategory2(categoryId);
        setCurrentPage(1); // 페이지 초기화
        setIsExpanded(false); // 카테고리 변경시 접힌 상태로 초기화
    }

    // 오픈 마켓 별 베스트 상품 조회 API 호축
    useEffect(() => {
        const getProducts = async () => {
            try {
                // URL 파라미터 구성
                const params = new URLSearchParams({
                    platformId: selectedMarket,
                    categoryDepth1Id: selectedCategory,
                    categoryDepth2Id: selectedCategory2
                });

                const response = await fetch(
                    `/api/service/best-product/products?${params}`,
                    {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // 응답 실패 시 에러 발생
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setAllProducts(data.products);
            } catch (error) {
                console.error('상품 조회 중 오류:', error);
                setAllProducts([]);
            }
        }

        if (selectedMarket && selectedCategory && selectedCategory2) {
            getProducts();
        }
    }, [selectedCategory2]);

    
    // 마켓이나 카테고리 변경시 상품 목록 업데이트
    // useEffect(() => {
    //   if (selectedMarket === "naver") {
    //     const products =
    //       selectedCategory === "all"
    //         ? dummyProducts.naver.all
    //         : dummyProducts.naver[selectedCategory] || [];
    //     setAllProducts(products);
    //     setCurrentPage(1);
    //     setIsExpanded(false); // 카테고리 변경시 접힌 상태로 초기화
    //   } else {
    //     setAllProducts([]);
    //   }
    // }, [selectedMarket, selectedCategory]);

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
                    className={`btn ${currentPage === i ? "btn-primary" : "btn-outline-primary"
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
                        {marketInfo.map((market) => (
                            <li key={market.platformId} className="nav-item">
                                <button
                                    className={`nav-link ${selectedMarket === market.platformId ? "active" : ""
                                        }`}
                                    onClick={() => handleMarketClick(market.platformId)}
                                >
                                    <Image
                                        src={market.icon}
                                        alt={market.platformName}
                                        width={100}
                                        height={100}
                                        style={{
                                            display: "block",
                                            margin: "0 auto 8px auto",
                                            objectFit: "contain",
                                        }}
                                    />
                                    <span>{market.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 카테고리 선택 */}
                <div className="category-tabs sp_bottom_30">
                    {/* 대분류 카테고리 */}
                    <ul className="nav justify-content-center">
                        {category1List.map((category) => (
                            <li key={category.categoryDepth1Id} className="nav-item">
                                <button
                                    className={`nav-link ${selectedCategory === category.categoryDepth1Id ? "active" : ""}`}
                                    onClick={() => handleCategory1Click(category.categoryDepth1Id)}
                                    style={{
                                        backgroundColor: selectedCategory === category.categoryDepth1Id ? '#007bff' : 'transparent',
                                        color: selectedCategory === category.categoryDepth1Id ? '#fff' : '#000',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {category.categoryDepth1Name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* 중분류 카테고리 */}
                    <ul className="nav justify-content-center">
                        {category2List.map((category) => (
                            <li key={category.categoryDepth2Id} className="nav-item">
                                <button
                                    className={`nav-link ${selectedCategory2 === category.categoryDepth2Id ? "active" : ""}`}
                                    onClick={() => handleCategory2Click(category.categoryDepth2Id)}
                                    style={{
                                        backgroundColor: selectedCategory2 === category.categoryDepth2Id ? '#007bff' : 'transparent',
                                        color: selectedCategory2 === category.categoryDepth2Id ? '#fff' : '#000',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {category.categoryDepth2Name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>



                {/* 상품 목록 */}
                <div className="row row-cols-5">
                    {getCurrentProducts().map((product) => (
                        <div key={product.rank} className="col mb-4">
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
                                        alt={product.productName}
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
                                    {/* <p
                    className="mall mb-2"
                    style={{
                      fontSize: "13px",
                      color: "#666",
                    }}
                  >
                    {product.mall}
                  </p> */}

                                    <h4
                                        className="title mb-2"
                                        style={{
                                            fontSize: "15px",
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
                                        {product.productName}
                                    </h4>
                                    <div
                                            className="original-price text-muted text-decoration-line-through"
                                            style={{
                                                fontSize: "12px",
                                                marginTop: "4px",
                                            }}
                                        >   
                                            
                                            {product.listPrice}
                                        </div>
                                    <div className="price-info mb-2">
                                        <span
                                            className="discount-rate text-danger me-2"
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {product.listPrice === 0 ? 0 : Math.round((1 - product.price / product.listPrice) * 100)}%
                                        </span>
                                        <span
                                            className="current-price fw-bold"
                                            style={{
                                                fontSize: "16px",
                                            }}
                                        >
                                            {product.price}
                                        </span>

                                    </div>

                                    {/* <div
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
                  </div> */}
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
