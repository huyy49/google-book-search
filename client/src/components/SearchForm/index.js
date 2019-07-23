import React from "react";
import { Form, Col, Container, Button } from "react-bootstrap";

const SearchForm = props => {
  return (
    <>
        <Form className="form-group m-2">
          <input
            onChange={props.handleInputChange}
            value={props.value}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search a book"
            id="search"
          />
          <Button onClick={props.handleFormSubmit} className="mt-2 btn btn-primary">
            Search
        </Button>
        </Form>
    </>
  );
}

export default SearchForm;
