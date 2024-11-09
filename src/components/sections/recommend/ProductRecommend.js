"use client";
import Link from "next/link";

const ProductRecommend = () => {
  return (
    <section
      className="product-recommend sp_top_100 sp_bottom_100"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="recommend-image text-center">
              <img
                src="https://via.placeholder.com/600x400?text=Product+Recommendation"
                alt="상품 추천"
                className="img-fluid rounded shadow"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="recommend-content">
              <div className="section__title">
                <div className="section__title__button">
                  <span className="text__gradient">상품 추천</span>
                </div>
                <div className="section__title__heading">
                  <h2>데이터 기반 맞춤형 상품 추천</h2>
                </div>
              </div>
              <div className="recommend-description mt-4">
                <p className="mb-4">
                  빅데이터 분석을 통해 최적의 상품을 추천해드립니다. 시장
                  트렌드와 소비자 선호도를 반영한 맞춤형 상품 추천으로 매출
                  증대를 도와드립니다.
                </p>
                <div className="feature-grid row">
                  <div className="col-6 mb-4">
                    <div className="feature-item p-3 bg-white rounded shadow-sm">
                      <h5 className="mb-2">트렌드 분석</h5>
                      <p className="small text-muted">
                        실시간 시장 트렌드 반영
                      </p>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="feature-item p-3 bg-white rounded shadow-sm">
                      <h5 className="mb-2">매출 분석</h5>
                      <p className="small text-muted">
                        카테고리별 매출 데이터 분석
                      </p>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="feature-item p-3 bg-white rounded shadow-sm">
                      <h5 className="mb-2">경쟁 분석</h5>
                      <p className="small text-muted">시장 내 경쟁 상품 분석</p>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="feature-item p-3 bg-white rounded shadow-sm">
                      <h5 className="mb-2">성장 예측</h5>
                      <p className="small text-muted">
                        상품별 성장 가능성 예측
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <Link href="/recommend" className="btn btn-primary btn-lg">
                    상품 추천받기
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommend;
