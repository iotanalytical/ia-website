import "./Features.scss";

const Features = () => {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <h3 className="text-center">Features</h3>
          <p className="text-center text-justify">
            IoT Analytical enhances, empowers, and helps maintain smart home
            solutions. It is designed in a way that all relevant data regarding
            each part of smart home solution is collected, stored, and processed
            automatically. The user can easily access water, gas, and
            electricity consumption and receive live diagnosis analysis. IoT
            Analytical contributes significantly to the maintenance of smart
            homes and acts as a diagnosis tool. It also provides suggestions for
            reducing consumption and thus, helps to save the environment.
          </p>
        </header>

        <div className="row about-container">
          <div className="col-lg-6 content order-lg-1 order-2">
            <div id="wrapper-features1">
              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-refresh"></i>
                </div>
                <h4 className="title">
                  <span>Compatibility</span>
                </h4>
                <p className="description">
                  Whether your smart home solution uses Android or other Linux
                  distributions, IoT analytical can be easily installed through
                  the use of its restful API. Hence, it can be easily installed
                  on almost every smart home out there.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-bar-chart"></i>
                </div>
                <h4 className="title">
                  <span>Visualization</span>
                </h4>
                <p className="description">
                  All the collected data is served through mobile, web, and hub
                  interface. The data is processed and can be accessed in a
                  variety of ways. Comparison feature is also available to see
                  the difference of usage in various time periods.
                </p>
              </div>

              <div className="icon-box">
                <div className="icon">
                  <i className="fa fa-thumbs-o-up"></i>
                </div>
                <h4 className="title">
                  <span>Recommendation</span>
                </h4>
                <p className="description">
                  IoT Analytical utilizes AI alongside big data to offer the
                  most efficient usage behaviour. In time, the system also
                  learns from its past and enhances its ability to offer better
                  recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 my-auto">
            <h4 className="testh">User-friendly dashboard</h4>

            <p className="description">
              IoT analytical application is available on Android, iOS, and web.
              The household owner can access it from anywhere, whenever they
              want. The dashboard is designed to be as simple as possible.
            </p>
          </div>
        </div>

        <div className="row about-extra">
          <div className="col-lg-6 my-auto order-2 order-lg-1">
            <h4 className="testh">No hidden costs</h4>

            <p className="description">
              All features available in IoT analytical is available for one-time
              fee payment. No subscription required. No hidden cost, no
              bull*hit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;