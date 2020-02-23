import axios from "axios";
// const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyBhiMCICh0xHwLC0gWTWmWnE-a_xEPqmwU";

export default {
  // Get Products with query
  getBooks: function(query) {
    return axios.get(`/api/books/${query}`);
  },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/books/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/books/" + id);
//   },
//   // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};