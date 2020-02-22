import React from "react";
import { Container, Row } from "react-bootstrap";
import "./style.css";

const Title = () => {
  return (
      <Container className="title justify-content-center">
          <Row>
            <h1>Google Book search</h1>
          </Row>
          <Row>
            <h5>
                Search for, and save books, that you'd like to read!
            </h5>
          </Row>
      </Container>
    
  );
}

export default Title;