const db = require("../models");
const axios = require("axios");
const baseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBhiMCICh0xHwLC0gWTWmWnE-a_xEPqmwU";


module.exports = {
    findByTitle: function(req, res) {
      const query = req.params.title;
      const url = `${baseURL}+intitle:${query}${APIKEY}&getResults=10`;
      axios.get(url)
      .then(results => {
        res.json(results.data);
      })
      .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
      db.Book
        .find({})
        .sort({ date: -1 })
        .then(dbModel => {
          console.log("FINDALL", dbModel);
          res.json(dbModel)
        })
        .catch(err => console.log(err));
    },
    // findById: function(req, res) {
    //   db.Book
    //     .findById(req.params.id)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    create: function(req, res) {
      const newBook = req.body
      console.log("Create", newBook);
      db.Book.create(newBook)
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },
    // update: function(req, res) {
    //   db.Book
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => console.log(err));
    // },
    remove: function(req, res) {
      db.Book
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => console.log(err));
    },
  };