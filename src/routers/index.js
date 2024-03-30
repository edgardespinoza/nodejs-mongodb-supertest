const { Router } = require("express");
const { readdirSync } = require("fs");

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName) => {
  return fileName.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  fileName = cleanFileName(fileName);
  if (fileName !== "index") {
    const module = require(`./${fileName}`);
    module.register(router);
  }
});

module.exports = router;
