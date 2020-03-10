const dataTV = require("./tvData.json");
const TV = require("../models/TV");

const tvData = dataTV.results.map(item => {
  const tvShow = {
    name: item.name,
    description: item.overview,
    rating: item.vote_average,
    releaseDate: item.first_air_date,
    image: item.poster_path
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
