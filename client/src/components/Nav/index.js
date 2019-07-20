import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">Google Books Search</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/savedbooks">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
