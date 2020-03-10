const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");
// const cors = require("cors");
// app.use(cors());

app.use(parser.json());
app.use("/", index);

// app.listen(3000, () => console.log("listening on port 3000"));

app.get("/", function(req, res) {
  res.json({
    Directory: "Choose an option below",

    Movies: "https://group-back-end.herokuapp.com/movie",
    Shows: "https://group-back-end.herokuapp.com/tv"
  });
});

app.set("port", process.env.PORT || 9090);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
