import "./Header.scss";

import Button from "react-bootstrap/Button";
import heroImage from "../../assets/images/Hero.webp";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate("/dashboard/demo");
  };

  return (
    <section className="header">
      <div className="header__info">
        <h1 className="header__title">Analytics Solution for Smart Homes</h1>
        <Button onClick={handleDemoClick} variant="primary" size="lg">
          Demo
        </Button>
      </div>
      <img className="header__img" src={heroImage} alt="smart solutions" />
    </section>
  );
};

export default Header;
