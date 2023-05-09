import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import getSingleBook from "../../utils/getSingleBook";

const SingleBook = (chooseBook) => {
  console.log(chooseBook);

  //   console.log(data);
  //   const [bookQuery, setBookQuery] = useState("");
  //   setBookQuery(data);

  //   const [apiResponse, setApiResponse] = useState([]);
  //   const [show, setShow] = useState(false);
  //   const url = "https://www.googleapis.com/books/v1/volumes/";
  //   const key = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4";
  //   const apiURL = url + bookQuery + "?key=" + key;

  //   console.log(data + "single book");
  //   console.log(apiURL);

  //   try {
  //     const response = fetch(apiURL);
  //     const jsonResponse = response.json();
  //     console.log(jsonResponse);
  //     const items = jsonResponse.items;
  //     console.log(items);
  //     setApiResponse(items);
  //   } catch (err) {
  //     alert(err);
  //   }

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
    </>
  );
};

export default SingleBook;
