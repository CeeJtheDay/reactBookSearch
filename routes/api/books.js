const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/employees"
router.route("/")
  .get(booksController.findByTitle)
  .post(booksController.create);

// Matches with "/api/employees/:id"
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;