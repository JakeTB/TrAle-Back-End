const connection = require("../db/connection");
exports.getAllUsers = () => {
  console.log("Here");
  return connection
    .select("*")
    .from("users")
    .then(response => {
      console.log(response);
    });
};
