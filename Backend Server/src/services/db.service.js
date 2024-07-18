const {Client} = require("pg");
const db = require('../configs/db.config');

const client = new Client({
  user: db.user,
  password: db.password,
  database: db.database,
  host: db.host,
  port: db.port
});

module.exports = client;