const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");
// const cors = require("cors");

// app.use(cors());
app.use(parser.json());
app.use("/", index);

app.listen(3050, () => console.log("listening on port 3050"));
