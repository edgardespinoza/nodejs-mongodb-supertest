const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../src/app.js");

const { MongoMemoryServer } = require("mongodb-memory-server");

describe("meter", () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create();

    await mongoose.connect(mongoServer.getUri());
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });

  describe("get meters", () => {
    it("should return 200 OK",  () => {
       supertest(app).get("/api").expect(200);
    });
  });

  describe("create meters", () => {
    it("should return bad request",  () => {
      const meter = {
        name: "name",
      };

       supertest(app).post("/api").send(meter).expect(400);
    });

    it("should return meter created",  () => {
      const meter = {
        name: "name",
        measure: 101,
      };

       supertest(app).post("/api").send(meter).expect(201);
    });
  });
});
