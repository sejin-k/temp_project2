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

const OpenMarketBest = () => {
  // 오픈마켓 변수
  const openMarketIcons = [ // 오픈 마켓 정보
    { platformName: "네이버", platformId: 1, icon: naverIcon, selected: true },
    { platformName: "쿠팡", platformId: 2, icon: coupangIcon, selected: false },
    { platformName: "11번가", platformId: 3, icon: elevenstreetIcon, selected: false },
    { platformName: "g마켓", platformId: 4, icon: gmarketIcon, selected: false },
  ]
  const [openMarketInfo, setOpenMarketInfo] = useState(openMarketIcons);

  // 카테고리 변수
  const [selectedCategory, setSelectedCategory] = useState(null);


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

  return (
    <section className="openmarket-best sp_top_100">
      <div className="container">
        <MarketSelector
          openMarketInfo={openMarketInfo}
          onChangeMarket={setOpenMarketInfo}
        />

        <div className={styles.content_wrapper}>
          <CategorySelector
            platformId={openMarketInfo.find(market => market.selected).platformId}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          <ProductList
            platformId={openMarketInfo.find(market => market.selected).platformId}
            categoryDepth1Id={selectedCategory?.[0]}
            categoryDepth2Id={selectedCategory?.[1]}
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
