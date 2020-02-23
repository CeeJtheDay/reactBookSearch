const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" DB routes
router
  .route("/")
  .post(booksController.create);
  
// Matches with "/api/books/saved"
router
  .route("/saved")
  .get(booksController.findAll)

// Matches with "/api/books/saved/:id"
router
  .route("/saved/:id")
  .delete(booksController.remove);

// Google API routes
router
  .route("/:title")
  .get(booksController.findByTitle)

// Matches with "/api/books/saved/:id"

module.exports = router;