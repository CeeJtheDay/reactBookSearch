import React, { useState, useEffect } from 'react';
import Title from "../../components/Title";
import { Container } from "react-bootstrap";
import API from "../../utils/API";
import Book from "../../components/Book";
import "./style.css";


const Saved = () => {
  const [books, setBooks] = useState([]);

  useEffect(function searchDbBooks() {
    API.getDbBooks()
      .then(res => {
        console.log("RESPONSE", res.data);
        setBooks(res.data);
      })
  }, [])


  const renderBook = (book) => {
    let searchPage = false;
    let renderedBook =
      <Book
        id={book._id}
        searchpage={searchPage}
        key={book._id}
        title={book.title}
        authors={book.authors}
        link={book.link}
        image={book.image}
        description={book.description}
      />;
    return renderedBook;

  }

  return (
    <Container className="main">
      <Title title="Saved Books" sub="view your saved books, or remove them from this list!" />
      <Container className="bookView">
        {books.map(book =>
          renderBook(book)
        )}
      </Container>
    </Container>
  );
}

export default Saved;
