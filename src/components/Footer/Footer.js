import "./Footer.scss";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="social">
        <a
          href="mailto:info@iotanalytical.com?Subject=Need to be smarter"
          target="_blank"
          rel="noopener noreferrer"
          className="Email"
        >
          <i className="fa fa-envelope social__icon"></i>
        </a>
        <a
          href="https://www.linkedin.com/company/iotanalytical"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <i className="fa fa-linkedin social__icon"></i>
        </a>
        <a
          href="https://www.instagram.com/iotanalytical"
          target="_blank"
          rel="noopener noreferrer"
          className="instagram"
        >
          <i className="fa fa-instagram social__icon"></i>
        </a>
      </div>

      <p className="footer__text">
        © {date} IoT Analytical Inc. All Rights Reserved.
      </p>

      <p className="footer__text">350-128 W.Hastings, Vancouver, BC</p>
    </footer>
  );
};

export default Footer;
