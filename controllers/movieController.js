const express = require("express");
const app = express;
const Movies = require("../models/Movies");

app.use(parser.json());

module.exports = {
  index: (req, res) => {
    Movies.find({}).then(movies => {
      res.json(movies);
    });
  },
  showRating: (req, res) => {
    Movies.find({ rating: req.params.rating }).then(movies => {
      res.json(movies);
    });
  },
  showName: (req, res) => {
    Movies.find({ name: req.params.name }).then(movies => {
      res.json(movies);
    });
  },
  showReleaseDate: (req, res) => {
    Movies.find({ releaseDate: req.params.releaseDate }).then(movies => {
      res.json(movies);
    });
  }
};
