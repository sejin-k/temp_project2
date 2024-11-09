const GuideVideo = () => {
  return (
    <section className="video__area sp_top_100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="video__content">
              <div className="section__title text-center">
                <div className="section__title__button">
                  <span className="text__gradient">Tutorial Video</span>
                </div>
                <div className="section__title__heading">
                  <h2>셀파트너 이용 가이드 영상</h2>
                </div>
                <div className="video__frame mt-5">
                  <iframe
                    width="100%"
                    height="500"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="셀파트너 이용 가이드"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideVideo;
