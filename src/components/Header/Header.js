import "./Header.scss";

import Button from "react-bootstrap/Button";

import heroImage from "../../assets/images/banner.jpeg";

import { useNavigate } from "react-router-dom";

const Header = ({ userName, failedAuth }) => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    if (!failedAuth) {
      navigate(`/dashboard/${userName}`);
    } else {
      document.getElementById("contact-us").scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="header">
      <div className="header__info">
        <h1 className="header__title">Analytics Solution for Smart Homes</h1>

        <Button
          className="header__btn"
          onClick={handleDemoClick}
          variant="primary"
          size="lg"
        >
          {failedAuth ? "Request a demo" : "Go to my dashboard"}
        </Button>
      </div>
      <img className="header__img" src={heroImage} alt="smart solutions" />
    </section>
  );
};

export default Header;
