const express = require('express');
const os = require('os');
const fs = require('fs');
const { Client } = require('pg');

const app = express();

app.get('/', async function(req, res) {
  let networkInterface = os.networkInterfaces()['en0'];
  if (!networkInterface) {
    networkInterface = os.networkInterfaces()['eth0'];
  }

  let datetimeString = await connectToDatabase();

  const fileContents = fs.readFileSync("./greeting.txt");
  const hostInfo = {
    hostname: os.hostname(),
    network: networkInterface[0].address,
    fileContents: fileContents.toString(),
    datetimeString
  };
  res.json(hostInfo);
});

app.listen(3000);

console.log("Server listening on port 3000");

async function connectToDatabase() {
  const client = new Client({
    user: 'test',
    host: 'db',
    database: 'foobar',
    password: 'secret',
    port: 5432,
  });
  try {
    await client.connect();
    const res = await client.query("SELECT NOW();");
    const datetimeString = res.rows[0].now;
    await client.end();
    return datetimeString;
  } catch (e) {
    console.log(e);
    return "DB not available"
  }
}
