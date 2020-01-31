const connection = require("../db/connection");
exports.getAllTrails = () => {
  console.log("Here");
  return connection.select("*").from("otley_run");
};
