function getSingleBook(bookQuery) {
  const url = "https://www.googleapis.com/books/v1/volumes/";
  const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  const apiURL = url + bookQuery + "?key=" + key;
  console.log(apiURL);
  return fetch(apiURL).then((data) => data.json());

  //   const response = fetch(apiURL);
  //   const jsonResponse = response.json();
  //   console.log(jsonResponse);
  //   const items = jsonResponse.items;
  //   console.log(items);
}
export default getSingleBook;
