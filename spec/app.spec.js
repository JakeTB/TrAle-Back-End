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
    describe.only("PATCH - Single User", () => {
      describe.only("Status: 200", () => {
        it("If sent a patch request with an empty body responds with status of 200", () => {
          return request(app)
            .patch("/api/users/1")
            .send({})
            .expect(200);
        });
      });
      describe("Status:201", () => {
        it("Responds with a status of 201", () => {
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
        it("Updates the avatar picture of the correct user", () => {
          return request(app)
            .patch("/api/users/1")
            .send({ avatar: "Test change 12" })
            .expect(201)
            .then(({ body: { updatedUser } }) => {
              expect(updatedUser.avatar).to.equal("Test change 12");
            });
        });
        it("Updates both the avatar and the picture of the correct user", () => {
          return request(app)
            .patch("/api/users/2")
            .send({ username: "Alex", avatar: "123" })
            .expect(201)
            .then(({ body: { updatedUser } }) => {
              expect(updatedUser.avatar).to.equal("123");
              expect(updatedUser.username).to.equal("Alex");
            });
        });
      });
      describe("Errors", () => {
        describe("Status 404", () => {
          it("If sent an incorrect url responds with a 404", () => {
            return request(app)
              .patch("/api/usrs/1")
              .send({ username: "Jon" })
              .expect(404);
          });
        });
      });
    });
  });
});
