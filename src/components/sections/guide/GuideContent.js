const GuideContent = () => {
  const guideSteps = [
    {
      title: "키워드 발굴",
      description: "트렌드 분석을 통한 최적의 키워드를 발굴하세요",
      steps: [
        "실시간 검색어 트렌드 분석",
        "연관 키워드 추천",
        "경쟁강도 분석",
        "시즌별 키워드 추천",
      ],
    },
    {
      title: "상품 추천",
      description: "데이터 기반의 상품 추천으로 매출을 증대하세요",
      steps: [
        "카테고리별 인기상품 분석",
        "상품 경쟁력 분석",
        "가격 경쟁력 분석",
        "시즌별 상품 추천",
      ],
    },
    {
      title: "오픈마켓 분석",
      description: "주요 오픈마켓의 상품 데이터를 한눈에 확인하세요",
      steps: [
        "네이버 쇼핑 인기상품",
        "쿠팡 베스트 상품",
        "11번가 HOT 상품",
        "G마켓 인기상품",
      ],
    },
  ];

  return (
    <section className="about__mission__area sp_top_100 sp_bottom_100">
      <div className="container">
        {/* 메인 설명 */}
        <div className="row">
          <div className="col-xl-12">
            <div className="about__mission__content">
              <div className="section__title text-center">
                <div className="section__title__button">
                  <span className="text__gradient">Guide</span>
                </div>
                <div className="section__title__heading">
                  <h2>셀파트너 이용 가이드</h2>
                </div>
                <p className="mt-4">
                  셀파트너의 주요 기능을 알아보고 비즈니스에 활용해보세요.
                  <br />
                  데이터 기반의 의사결정으로 매출 상승을 경험하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 가이드 단계별 설명 */}
        <div className="row mt-5">
          {guideSteps.map((step, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <div className="about__mission__item sp_bottom_30">
                <div className="about__mission__content">
                  <h4 className="about__mission__title">{step.title}</h4>
                  <p>{step.description}</p>
                  <ul className="about__mission__list">
                    {step.steps.map((item, idx) => (
                      <li key={idx}>
                        <i className="icofont-check"></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideContent;
