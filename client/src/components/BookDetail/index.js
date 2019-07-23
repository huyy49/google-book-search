import React from "react";
import { Container, Row, Col, Image, } from "react-bootstrap";

const BookDetail = props => {
  return (
    <>
      <Container className="mt-2">
        <Row>
        <Col md="4">
          <h4>{props.title}</h4>
          <Image alt={props.title} src={props.src} fluid />
          <p><strong>Author(s):</strong> {props.authors}</p>
          <p><strong>Publish Date:</strong> {props.date}</p>
          <p><strong>Google Books Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
          <button onClick={props.handleSaveBook} className="btn btn-primary save-btn">
            Save Book
          </button>
        </Col>
        <Col md="8">
          <p><strong>Description:</strong>{props.description}</p>
        </Col>
        </Row>
      </Container>
      <hr></hr>
    </>
  );
}

export default BookDetail;
