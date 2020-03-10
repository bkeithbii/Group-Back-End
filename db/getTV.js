const fs = require("fs");
const fetch = require("node-fetch");

const tvURL =
  "https://api.themoviedb.org/3/trending/tv/week?api_key=89714d55c10ecf711638286007448c33&page=3";

fetch(tvURL)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    let tvShows = JSON.stringify(res);
    fs.writeFile("./db/tvData3.json", tvShows, err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Cha-Ching!");
      }
    });
  });
