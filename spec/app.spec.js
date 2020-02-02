process.env.NODE_ENV = "test";
const { app } = require("../app");
const request = require("supertest");
const chai = require("chai");
const { expect } = chai;
const chaiSorted = require("chai-sorted");
chai.use(chaiSorted);
const knex = require("../db/connection");
beforeEach(() => {
  return knex.seed.run();
});
after(() => {
  return knex.destroy();
});
describe("API-Testing", () => {
  describe("/users", () => {
    describe("GET - All users", () => {
      describe("Status:200", () => {
        it("Responds with a status of 200", () => {
          return request(app)
            .get("/api/users")
            .expect(200);
        });
        it("Testing that the returned users have the correct ids", () => {
          return request(app)
            .get("/api/users")
            .expect(200)
            .then(({ body: { users } }) => {
              expect(users[0].user_id).to.equal(1);
              expect(users[1].user_id).to.equal(2);
              expect(users[2].user_id).to.equal(3);
            });
        });
        it("Testing that the returned users have the correct names", () => {
          return request(app)
            .get("/api/users")
            .expect(200)
            .then(({ body: { users } }) => {
              expect(users[0].username).to.equal("Adam");
              expect(users[1].username).to.equal("Jake");
              expect(users[2].username).to.equal("Roan");
            });
        });
      });
    });
  });
  describe("/users/:user_id", () => {
    describe("GET - Single User", () => {
      describe("Status:200", () => {
        it("Responds with a status of 200", () => {
          return request(app)
            .get("/api/users/1")
            .expect(200);
        });
        it("Returns the correct user", () => {
          return request(app)
            .get("/api/users/1")
            .expect(200)
            .then(({ body: { user } }) => {
              expect(user.username).to.equal("Adam");
              expect(user.user_id).to.equal(1);
            });
        });
      });
    });
    describe("PATCH - Single User", () => {
      describe("Status:200", () => {
        it("Responds with a status of 200", () => {
          return request(app)
            .patch("/api/users/1")
            .send({ username: "Adam" })
            .expect(201);
        });
        it("Updates the username of the correct user", () => {
          return request(app)
            .patch("/api/users/1")
            .send({ username: "John" })
            .expect(201)
            .then(({ body: { updatedUser } }) => {
              expect(updatedUser.username).to.equal("John");
            });
        });
      });
    });
  });
});
