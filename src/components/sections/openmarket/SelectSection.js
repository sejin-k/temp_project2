import allIcon from "@/assets/img/markets/all.png";
import naverIcon from "@/assets/img/markets/naver.png";
import coupangIcon from "@/assets/img/markets/coupang.png";
import elevenstreetIcon from "@/assets/img/markets/11street.png";
import gmarketIcon from "@/assets/img/markets/gmarket.png";
import auctionIcon from "@/assets/img/markets/auction.png";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const markets = [
    { platformId: 0, platformName: "전체", icon: allIcon },
    { platformId: 1, platformName: "네이버", icon: naverIcon },
    { platformId: 2, platformName: "쿠팡", icon: coupangIcon },
    { platformId: 3, platformName: "11번가", icon: elevenstreetIcon },
    { platformId: 4, platformName: "G마켓", icon: gmarketIcon },
    { platformId: 5, platformName: "옥션", icon: auctionIcon },
];

const SelectSection = ({ platformId, handleChangeInfo }) => {
    console.log("SelectSection 랜더링 : ", platformId);
    const [category1, setCategory1] = useState(null);
    const [category2, setCategory2] = useState(null);
    const category1ScrollRef = useRef(null);
    const category2ScrollRef = useRef(null);

    // 베스트 상품 카테고리 조회
    const getBestProductCategories = async (platformId) => {
        console.log("getBestProductCategories 함수 호출 : ", platformId);
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

    useEffect(() => {
        console.log("SelectSection useEffect [] 실행 ");

        // 오픈 마켓 별 카테고리 정보 조회 및 처리
        const bestProductCategories = async () => {
            const data = await getBestProductCategories(platformId);
            console.log("data : ", data);
            // 초기 셋팅
            if (data.length > 0) {
                setCategory1(data[0].categories);
                setCategory2(data[0].categories[0].childCategory);
            }
            else {
                setCategory1(null);
                setCategory2(null);
            }
        }

        bestProductCategories();
    }, [platformId]);

    return (
        <div>
            {/* 마켓 아이콘 선택 영역 */}
            <div>
                <ul className="nav justify-content-center">
                    {markets.map((market) => (
                        <li key={market.platformId}>
                            <button
                                className={`nav-link ${platformId === market.platformId ? "active" : ""}`}
                                onClick={() => handleChangeInfo([market.platformId, null, null])}
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
                                <span>{market.platformName}</span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 대분류 카테고리 선택 영역 */}
            <div>
                <ul className="nav" ref={category1ScrollRef}>
                    {category1?.map((category, index) => (
                        <li key={category.categoryDepth1Id}
                            style={{
                                flex: "0 0 auto",
                                borderRight:
                                    index !== category1.length - 1
                                        ? "1px solid #dee2e6"
                                        : "none",
                                padding: "0 15px",
                            }}>{category.categoryDepth1Name
                            }
                        </li>
                    ))}
                </ul>
            </div>

            {/* 중분류 카테고리 선택 영역 */}
            <div>
                <ul className="nav" ref={category2ScrollRef}>
                    {category2?.map((category, index) => (
                        <li key={category.categoryDepth2Id}
                            style={{
                                flex: "0 0 auto",
                                borderRight:
                                    index !== category2.length - 1
                                        ? "1px solid #dee2e6"
                                        : "none",
                                padding: "0 15px",
                            }}>{category.categoryDepth2Name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SelectSection;