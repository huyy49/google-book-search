import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const SavedBookDetail = props => {
  return (
    <>
      <Container>
      <Row>
        <Col md="4">
          <h4>{props.title}</h4>
          <Image alt={props.title} src={props.src} fluid />
          <p><strong>Author(s):</strong> {props.authors}</p>
          <p><strong>Publish Date:</strong> {props.date}</p>
          <p><strong>Google Books Link:</strong> <a href={props.link} target={"_blank"} >{props.title}</a></p>
          <Button onClick={props.handleDeleteBook} className="btn btn-warning delete-btn" style={{ marginBottom: "30px" }}>
            Delete
          </Button>
        </Col>
        <Col md="8">
          <p><strong>Description: </strong>{props.description}</p>
        </Col>
      </Row>
      </Container>
    </>
  );
}

export default SavedBookDetail;
