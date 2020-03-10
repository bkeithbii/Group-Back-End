const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/trendingflix", {
  useNewUrlParser: true
});

module.exports = mongoose;
