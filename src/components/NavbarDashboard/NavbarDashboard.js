import "./NavbarDashboard.scss";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../assets/images/logo.png";

function NavbarDashboard({ userName }) {
  const [failedAuth, setFailedAuth] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }
  }, []);

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
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
              {!failedAuth ? (
                <Nav.Item className="user-name">{`Welcome ${userName}!`}</Nav.Item>
              ) : (
                <Nav.Item className="user-name">{`Welcome Demo user!`}</Nav.Item>
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

export default NavbarDashboard;
