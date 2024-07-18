const express = require("express");
const app = express();
const client = require('./src/services/db.service')
const port = 2500;

app.get("/" , async (req, res) => {
  await client.connect();
  const result = await client.query('select * from url_maps');
  res.send(result);
})

app.listen(port, ()=>{
  console.log("Listening on port: " + port);
})

