import React, { useState, useEffect, Component } from "react";
import Card from "react-bootstrap/Card";
import ReactDOM from "react-dom";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
// import Button from "react-bootstrap/Button";

// function BookSearch(searchQuery) {
// console.log(searchQuery);

// console.log(apiURL);
// console.log(searchQuery + "search query");
//   const node = document.getElementById("bookCard");
//   const bookCard = ReactDOM.findDOMNode(node);
// const [bookState, setBookState] = useState({
//   bookTitle: "",
//   bookAuthor: "",
//   bookDescription: "",
// });

// function handleChange(title, author, description) {
//   // setBookTitle((bookTitle = title));
//   // setBookState(
//   //   (bookState.bookTitle = title)
//   //   (bookState.bookAuthor = author)
//   // );
// }
let bookDataArr = [];
// const [data, setData] = useState([]);

const callBooksApi = async (searchQuery) => {
  const query = searchQuery.data;
  const apiURL = url + query + "&maxResults=3" + "&key=" + key;
  let response = await fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //   let bookDataArr = [];
      console.log(data);
      let bookDataArr = data.items;

      function titleFunction(bookDataArr) {
        return bookDataArr.volumeInfo.title;
      }
      const titleArr = bookDataArr.map(titleFunction);

      //   console.log([{ bookDataArr }] + "array");
      //   for (let i = 0; i < 2; i++) {
      //     console.log(bookData);
      //     let title = bookData[i].volumeInfo.title;

      //     console.log(title);
      //     // let bookInfo = book.volumeInfo;
      //     // let title = bookInfo.title;
      //     // bookDataArr.push(title);
      //     // console.log(bookDataArr + " bookdata Arr");
      //     // let author = [bookInfo.authors];
      //     // let description = bookInfo.description;
      //     return title;
      //   }
      return titleArr;
    });
  //   const jsonResponse = await response.json();
  //   return JSON.stringify(jsonResponse);
  return [response];
};
function RenderResult(searchQuery) {
  const [apiResponse, setApiResponse] = useState("loading...");
  useEffect(() => {
    console.log(searchQuery);
    callBooksApi(searchQuery).then((result) =>
      setApiResponse(([apiResponse] = result.title)).then(
        console.log(apiResponse)
      )
    );
  }, []);
  console.log(apiResponse);
  return (
    <div>
      <p>{apiResponse}</p>
    </div>
  );
  //   }

  //   return (
  //     <>
  //       <p>Book returns</p>
  //       {Object.keys(bookDataArr).map((key) => (
  //         <p>{bookDataArr[key]}</p>
  //       ))}
  //       <p>{bookDataArr}</p>
  //     </>
  //     // <div id="bookCard">
  //     //   <Card>
  //     //     <Card.Body>
  //     //       <Card.Title></Card.Title>
  //     //       {/* <Card.Title>{bookState.bookTitle}</Card.Title> */}
  //     //     </Card.Body>
  //     //   </Card>
  //     // </div>
  //   );
}
//   useEffect(() => {
//     localStorage.setItem("dataKey", JSON.stringify(data));
//   }, [data]);

export default RenderResult;
