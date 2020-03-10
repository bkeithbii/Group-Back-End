const TV = require("../models/TV");

const tvData = data.map(item => {
  const tvShow = {};
  tvShow.title = item.title;
  tvShow.description = item.description;
  tvShow.rating = item.rating;
  tvShow.releaseDate = item.releaseDate;
  tvShow.image = item.image;
  return tvShow;
});

TV.remove({});
TV.collection
  .insert(tvData)
  .then(tvShows => {
    console.log(tvShows);
  })
  .catch(err => {
    console.log(err);
  });
