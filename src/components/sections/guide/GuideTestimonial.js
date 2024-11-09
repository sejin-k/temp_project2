const GuideTestimonial = () => {
  const testimonials = [
    {
      name: "김OO 고객님",
      role: "쇼핑몰 운영자",
      comment: "데이터 기반의 의사결정으로 매출이 30% 상승했습니다.",
    },
    {
      name: "이OO 고객님",
      role: "스타트업 대표",
      comment: "키워드 분석 기능이 마케팅 전략 수립에 큰 도움이 되었습니다.",
    },
    {
      name: "박OO 고객님",
      role: "온라인 마켓 셀러",
      comment: "경쟁사 분석을 통해 효과적인 가격 전략을 수립할 수 있었습니다.",
    },
  ];

  return (
    <section className="testimonial__area sp_bottom_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="testimonial__title text-center">
              <div className="section__title">
                <div className="section__title__button">
                  <span className="text__gradient">Testimonials</span>
                </div>
                <div className="section__title__heading">
                  <h2>고객 후기</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6">
              <div className="testimonial__item text-center">
                <p className="comment">{testimonial.comment}</p>
                <h4>{testimonial.name}</h4>
                <span className="role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideTestimonial;
