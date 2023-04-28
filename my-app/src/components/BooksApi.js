import React, { useState, useEffect, Component } from "react";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the
//       bulk of the card's content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card>

function BookSearch(searchQuery) {
  const apiURL = url + searchQuery + "&maxResults=1" + "&key=" + key;
  console.log("books search query" + { searchQuery });
  // const [data, setData] = useState([]);
  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      const bookDataArr = data.items;
      for (let i = 0; i < 20; i++) {
        console.log(bookDataArr);
        let book = bookDataArr[i];
        let bookInfo = book.volumeInfo;
        let bookTitle = bookInfo.title;
        console.log(bookTitle);
      }
    });
}
//   useEffect(() => {
//     localStorage.setItem("dataKey", JSON.stringify(data));
//   }, [data]);

export default BookSearch;
