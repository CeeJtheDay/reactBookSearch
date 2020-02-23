import React from "react";
import "./style.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTag } from '@fortawesome/free-solid-svg-icons'



function Navigate() {
  

  return (
      <Container>
        <Navbar bg="primary" variant="dark" expand="lg" id="nav" //data-cartmodalshow={cartModalShow} data-setcartmodalshow={setCartModalShow}
        >
          <Navbar.Brand href="#home">
            Google Book Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" //data-setcartmodalshow={setCartModalShow}
          >
            <Nav className="mr-auto">
              <Nav.Link href="#">Saved Books</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
}

export default Navigate;
