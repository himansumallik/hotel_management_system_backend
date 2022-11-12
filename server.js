const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const allApis = require("./apis");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/static", express.static("assets"));

app.use("/api", allApis);

app.listen(9000, async () => {
  console.log("Server running on port 9000...");
});
