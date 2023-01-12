const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "himansu_pg",
  port: 5432,
  password: "himansu_pg",
  database: "newdb",
});

client.connect();

module.exports = client;
