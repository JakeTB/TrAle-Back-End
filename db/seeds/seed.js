const { userData } = require("../data/index.js");
console.log("usersData>>>>", userData);

exports.seed = function(knex) {
  console.log("Inside seed");
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("users").insert(userData);
    });
};
