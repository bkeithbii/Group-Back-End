const TV = require("../models/TV");

TV.remove({});
TV.collection
  .insert(tvData)
  .then(tvShows => {
    console.log(tvShows);
  })
  .catch(err => {
    console.log(err);
  });
