const dataTV = require("./tvData.json");
const TV = require("../models/TV");
const Movies = require("../models/Movies");
const data = require("./movieData.json");

const tvData = dataTV.results.map(item => {
  const tvShow = {
    title: item.original_name,
    description: item.overview,
    rating: item.vote_average,
    releaseDate: item.first_air_date,
    image: item.poster_path,
    media: item.media_type
  };
  return tvShow;
});

// console.log(tvData);

TV.remove({}).then(() => {
  TV.create(tvData)
    .then(tvShows => {
      console.log(tvShows);
    })
    .catch(err => {
      console.log(err);
    });
});

const moviesData = data.results.map(item => {
  const trendingMovies = {
    name: item.title,
    description: item.overview,
    rating: item.vote_average,
    releaseDate: item.release_date,
    image: item.poster_path,
    media: item.media_type
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
