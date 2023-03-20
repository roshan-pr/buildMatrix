const { createClient } = require("redis");
const { getBuildData } = require("./library.js");
const client = createClient();

// const { Server, Authorization } = require("./.credentials.json");
const { Server, Authorization, Jobs } = require("./.localCredentials.json");
const url = Server + "job/" + Jobs[0] + "/5/api/json";

client
  .connect()
  .then((_) => client.get("key"))
  // .then((x) => JSON.parse(x))
  .then((x) => console.log(x))
  .then((_) => client.disconnect());
client.on("error", (err) => console.log("Redis Client Error", err));

getBuildData(url, Authorization);
