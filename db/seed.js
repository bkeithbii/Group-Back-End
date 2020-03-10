const Movies = require("../models/Movies");
const data = require("./data.json");

const moviesData = data.results.map(params => {
  const trendingMovies = {
    vote_average: params.vote_average,
    title: params.title,
    release_Date: params.release_Date,
    overview: params.overview,
    image: params.poster_path
  };

  return trendingMovies;
});
console.log(moviesData);
