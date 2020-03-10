const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: String,
  vote_average: Number,
  title: String,
  release_Date: Date,
  overview: String,
  poster_path: String
});
module.exports = mongoose.model("Movies", movieSchema);
