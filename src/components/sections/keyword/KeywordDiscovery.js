"use client";
import Link from "next/link";

const KeywordDiscovery = () => {
  return (
    <section className="keyword-discovery sp_top_100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="keyword-content">
              <div className="section__title">
                <div className="section__title__button">
                  <span className="text__gradient">키워드 발굴</span>
                </div>
                <div className="section__title__heading">
                  <h2>트렌드를 선도하는 키워드 발굴</h2>
                </div>
              </div>
              <div className="keyword-description mt-4">
                <p className="mb-4">
                  실시간 검색어 트렌드를 분석하여 최적의 키워드를 발굴합니다.
                  소비자들의 관심사와 검색 패턴을 파악하여 효과적인 마케팅
                  전략을 수립할 수 있습니다.
                </p>
                <ul className="feature-list">
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    실시간 검색어 트렌드 분석
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    연관 키워드 추천
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    경쟁강도 분석
                  </li>
                  <li className="mb-3">
                    <i className="fas fa-check text-primary me-2"></i>
                    시즌별 키워드 추천
                  </li>
                </ul>
                <div className="mt-5">
                  <Link href="/keyword" className="btn btn-primary btn-lg">
                    키워드 발굴하기
                    <i className="fas fa-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="keyword-image text-center">
              <img
                src="https://via.placeholder.com/600x400?text=Keyword+Discovery"
                alt="키워드 발굴"
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

export default KeywordDiscovery;
