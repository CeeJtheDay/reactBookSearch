const db = require("../models");
const axios = require("axios");
const baseURL = "GET https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBhiMCICh0xHwLC0gWTWmWnE-a_xEPqmwU";


module.exports = {
    findByTitle: function(req, res) {
      let query = request.query.q
      axios
        .get(`${baseURL}+intitle:${query}${APIKEY}`)
        .then(results => {
          console.log("RESULTS: ", results.data);
          // res.json(results.data.products[0]);
        })
        .catch(err => console.log(err));
    }
  };
      // db.Book
      //   .find(req.query)
      //   .sort({ date: -1 })
      //   .then(dbModel => res.json(dbModel))
      //   .catch(err => res.status(422).json(err));
  //   },
  //   findById: function(req, res) {
  //     db.Book
  //       .findById(req.params.id)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   create: function(req, res) {
  //     db.Book
  //       .create(req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   update: function(req, res) {
  //     db.Book
  //       .findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  //   remove: function(req, res) {
  //     db.Book
  //       .findById({ _id: req.params.id })
  //       .then(dbModel => dbModel.remove())
  //       .then(dbModel => res.json(dbModel))
  //       .catch(err => res.status(422).json(err));
  //   },
  // };