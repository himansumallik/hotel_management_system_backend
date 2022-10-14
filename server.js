const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.listen(9000, async () => {
  console.log("Server running on port 9000...");
});
