import "./Navbar.scss";

// import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavbarSite() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const expand = "md";

  const handleLogOut = () => {
    navigate("/");
  }

  return (
    <Navbar expand={expand} fixed={"top"} className="bg-body-tertiary mb-3">
      <Container fluid>
        <Navbar.Brand href="/">IOT ANALYTICAL</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {pathname === "/" && <Nav.Link href="/">Home</Nav.Link>}
              {pathname === "/" && <Nav.Link href="#features">Features</Nav.Link>}
              {pathname === "/" && <Nav.Link href="#faq">FAQ</Nav.Link>}
              {pathname === "/" && <Nav.Link href="#team">Team</Nav.Link>}
              {pathname === "/" && <Nav.Link href="#contact-us">Contact Us</Nav.Link>}

              {pathname === "/dashboard" && <Nav.Item>Welcome Ali!</Nav.Item>}
              {pathname === "/dashboard/demo" && <Nav.Item>Welcome guest!</Nav.Item>}
            </Nav>
            {pathname === "/" && (
              <Button variant="outline-primary">Log In</Button>
            )}
            {pathname === "/dashboard" &&  <Button onClick={handleLogOut} variant="outline-primary">Log Out</Button>}
            {pathname === "/dashboard/demo" &&  <Button onClick={handleLogOut} variant="outline-primary">Log Out</Button>}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavbarSite;
