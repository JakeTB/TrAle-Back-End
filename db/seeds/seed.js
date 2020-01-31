const { usersData } = require("../data/index.js");
console.log(usersData);
exports.seed = function(knex) {
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("users_info").insert(usersData);
    });
};
