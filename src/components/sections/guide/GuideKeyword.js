"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const GuideKeyword = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories");
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError("카테고리를 불러오는데 실패했습니다.");
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="guide__keyword section__space">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="guide__content">
              <div className="section__title">
                <div className="section__title__button">
                  <span className="text__gradient">가이드</span>
                </div>
                <div className="section__title__heading">
                  <h2>상품 등록 가이드</h2>
                </div>
              </div>
              <div className="guide__description mt-4">
                <p className="mb-4">
                  상품 등록에 필요한 가이드라인을 제공합니다. 효과적인 상품
                  등록을 위한 팁과 주의사항을 확인하세요.
                </p>
                <ul className="feature-list">
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    상품 등록 기본 가이드
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    이미지 등록 가이드
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    상품명 작성 가이드
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    상품 설명 작성 가이드
                  </li>
                </ul>
                <div className="mt-5">
                  <Link href="/guide" className="btn btn-primary btn-lg">
                    가이드 보기
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="guide__image text-center">
              <img
                src="https://via.placeholder.com/600x400?text=Guide"
                alt="가이드"
                className="img-fluid rounded shadow"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideKeyword;
