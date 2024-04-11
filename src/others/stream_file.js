const fs = require("fs");
const path = require("path");
const workerPath = path.resolve(__dirname, "./data.txt");

const readable = fs.createReadStream(workerPath, { highWaterMark: 100 });

let chunkCount = 0;

readable.on("data", (chunk) => {
  if (chunkCount === 2) {
    readable.pause();
    setTimeout(() => {
      readable.resume();
    }, 3000);
  }
  console.log(chunk.toString());
  chunkCount++;
}) ;

readable.on("error", (error) => {
  console.log(`Error ${error}`);
});
