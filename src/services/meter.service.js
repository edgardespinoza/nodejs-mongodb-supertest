const Light = require("../models/meter.model.js");

const getMeters = async (query, page, limit) => {
  try {
    return await Light.find(query);
  } catch (error) {
    throw Error(`error find meter ${error}`);
  }
};

const createMeter = async (name, measure, createAt) => {
  const meter = new Light({
    name: name,
    measure: measure,
    createAt: createAt,
  });
  try {
    return await meter.save();
  } catch (error) {
    throw Error(`error create meter ${error}`);
  }
};

module.exports = { createMeter, getMeters };
