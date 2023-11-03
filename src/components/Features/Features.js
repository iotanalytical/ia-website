import "./Features.scss";

const Features = () => {
  return (
    <section id="about" className="features">
      <div className="container">
        <header className="features__header">
          <h2 className="text-center mb-5 section-title">Features</h2>
        </header>

        <div className="row features__info">
          <div className="col text-center features__icon-box">
            <div className="features__icon">
              <i className="fa fa-refresh"></i>
            </div>
            <h4 className="features__title">
              <span>Compatibility</span>
            </h4>
            <p className="features__description">
              Whether your smart home solution uses Android, Linux
              distributions, or any other OS, IoT analytical can be easily
              installed using its restful API.
            </p>
          </div>

          <div className="col text-center features__icon-box">
            <div className="features__icon">
              <i className="fa fa-bar-chart"></i>
            </div>
            <h4 className="features__title">
              <span>Visualization</span>
            </h4>
            <p className="features__description">
              All the collected data is served through mobile, web, and hub
              interfaces. The data is processed and can be accessed visually.
            </p>
          </div>

          <div className="col text-center features__icon-box">
            <div className="features__icon">
              <i className="fa fa-wrench"></i>
            </div>
            <h4 className="features__title">
              <span>Diagnosis</span>
            </h4>
            <p className="features__description">
              All possible malfunctions are shown in the log section and will be
              available on dashboard.
            </p>
          </div>
        </div>
        <div className="row features__info">
          <div className="col text-center features__icon-box">
            <div className="features__icon">
              <i className="fa fa-thumbs-o-up"></i>
            </div>
            <h4 className="features__title">
              <span>Recommendation</span>
            </h4>
            <p className="features__description">
              Utilizing AI alongside big data we can offer the most efficient
              usage behavior. In time, the system also learns from its past and
              enhances its ability to offer better recommendations.
            </p>
          </div>

          <div className="col text-center features__icon-box">
            <div className="features__icon">
              <i className="fa fa-tachometer"></i>
            </div>
            <h4 className="features__title"> User-friendly dashboard</h4>
            <p className="features__description">
              Our service is available on Android, iOS, and web. The dashboard
              is easy to use and simple. It is also accessible anywhere,
              anytime.
            </p>
          </div>

          <div className="col text-center features__icon-box">
            <div className="features__icon">
              <i className="fa fa-dollar"></i>
            </div>
            <h4 className="features__title">No hidden costs</h4>
            <p className="features__description">
              All features are available for one-time fee payment. No
              subscription required for businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
