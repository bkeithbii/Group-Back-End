const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/", movieController.index);
router.get("/rating/:rating", movieController.showRating);
router.get("/name/:name", movieController.showName);
router.get("/releaseDate/:releaseDate", movieController.showReleaseDate);

module.exports = router;
