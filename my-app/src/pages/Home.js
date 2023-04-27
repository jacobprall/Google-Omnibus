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

  const [bookState, setBookState] = useState({ searchsubmitted: false });
  console.log(bookState + "bookstate");

  function handleChange(event) {
    const { name, value } = event.target;
    setSearchState({
      ...searchState,
      [name]: value,
    });
  }

  function submitSearch(event) {
    console.log("click");
    event.preventDefault();
    // const node = document.getElementById("b");
    // const booksApi = ReactDOM.findDOMNode(node);
    // console.log(booksApi);
    // booksApi.setAttribute("searchSubmitted", "true");
    setBookState({ searchsubmitted: true });
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

        <BookSearch
          id="b"
          searchsubmitted={bookState.searchsubmitted}
          data={searchState.searchQuery}
        />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Home;
