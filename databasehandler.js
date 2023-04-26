
const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "himansu_pgs",
  port: 5432,
  password: "himansu_pgs",
  database: "newdb",
});

client.connect();

module.exports = client;
