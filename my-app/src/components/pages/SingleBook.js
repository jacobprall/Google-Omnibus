import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
// import getSingleBook from "../../utils/getSingleBook";

const SingleBook = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let searchQuery = "";
    console.log("test");
    setItems(JSON.parse(localStorage.getItem("items")));
    // const idNum = JSON.parse(localStorage.getItem("items"));
    // console.log(idNum);
    // if (idNum) {
    //   setItems(idNum);
    // }
    // console.log(idNum);
    // searchQuery = items;

    // console.log(searchQuery);
  }, []);

  // return (
  //   <>
  //     <getSingleBook bookQuery={items} />
  //   </>
  // );

  // SingleBookApi(items);

  // const bookQuery = items;
  console.log(items);
  // const [bookQuery, setBookQuery] = useState("");
  // setBookQuery(items);

  const [apiResponse, setApiResponse] = useState([]);
  // const [show, setShow] = useState(false);
  // function SingleBookApi(searchQuery) {
  const url = "https://www.googleapis.com/books/v1/volumes/";
  const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  const apiURL = url + items + "?key=" + key;

  //   console.log(apiURL);

  useEffect(() => {
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //   return (
  //     <>
  //       <Button variant="primary" onClick={handleShow}>
  //         Launch demo modal
  //       </Button>

  //       <Modal show={show} onHide={handleClose}>
  //         <Modal.Header closeButton>
  //           <Modal.Title>Modal heading</Modal.Title>
  //         </Modal.Header>
  //         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
  //         <Modal.Footer>
  //           <Button variant="secondary" onClick={handleClose}>
  //             Close
  //           </Button>
  //           <Button variant="primary" onClick={handleClose}>
  //             Save Changes
  //           </Button>
  //         </Modal.Footer>
  //       </Modal>
  //     </>
  //   );

  return (
    <>
      <h1>Single Book</h1>
      import Button from 'react-bootstrap/Button';
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Button href="/">Go Home</Button>
    </>
  );
};

export default SingleBook;
