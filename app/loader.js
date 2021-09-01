// initializes any kind of services that we need
import { MongoClient } from "mongodb";
import config from "./config.js";

const client = new MongoClient(config.db);

client
  .connect()
  .then(() => {
    console.info("mongoDB client running");
  })
  .catch((err) => {
    console.err("Error starting mongoDB client", err.message);

    // exit process with failure
    process.exit(1);
  });

process.on("SIGINT", () => {
  client.close().then(() => {
    console.info("mongoDB client disconnected");
    process.exit(0);
  });
});

export default client;
