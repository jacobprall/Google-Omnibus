import React, { useState } from "react";
import BookSearch from "../components/BooksApi";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// function getSearchQuery(event) {
//   event.preventDefault();
//   const node = document.getElementById("searchQuery");
//   const searchQuery = ReactDOM.findDOMNode(node).textContent();
//   console.log(searchQuery);
// }

const Home = () => {
  const [searchState, setSearchState] = useState({ searchQuery: "" });
  console.log(searchState);
  function handleChange(event) {
    const { name, value } = event.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  }

  function submitSearch(event) {
    event.preventDefault();

    // const searchInput = searchState.searchQuery;

    // return searchInput;
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
        <BookSearch searchSubmitted={false} data={searchState.searchQuery} />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Home;
