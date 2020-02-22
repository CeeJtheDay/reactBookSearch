import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";

const props = (props) => {

  const makeBookLink = (link) => {
      return () => window.location.href = link;
    }  

  return (
      <Container className="propsContainer">
          <Row className="justify-content-around">
            <Col md={8}>
                <h2>
                    {props.title}
                </h2>
                <h5>
                    {props.authors}
                </h5>
            </Col>
            <Col md={2}>
                <Button className="view"
                onClick={makeBookLink(props.link)} >View</Button>
                <Button className="save">Save</Button>
            </Col>
          </Row>
          <Row>
              <Col md={3}>
                {props.thumbnail}
              </Col>
              <Col md={9}>
                 {props.description}
              </Col>
          </Row>
      </Container>
    
  );
}

export default props;