"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import allIcon from '@/assets/img/markets/naver.png';
import naverIcon from '@/assets/img/markets/naver.png';
import coupangIcon from '@/assets/img/markets/coupang.png';
import elevenIcon from '@/assets/img/markets/11street.png';
import auctionIcon from '@/assets/img/markets/11street.png';
import gmarketIcon from '@/assets/img/markets/gmarket.png';
import tmonIcon from '@/assets/img/markets/11street.png';

const marketplaces = [
    {
        id: 1,
        name: '전체',
        icon: allIcon,
        link: '/all'
    },
    {
        id: 2,
        name: '네이버',
        icon: naverIcon,
        link: '/naver'
    },
    {
        id: 3,
        name: '쿠팡',
        icon: coupangIcon,
        link: '/coupang'
    },
    {
        id: 4,
        name: '11번가',
        icon: elevenIcon,
        link: '/11st'
    },
    {
        id: 5,
        name: '옥션',
        icon: auctionIcon,
        link: '/auction'
    },
    {
        id: 6,
        name: 'G마켓',
        icon: gmarketIcon,
        link: '/gmarket'
    },
    {
        id: 7,
        name: '티몬',
        icon: tmonIcon,
        link: '/tmon'
    }
];

const MarketplaceNav = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 6; // 한 번에 보여줄 아이템 수

    const handlePrev = () => {
        setStartIndex(prev => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setStartIndex(prev => Math.min(marketplaces.length - itemsToShow, prev + 1));
    };

    return (
        <div className="marketplace-nav-container">
            <button 
                className="nav-arrow left"
                onClick={handlePrev}
                disabled={startIndex === 0}
            >
                ›
            </button>

            <div className="marketplace-items">
                {marketplaces.slice(startIndex, startIndex + itemsToShow).map((market) => (
                    <Link href={market.link} key={market.id} className="marketplace-item">
                        <div className="marketplace-icon">
                            <Image
                                src={market.icon}
                                alt={market.name}
                                width={40}
                                height={40}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className="marketplace-name">{market.name}</span>
                    </Link>
                ))}
            </div>

            <button 
                className="nav-arrow right"
                onClick={handleNext}
                disabled={startIndex >= marketplaces.length - itemsToShow}
            >
                ›
            </button>

            <style jsx>{`
                .marketplace-nav-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    background: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    margin: 20px auto;
                    max-width: 800px;
                }

                .marketplace-items {
                    display: flex;
                    gap: 30px;
                    overflow: hidden;
                    padding: 0 10px;
                }

                .marketplace-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: #333;
                    transition: transform 0.2s;
                    width: 80px;
                    height: 80px;
                }

                .marketplace-item:hover {
                    transform: translateY(-2px);
                }

                .marketplace-icon {
                    width: 50px;
                    height: 50px;
                    margin-bottom: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .marketplace-name {
                    font-size: 14px;
                    font-weight: 500;
                    text-align: center;
                    width: 100%;
                    white-space: nowrap;
                }

                .nav-arrow {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                    color: #666;
                    transition: color 0.2s;
                    font-size: 32px;
                    line-height: 1;
                    transform: rotate(${props => props.className.includes('left') ? '180deg' : '0deg'});
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                }

                .nav-arrow.left {
                    transform: rotate(180deg);
                }

                .nav-arrow:hover {
                    color: #333;
                }

                .nav-arrow:disabled {
                    color: #ccc;
                    cursor: not-allowed;
                }
            `}</style>
        </div>
    );
};

export default MarketplaceNav; 