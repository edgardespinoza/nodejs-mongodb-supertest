const mongoose = require("mongoose");

exports.connectDb = () => {
  mongoose.connect(process.env.DATABASE_URL);
  const db = mongoose.connection;
  db.on("error", (error) => console.log(error));
  db.once("open", () => console.log("connect database"));
  db.on("reconnected", () => console.log("MongoDB reconnected!"));
  db.on("disconnected", () => console.log("MongoDB disconnected!"));
};
