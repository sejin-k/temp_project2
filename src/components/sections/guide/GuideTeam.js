const GuideTeam = () => {
  const team = [
    {
      name: "개발팀",
      role: "Technical Support",
      description: "안정적인 서비스 운영과 지속적인 기능 개선을 담당합니다.",
    },
    {
      name: "데이터팀",
      role: "Data Analysis",
      description: "정확한 데이터 분석과 인사이트 도출을 담당합니다.",
    },
    {
      name: "고객지원팀",
      role: "Customer Support",
      description: "신속하고 정확한 고객 지원을 제공합니다.",
    },
  ];

  return (
    <section className="team__area sp_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="team__title text-center">
              <div className="section__title">
                <div className="section__title__button">
                  <span className="text__gradient">Our Team</span>
                </div>
                <div className="section__title__heading">
                  <h2>전문가 지원팀</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {team.map((member, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <div className="team__item text-center">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideTeam;
