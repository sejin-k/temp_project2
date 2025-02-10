const CompanyInfo = () => {
  return (
    <div className="col-xl-12">
      <div
        className="footer__company__info text-center"
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          // marginTop: "30px",
          // paddingTop: "20px",
          fontSize: "13px",
          color: "#868e96",
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
            {/* <span style={{ color: "adb5bd" }}>|</span> */}
            <span>대표: 황인범</span>
            {/* <span style={{ color: "#adb5bd" }}>|</span> */}
            <span>사업자등록번호: 405-07-58496</span>
            {/* <span style={{ color: "#adb5bd" }}>|</span> */}
            <span>통신판매업신고: 2024-서울용산-1229</span>
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
            <span>서울 강동구 성내동 87-1</span>
            {/* <span style={{ color: "#adb5bd" }}>|</span> */}

            <span>대표번호: 010-7202-8295</span>
            {/* <span style={{ color: "#adb5bd" }}>|</span> */}
            <span>이메일: sellpartners@gmail.com</span>
          </div>
          <div className="mt-2" style={{ color: "#868e96" }}>
            ©2024 sellpartner. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
