const { Client } = require("pg");
const client = new Client({
  host: "localhost",
  user: "himansu_postgres",
  port: 5432,
  password: "himansu_postgres",
  database: "newdb",
});

client.connect();

module.exports = client;
