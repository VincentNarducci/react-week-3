import React from 'react';
import {
 NavItem,
 Navbar,
 Nav,
 Button,
 NavDropdown,
 Container
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { FaHome, FaPlusCircle, FaRecordVinyl, FaListAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
       <Navbar collapseOnSelect expand="xxl" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#">Nav Link One</Nav.Link>
        <Nav.Link href="#">Nav Link Two</Nav.Link>
          <Nav.Link href="#">Settings</Nav.Link>
          <Nav.Link href="#">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container fluid className="banner">

  </Container>
  <Container>
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
        <Button className="list-btn" variant="primary">
          <FaRecordVinyl /> Records
          </Button>
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
        <Button className="add-btn" variant="primary">
           <FaPlusCircle />
          </Button>
        </NavLink>
      </div>
      <hr />
      </Container>
    </header>
  );
};

export default Header;

