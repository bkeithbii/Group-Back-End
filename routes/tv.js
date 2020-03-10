const express = require("express");
const router = express.Router();
const tvController = require("../controllers/tvController");

router.get("/", tvController.index);
router.get("/rating/:rating", tvController.showRating);
router.get("/name/:name", tvController.showName);
router.get("/releaseDate/:releaseDate", tvController.showReleaseDate);

module.exports = router;
