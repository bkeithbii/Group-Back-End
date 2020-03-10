const fs = require("fs");
const fetch = require("node-fetch");
const url =
  "https://api.themoviedb.org/3/trending/movie/week?api_key=614c211b2d4c03410bfb2e7b28367475&page=3";

fetch(url)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    let movies = JSON.stringify(res);
    fs.writeFile("./db/data.json", movies, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("success");
      }
    });
  });
