import React from "react";
import {
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Gestion Commerciale</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/scategories">
              Sous Categories
            </Nav.Link>
            <Nav.Link as={Link} to="/articles">
              Liste Articles
            </Nav.Link>
          </Nav>
        </Container>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default Menu;
