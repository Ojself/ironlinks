const mongoose = require("mongoose");

// Don't forget to set "MONGODB_URI" in ~/server/.env
const uri = process.env.MONGODB_URI || "check .env";

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
