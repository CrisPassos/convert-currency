import React from "react";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">Personal</Nav.Link>
          <Nav.Link href="#">Business</Nav.Link>
          <Nav.Link href="#">Partners</Nav.Link>
        </Nav>

        <Nav className="mr-auto">
          <Navbar.Brand href="#home">
            <img src={require("../../assets/images/logo.svg")} alt="uphold" />
          </Navbar.Brand>
        </Nav>

        <Button type="submit" size="sm" className="log-in ml-5">
          Log in
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
