import "./Header.scss";

import heroImage from "../../assets/images/Hero.webp";

const Header = () => {
  return (
    <section className="header">
      <h1 className="header__title">Analytics Solution for Smart Homes</h1>
      <img className="header__img" src={heroImage} alt="smart solutions" />
    </section>
  );
};

export default Header;
