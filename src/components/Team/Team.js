import "./Team.scss";

import mohammad from "../../assets/images/1.jpg";
import maedeh from "../../assets/images/2.jpg";
import ali from "../../assets/images/3.jpg";
import marsa from "../../assets/images/4.jpg";
import hamed from "../../assets/images/5.jpg";

const Team = () => {
  return (
    <section id="team">
      <div className="container-fluid">
        <div className="section-header">
          <h3>Team</h3>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-2 col-md-6">
            <div className="member">
              <img src={mohammad} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Mohammad Nazarizadeh</h4>
                  <span>CEO & CTO</span>
                  <div className="social">
                    <a
                      href="mailto:m.nazarizadeh@gmail.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-google" />
                    </a>
                    <a
                      href="mailto:mohammad@iotanalytical.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mnazarizadeh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="member">
              <img src={maedeh} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Maedeh Amiri</h4>
                  <span>Product Owner</span>
                  <div className="social">
                    <a
                      href="mailto:maedehamiri@gmail.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-google" />
                    </a>
                    <a
                      href="mailto:maedeh@iotanalytical.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/maedeh-amiri-78829b108"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="member">
              <img src={ali} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Ali Sadoughi</h4>
                  <span>Software Engineer</span>
                  <div className="social">
                    <a
                      href="mailto:asadoughi1990@gmail.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-google" />
                    </a>
                    <a
                      href="mailto:ali@iotanalytical.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ali-sadoughi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="member">
              <img src={marsa} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Marsa Mousavi</h4>
                  <span>PR and Business Development Manager</span>
                  <div className="social">
                    <a
                      href="mailto:marsa.mousavi@gmail.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-google" />
                    </a>
                    <a
                      href="mailto:marsa@iotanalytical.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/marsamousavi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <div className="member">
              <img src={hamed} className="img-fluid" alt="" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>
                    Hamed
                    <br />
                    Nazarizadeh
                  </h4>
                  <span>Sales and Marketing Team Lead</span>
                  <div className="social">
                    <a
                      href="mailto:hamed.nazarizadehh@gmail.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-google" />
                    </a>
                    <a
                      href="mailto:hamed@iotanalytical.com?subject=Contact IA Team"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-envelope" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hamednz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
