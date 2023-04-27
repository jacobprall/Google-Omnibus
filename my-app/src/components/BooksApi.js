const url = "https://www.googleapis.com/books/v1/volumes?q=";
const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
// const searchQuery = "baseball";

const BookSearch = (searchQuery, searchSubmitted) => {
  const apiURL = url + searchQuery + "&maxResults=1" + "&key=" + key;
  console.log("books search query" + { searchQuery });
  console.log("search submited" + { searchSubmitted });
  if ({ searchSubmitted } == "true") {
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
  } else {
    console.log("booksApi has not been selected");
  }
};

export default BookSearch;
