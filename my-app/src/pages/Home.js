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

  let [searchSent, setSearchSent] = useState({ searchSent: false });

  //   const [bookState, setBookState] = useState({ searchsubmitted: false });
  //   console.log(bookState + "bookstate");

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
    setSearchSent({ searchSent: true });
    // const node = document.getElementById("b");
    // const booksApi = ReactDOM.findDOMNode(node);
    // console.log(booksApi);
    // booksApi.setAttribute("searchSubmitted", "true");
    // setBookState({ searchsubmitted: true });
    // const searchInput = searchState.searchQuery;

    // return searchInput;
  }
  if (searchSent == true) {
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

          <BookSearch id="b" data={searchState.searchQuery} />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  } else {
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
      </>
    );
  }
};

export default Home;
