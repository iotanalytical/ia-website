import "./FooterDashboard.scss";

// reactstrap components
import { Nav, NavItem, NavLink } from "reactstrap";

const FooterDashboard = () => {
  return (
    <footer className="footer-dashboard">
      <Nav>
        <NavItem className="pl-0">
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Contact Us</NavLink>
        </NavItem>
      </Nav>
      <div className="copyright">
        © {new Date().getFullYear()} IOT Analytical
      </div>
    </footer>
  );
};

export default FooterDashboard;
