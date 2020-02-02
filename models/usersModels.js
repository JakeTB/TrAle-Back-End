const connection = require("../db/connection");
exports.getAllUsers = () => {
  return connection.select("*").from("users");
};
exports.getSingleUser = params => {
  const { user_id } = params;
  return connection
    .select("*")
    .from("users")
    .where({ user_id });
};
exports.patchSingleUser = (params, body) => {
  const { username } = body;
  const { user_id } = params;
  console.log(username);
  return connection
    .from("users")
    .where({ user_id })
    .update({ username })
    .returning("*");
};
