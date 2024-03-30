const express = require("express");
const router = require("./routers/index.js");
const { handleError } = require("./utils/handleError.js");
const app = express();

app.use(express.json());
app.use(router);
app.use(handleError);

module.exports = app;
