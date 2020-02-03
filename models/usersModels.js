const connection = require("../db/connection");
exports.getAllUsers = () => {
  return connection.select("*").from("users");
};
exports.getSingleUser = params => {
  const { id } = params;
  return connection
    .select("*")
    .from("users")
    .where({ id });
};
exports.patchSingleUser = (params, body) => {
  const { username, avatar } = body;
  const { id } = params;
  console.log(body);

  if (!Object.entries(body).length) {
    return connection
      .from("users")
      .where({ id })
      .returning("*")
      .then(response => {
        response.status = 200;
        return response;
      });
  }
  if (username && avatar) {
    return connection
      .from("users")
      .where({ id })
      .update({ username, avatar })
      .returning("*");
  }
  if (username) {
    return connection
      .from("users")
      .where({ id })
      .update({ username })
      .returning("*");
  }
  if (avatar) {
    return connection
      .from("users")
      .where({ id })
      .update({ avatar })
      .returning("*");
  }
};
