const Service = require("../services/meter.service.js");
const { CustomError } = require("../utils/CustomError.js");
const { Worker } = require("worker_threads");
const { THREAD_COUNT, createWorker } = require("../worker/config.worker.js");
const path = require("path");

exports.getMeter = async (req, res, next) => {
  const page = req.params.page ?? 1;
  const limit = req.params.limit ?? 10;

  try {
    const meters = await Service.getMeters({}, page, limit);
    return res.status(200).json({ data: meters });
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};

exports.heavy = async (req, res) => {
  let total = 0;
  for (let i = 0; i < 20_000_000_000; i++) {
    total++;
  }
  return res
    .status(200)
    .send(`The result of the CPU intensive task is ${total}\n`);
};

exports.blocking = async (req, res) => {
  const workerPath = path.resolve(__dirname, "../worker/worker.js");

  const worker = new Worker(workerPath);

  worker.on("message", (counter) => {
    res.status(200).send(`result is ${counter}`);
  });
  worker.on("error", (error) => {
    res.status(500).send(`An error occured ${error}`);
  });
};

exports.blockingFast = async (req, res) => {
  const workerPromises = [];
  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromises.push(createWorker());
  }

  const thread_result = await Promise.all(workerPromises);

  let total = 0;
  for (let i = 0; i < thread_result.length; i++) {
    total += thread_result[i];
  }

  res.status(200).send(`result is ${total}`);
};

exports.createMeter = async (req, res, next) => {
  let name = req.body.name;
  if (!name) {
    next(new CustomError(400, "name is empty"));
  }
  let measure = req.body.measure;
  if (!measure) {
    next(new CustomError(400, "measure is empty"));
  }
  let date = req.body.date ?? Date.now();
  try {
    await Service.createMeter(name, measure, date);
    return res.status(201).send();
  } catch (error) {
    next(new CustomError(500, error.message));
  }
};
