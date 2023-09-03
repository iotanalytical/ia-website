import "./Navbar.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import logo from "../../assets/images/logo.png";

function NavbarSite() {
  const [user, setUser] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      return setFailedAuth(true);
    }

    // Get the data from the API
    axios
      .get("http://localhost:5050/users/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
        setFailedAuth(true);
      });
  }, []);

  const handleLogIn = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    sessionStorage.removeItem("token");
    setUser(null);
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
              {pathname === "/" && <Nav.Link href="#home">Home</Nav.Link>}
              {pathname === "/" && <Nav.Link href="#about">Features</Nav.Link>}
              {pathname === "/" && <Nav.Link href="#faq">FAQ</Nav.Link>}

              {pathname === "/" && (
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              )}

              {pathname === "/dashboard" && (
                <Nav.Item className="user-name">{`Welcome ${user}!`}</Nav.Item>
              )}
              
            </Nav>
            {(pathname === "/" && failedAuth ) && (
              <Button
                onClick={handleLogIn}
                className="btn-login"
                variant="outline-primary"
              >
                Log In
              </Button>
            )}
            {pathname === "/dashboard" && (
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

export default NavbarSite;
