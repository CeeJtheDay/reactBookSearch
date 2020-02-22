import React, { useState } from 'react';
import API from "./utils/API";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import Book from "./components/Book";
import { Container } from "react-bootstrap";
import './App.css';

function App() {
  const [search, setSearch]= useState("");
  let [books, setBooks]= useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchBooks(search);
   
  }

  const handleOnChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearch(value);
  }

  const searchBooks = (query) => {
      API.getBooks(query)
      .then(res => {
        setBooks(res.data.items);
      })
  }
  
  const renderBook = (book) => {
    console.log(book)
     let renderedBook =  
     <Book 
     key={book.id}
     title={book.volumeInfo.title}
     authors={book.volumeInfo.authors}
     link={book.volumeInfo.imageLinks.infoLink}
     thumbnail={book.volumeInfo.thumbnail}
     description={book.volumeInfo.description}
     />;
     return renderedBook;

  }
  console.log("books", books);
  return (
    <Container className="main">
     <Title />
     <SearchBar handleFormSubmit={handleFormSubmit} handleOnChange={handleOnChange} value={search}/>
     {books.map(book => 
      renderBook(book)
     )}
    </Container>
  
  );
}

export default App;
