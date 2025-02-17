"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import allIcon from "@/assets/img/markets/all.png";
import naverIcon from "@/assets/img/markets/naver.png";
import coupangIcon from "@/assets/img/markets/coupang.png";
import elevenstreetIcon from "@/assets/img/markets/11street.png";
import gmarketIcon from "@/assets/img/markets/gmarket.png";
import auctionIcon from "@/assets/img/markets/auction.png";
import MarketSelector from "./MarketSelector";
import CategorySelector from "./CategorySelector";
import ProductList from "./ProductList";
import styles from './OpenMarketBest.module.css';

const marketIcons = {
  // 0: allIcon,
  1: naverIcon,
  2: coupangIcon,
  3: elevenstreetIcon,
  4: gmarketIcon,
  // 5: auctionIcon,
};

const OpenMarketBest = () => {
  const [marketInfo, setMarketInfo] = useState([]);
  const [category1List, setCategory1List] = useState([]);
  const [category2List, setCategory2List] = useState([]);

  const [selectedMarket, setSelectedMarket] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);

  // 
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_PRODUCTS = 10; // 초기 표시 상품 수
  const PRODUCTS_PER_PAGE = 20; // 확장 후 페이지당 상품 수

  const category1ScrollRef = useRef(null);
  const category2ScrollRef = useRef(null);

  // 베스트 상품 카테고리 조회
  const getBestProductCategories = async (platformId) => {
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

  // 초기 랜딩 시 마켓 정보 초기화
  useEffect(() => {
    const initMarketInfo = async () => {
      const markets = [];

      for (const [marketId, marketIcon] of Object.entries(marketIcons)) {
        markets.push({ platformId: parseInt(marketId), icon: marketIcon });
      }

      setMarketInfo(markets);
      setSelectedMarket(markets[0].platformId);
    };

    initMarketInfo();
  }, []);

  // 마켓 선택 시 카테고리 정보 초기화
  useEffect(() => {
    const getMarketInfo = async () => {
      if (selectedMarket) {
        const marketInfoData = await getBestProductCategories(selectedMarket);

        const newMarketInfo = marketInfo.map((market) => {
          const marketData = marketInfoData[0] && marketInfoData[0].platformId === market.platformId ? marketInfoData[0] : {};

          return {
            icon: market.icon,
            platformId: market.platformId,
            ...marketData,
          };
        });

        setMarketInfo(newMarketInfo);

        // 대/중분류 셋팅
        if (marketInfoData) {
          // 카테고리 정렬 - "전체" 카테고리를 맨 앞으로
          const sortedCategories = marketInfoData[0]?.categories?.sort((a, b) => {
            if (a.categoryDepth1Name === "전체") return -1;
            if (b.categoryDepth1Name === "전체") return 1;
            return Number(a.categoryDepth1Id) - Number(b.categoryDepth1Id);
          });

          setCategory1List(sortedCategories);
          
          // 중분류도 동일하게 "전체" 카테고리를 맨 앞으로
          const sortedChildCategories = marketInfoData[0]?.categories[0]?.childCategory?.sort((a, b) => {
            if (a.categoryDepth2Name === "전체" || a.categoryDepth2Name === a.categoryDepth1Name) return -1;
            if (b.categoryDepth2Name === "전체" || b.categoryDepth2Name === b.categoryDepth1Name) return 1;
            return Number(a.categoryDepth2Id) - Number(b.categoryDepth2Id);
          });

          setCategory2List(sortedChildCategories);

          if (sortedCategories && sortedCategories.length > 0) {
            setSelectedCategory(sortedCategories[0]?.categoryDepth1Id);
            setSelectedCategory2(sortedChildCategories[0]?.categoryDepth2Id);
          }
        } else {
          setCategory1List([]);
          setCategory2List([]);
          setSelectedCategory(null);
          setSelectedCategory2(null);
          setAllProducts([]);
        }
      }
    }
    getMarketInfo();
  }, [selectedMarket]);

  const handleMarketClick = (platformId) => {
    setSelectedMarket(platformId);
    // handleCategory1Click(category1List[0].categoryDepth1Id);
  };

  const handleCategory1Click = (categoryId) => {
    // 대분류 카테고리 선택
    setSelectedCategory(categoryId);
    const childCategories = marketInfo
      .find((market) => market.platformId === selectedMarket)
      .categories.find((category) => category.categoryDepth1Id === categoryId)
      .childCategory.sort(
        (a, b) => Number(a.categoryDepth2Id) - Number(b.categoryDepth2Id)
      )
    setCategory2List(childCategories);

    handleCategory2Click(childCategories[0].categoryDepth2Id);
  };

  const handleCategory2Click = (categoryId) => {
    // 중분류 카테고리 선택 시
    setSelectedCategory2(categoryId);
    setCurrentPage(1); // 페이지 초기화
    setIsExpanded(false); // 카테고리 변경시 접힌 상태로 초기화
  };

  // 오픈 마켓 별 베스트 상품 조회 API 호축
  useEffect(() => {
    const getProducts = async () => {
      try {
        // URL 파라미터 구성
        const params = new URLSearchParams({
          platformId: selectedMarket,
          categoryDepth1Id: selectedCategory,
          categoryDepth2Id: selectedCategory2,
        });

        const response = await fetch(
          `/api/service/best-product/products?${params}`,
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
        setAllProducts(data.products);
      } catch (error) {
        console.error("상품 조회 중 오류:", error);
        setAllProducts([]);
      }
    };

    if (selectedMarket && selectedCategory && selectedCategory2) {
      getProducts();
    }
  }, [selectedCategory2]);

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

  return (
    <section className="openmarket-best sp_top_100">
      <div className="container">
        <MarketSelector
          marketInfo={marketInfo}
          selectedMarket={selectedMarket}
          onMarketSelect={handleMarketClick}
        />

        <div className={styles.content_wrapper}>
          <CategorySelector
            category1List={category1List}
            category2List={category2List}
            selectedCategory={selectedCategory}
            selectedCategory2={selectedCategory2}
            onCategory1Select={handleCategory1Click}
            onCategory2Select={handleCategory2Click}
          />

          <ProductList
            products={getCurrentProducts()}
            isExpanded={isExpanded}
            initialProducts={INITIAL_PRODUCTS}
            onShowMore={handleShowMore}
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <style jsx>{`
          .content-wrapper {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
        `}</style>
      </div>
    </section>
  );
};

export default OpenMarketBest;
