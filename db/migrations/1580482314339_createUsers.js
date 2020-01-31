exports.up = function(knex) {
  return knex.schema.createTable("users_info", usersTable => {
    usersTable.increments("user_id").primary();
    usersTable.text("avatar");
    usersTable.string("username").notNullable();
    usersTable.timestamp("joined").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users_info");
};
