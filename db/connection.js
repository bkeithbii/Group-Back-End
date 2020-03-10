const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/tvShows", {
  useNewUrlParser: true
});

module.exports = mongoose;
