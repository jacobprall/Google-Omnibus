import React, { useState } from "react";
import BookSearch from "../components/BooksApi";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RenderResult from "../components/BooksApi";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const [searchState, setSearchState] = useState({ searchQuery: "" });
  console.log(searchState);

  const [sentState, setSentState] = useState({ sent: false });

  function handleChange(event) {
    const { name, value } = event.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
    console.log(searchState);
  }

  function submitSearch(event) {
    console.log("click");
    event.preventDefault();

    setSentState(true);
    console.log({ searchState } + "searchState");
  }

  return (
    <>
      <h1></h1>
      <Form onSubmit={submitSearch}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            name="searchQuery"
            type="searchQuery"
            placeholder="enter search here"
            value={searchState.searchQuery}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Container>
        {sentState == true ? (
          <RenderResult data={searchState.searchQuery} />
        ) : (
          console.log("search not sent")
        )}
      </Container>
    </>
  );
};

export default Home;
