import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navcomponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{
        padding: "10px 80px 10px 50px",
      }}
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink}>Header</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            signup
          </Nav.Link>
          <Nav.Link as={NavLink} to="/profile">
            profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navcomponent;
