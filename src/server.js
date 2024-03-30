const dotenv = require("dotenv");
const app = require("./app.js");
const { connectDb } = require("./db/mongo.db.js");

dotenv.config();
connectDb();

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`start ${port}`);
});
