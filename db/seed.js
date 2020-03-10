const Movies = require("../models/Movies");
const data = require("./data.json");

const moviesData = data.results.map(item => {
  const trendingMovies = {
    name: item.title,
    description: item.overview,
    rating: item.vote_average,
    releaseDate: item.release_date,
    image: item.poster_path
  };

  return trendingMovies;
});
console.log(moviesData);

Movies.remove({}).then(() => {
  Movies.create(moviesData)
    .then(showMovies => {
      console.log(showMovies);
      process.exit();
    })
    .catch(err => {
      console.log(err);
    });
});
