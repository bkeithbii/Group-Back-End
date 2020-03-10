const TV = require("../models/TV");

module.exports = {
  index: (req, res) => {
    TV.find({}).then(tvShow => {
      res.json(tvShow);
    });
  },
  showRating: (req, res) => {
    TV.find({ rating: req.params.rating }).then(tvShow => {
      res.json(tvShow);
    });
  },
  showName: (req, res) => {
    TV.find({ name: req.params.name }).then(tvShow => {
      res.json(tvShow);
    });
  },
  showReleaseDate: (req, res) => {
    TV.find({ releaseDate: req.params.releaseDate }).then(tvShow => {
      res.json(tvShow);
    });
  }
};
