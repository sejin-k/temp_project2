const GuideMission = () => {
  const missions = [
    {
      title: "데이터 기반 의사결정",
      description: "실시간 데이터 분석을 통한 최적의 의사결정을 지원합니다.",
    },
    {
      title: "매출 증대",
      description: "검증된 전략으로 매출 상승을 경험하실 수 있습니다.",
    },
    {
      title: "시간 절약",
      description: "자동화된 분석으로 업무 시간을 절약할 수 있습니다.",
    },
  ];

  return (
    <section className="mission__area sp_top_100 sp_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="mission__title text-center">
              <div className="section__title">
                <div className="section__title__button">
                  <span className="text__gradient">Our Mission</span>
                </div>
                <div className="section__title__heading">
                  <h2>셀파트너의 미션</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {missions.map((mission, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <div className="mission__item text-center">
                <h3>{mission.title}</h3>
                <p>{mission.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideMission;
