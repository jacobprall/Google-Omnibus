import React, { useState, useEffect, Component } from "react";
const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
// const searchQuery = "baseball";

function BookSearch(searchQuery) {
  const apiURL = url + searchQuery + "&maxResults=1" + "&key=" + key;
  console.log("books search query" + { searchQuery });
  const [data, setData] = useState([]);
  fetch(apiURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      const bookDataArr = data.items;
      for (let i = 0; i < 20; i++) {
        console.log(bookDataArr);
        // let book = bookDataArr[i];
        // let bookInfo = book.volumeInfo;
        // let bookTitle = bookInfo.title;
        // console.log(bookTitle);
      }
    });

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);
}

export default BookSearch;
