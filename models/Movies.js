const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  description: String,
  rating: Number,
  releaseDate: String,
  image: String,
  media: String
});
module.exports = mongoose.model("Movies", movieSchema);
