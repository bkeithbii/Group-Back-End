const fetch = require("node-fetch");
const fs = require("fs");

const tvURL =
  "https://api.themoviedb.org/3/trending/tv/week?api_key=89714d55c10ecf711638286007448c33";

fetch(tvURL)
  .then(res => res.json())
  .then(res => {
    let countries = JSON.stringify(res);
    fs.writeFile("./db/tvData.json/", tvShows, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Cha-Ching!");
      }
    });
  });
