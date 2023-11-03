import "./Header.scss";

import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";

const Header = ({ userName, failedAuth }) => {
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate(`/dashboard/${userName}`);
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
          {failedAuth ? "Demo" : "Go to my dashboard"}
        </Button>
      </div>
    </section>
  );
};

export default Header;
