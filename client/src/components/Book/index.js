import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import API from "../../utils/API";
import "./style.css";

const Book = (props) => {

const makeBookLink = (link) => {
    //   return () => console.log(link);
      return () => window.location.href = link;
    }  

    const postBook = () => {
        const body = {
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
        }
        return () => {
            API.saveBook(body)
            .then(result => console.log("saveBook Res", result))
        }
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
                <Button 
                className="view"
                onClick={makeBookLink(props.link)} >View</Button>
                <Button 
                className="save"
                onClick={postBook()}>Save</Button>
            </Col>
          </Row>
          <Row>
              <Col md={3}>
                <img src={props.image} alt="book"/>
              </Col>
              <Col md={9}>
                 {props.description}
              </Col>
          </Row>
      </Container>
    
  );
}

export default Book;