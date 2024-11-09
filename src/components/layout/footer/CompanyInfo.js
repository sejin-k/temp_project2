const CompanyInfo = () => {
  return (
    <div className="col-xl-12">
      <div
        className="footer__company__info text-center"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          marginTop: "30px",
          paddingTop: "20px",
          fontSize: "13px",
          color: "rgba(255, 255, 255, 0.8)",
        }}
      >
        <div className="company-details">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <span>셀파트너</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
            <span>대표: 황인범</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
            <span>사업자등록번호: 405-07-58496</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
            <span>통신판매업신고: 제2024-서울강남-1234호</span>
          </div>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <span>서울특별시 용산구 서빙고로 17 4층</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>

            <span>대표번호: 010-7202-8295</span>
            <span style={{ color: "rgba(255, 255, 255, 0.3)" }}>|</span>
            <span>이메일: sellpartners@gmail.com</span>
          </div>
          <div className="mt-2" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            ©2024 sellpartner. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
