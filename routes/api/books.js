const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books" DB routes
router
  .route("/")
  // .get(booksController.findAll)
  .post(booksController.create);

// Google API routes
router
  .route("/:title")
  .get(booksController.findByTitle)
// Matches with "/api/books/:id"
router
  .route("/:id")
  // .delete(booksController.remove);

module.exports = router;