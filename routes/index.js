const express = require("express");
const router = express.Router();

router.use("/tv", require("./tv"));

module.exports = router;
