exports.up = function(knex) {
  console.log("exports up");
  return knex.schema.createTable("users", usersTable => {
    usersTable.increments("user_id").primary();
    usersTable.text("avatar");
    usersTable.string("username").notNullable();
    usersTable.timestamp("joined").defaultTo(knex.fn.now());
    console.log("Created table called 'users_info");
  });
};

exports.down = function(knex) {
  console.log("dropped tablee called users info");
  return knex.schema.dropTable("users");
};
