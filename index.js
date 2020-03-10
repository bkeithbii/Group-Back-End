const express = require("express");
const app = express();
const parser = require("body-parser");
const index = require("./routes/index");
const cors = require("cors");

app.use(cors());
app.use(parser.json());
app.use("/", index);

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
