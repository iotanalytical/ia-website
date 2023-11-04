import "./Mission.scss";

import missionIcon from "../../assets/images/mission.png";

const Mission = () => {
  return (
    <section id="mission" className="mission">
      <div className="container">
        <header className="mission__header">
          <img
            className="mission__img"
            src={missionIcon}
            alt="mission target"
          />
          <div className="mission__info">
            <h2 className="text-center mb-4 section-title">Mission</h2>
            <p className="text-center text-justify">
              Our mission at IoT Analytical is to facilitate the process of
              problem diagnosis for smart home solutions to decrease the
              maintenance costs for providers and contribute to optimize the
              consumption of energy for end users and make lives more
              sustainable with its recommendation system.
            </p>
          </div>
        </header>
      </div>
    </section>
  );
};

export default Mission;
