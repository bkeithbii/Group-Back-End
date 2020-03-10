const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/movies", { useNewUrlParser: true });

module.exports = mongoose;
