import "./NavbarLanding.scss";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../assets/images/logo.png";

function NavbarLanding({ userName, failedAuth, setUserName, setFailedAuth }) {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setUserName(null);
    setFailedAuth(true);
    navigate("/");
  };

  const expand = "md";

  return (
    <Navbar expand={expand} fixed={"top"} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="30"
            className="d-inline-block align-top"
            alt="IOT ANALYTICAL logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              IOT ANALYTICAL
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#mission">Mission</Nav.Link>
              <Nav.Link href="#product">Product</Nav.Link>
              <Nav.Link href="#about">Features</Nav.Link>
              <Nav.Link href="#team">About Us</Nav.Link>
              {/* <Nav.Link href="#faq">FAQ</Nav.Link> */}
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>

              {!failedAuth && (
                <Nav.Item className="user-name">{`Welcome ${userName}!`}</Nav.Item>
              )}
            </Nav>
            {failedAuth && (
              <Button
                onClick={handleLogIn}
                className="btn-login"
                variant="outline-primary"
              >
                Log In
              </Button>
            )}
            {!failedAuth && (
              <Button
                className="btn-logout"
                onClick={handleLogOut}
                variant="outline-primary"
              >
                Log Out
              </Button>
            )}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarLanding;
