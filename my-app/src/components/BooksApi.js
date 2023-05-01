import React, { useState, useEffect, Component } from "react";
import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
// import Button from "react-bootstrap/Button";

function BookSearch(searchQuery) {
  console.log(searchQuery);
  const query = searchQuery.data;
  const apiURL = url + query + "&maxResults=1" + "&key=" + key;
  console.log(apiURL);
  console.log(searchQuery + "search query");
  //   const node = document.getElementById("bookCard");
  //   const bookCard = ReactDOM.findDOMNode(node);
  //   const [bookState, setBookState] = useState({
  //     bookTitle: "",
  //     bookAuthor: "",
  //     bookDescription: "",
  //   });

  // const [data, setData] = useState([]);
  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const bookDataArr = data.items;
      for (let i = 0; i < 1; i++) {
        console.log(bookDataArr);
        let book = bookDataArr[0];
        let bookInfo = book.volumeInfo;
        let bookTitle = bookInfo.title;
        // setBookState((bookState.bookTitle = bookInfo.title));
      }
    });
  // for (let i = 0; i < 4; i++) {

  // }
  //   }
  // }
  // );

  return (
    <div id="bookCard">
      <Card>
        <Card.Body>
          <Card.Title>Title here</Card.Title>
          {/* <Card.Title>{bookState.bookTitle}</Card.Title> */}
        </Card.Body>
      </Card>
    </div>
  );
}
//   useEffect(() => {
//     localStorage.setItem("dataKey", JSON.stringify(data));
//   }, [data]);

export default BookSearch;
