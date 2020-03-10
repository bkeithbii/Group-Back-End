const Movies = require("../models/Movies");

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
  },
  submit: (req, res) => {
    Movies.create(req.body).then(movies => {
      res.json(movies);
    });
  },
  updateList: (req, res) => {
    Movies.findOneAndUpdate({ name: req.params.name }, req.body).then(
      movies => {
        res.json(movies);
      }
    );
  },
  deleteItem: (req, res) => {
    Movies.findOneAndDelete({ name: req.params.name }).then(movies => {
      res.json(movies);
    });
  }
};
