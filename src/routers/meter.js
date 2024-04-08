const {
  createMeter,
  getMeter,
  blocking,
  blockingFast,
  heavy,
} = require("../controllers/meter.controller.js");

exports.register = (router) => {
  router.get("/api", getMeter);

  router.post("/api", createMeter);

  router.get("/blocking", blocking);
  router.get("/blocking-fast", blockingFast);
  router.get("/heavy", heavy);
};
