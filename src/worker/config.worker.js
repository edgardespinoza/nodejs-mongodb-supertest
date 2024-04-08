const { Worker } = require("worker_threads");
const path = require("path");

const THREAD_COUNT = 4;

const createWorker = () => {
  const workerPath = path.resolve(__dirname, "../worker/four_workers.js");

  return new Promise((resolve, reject) => {
    const worker = new Worker(workerPath, {
      workerData: { thread_count: THREAD_COUNT },
    });
    worker.on("message", (data) => resolve(data));
    worker.on("error", (error) => reject(`An error occured ${error}`));
  });
};

module.exports = {
  THREAD_COUNT,
  createWorker,
};
