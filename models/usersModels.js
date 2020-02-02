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
  const { username, avatar } = body;
  const { user_id } = params;
  console.log(body);

  if (!Object.entries(body).length) {
    return connection
      .from("users")
      .where({ user_id })
      .returning("*")
      .then(response => {
        response.status = 200;
        return response;
      });
  }
  if (username && avatar) {
    return connection
      .from("users")
      .where({ user_id })
      .update({ username, avatar })
      .returning("*");
  }
  if (username) {
    return connection
      .from("users")
      .where({ user_id })
      .update({ username })
      .returning("*");
  }
  if (avatar) {
    return connection
      .from("users")
      .where({ user_id })
      .update({ avatar })
      .returning("*");
  }
};
