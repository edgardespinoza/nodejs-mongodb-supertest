const Service = require("../services/meter.service.js");
const { CustomError } = require("../utils/CustomError.js");

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
