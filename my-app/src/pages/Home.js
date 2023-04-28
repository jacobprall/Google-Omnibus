import React, { useState } from "react";
import BookSearch from "../components/BooksApi";
import ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [searchState, setSearchState] = useState({ searchQuery: "" });
  console.log({ searchState } + "search state 9 home js");

  //   console.log(searchQueryRender.searchSent + "search query render home 14");

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
    // setSearchQueryRender((searchQueryRender.searchSent = true));
    // console.log(searchQueryRender.searchSent);

    BookSearch(searchState.searchQuery);
  }

  return (
    <>
      {console.log("search sent")}
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

        {/* {BookSearch(searchState.searchQuery)} */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Home;
