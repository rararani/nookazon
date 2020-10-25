const request = require("supertest");
const app = require("./server/app");

describe("Test the root path", () => {
  test("We should get the response of the GET request", (done) => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
