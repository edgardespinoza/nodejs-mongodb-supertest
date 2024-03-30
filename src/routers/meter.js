const { createMeter, getMeter } = require("../controllers/meter.controller.js");

exports.register = (router) => {
  router.get("/api", getMeter);

  router.post("/api", createMeter);
};
