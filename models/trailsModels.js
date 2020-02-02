const connection = require("../db/connection");
exports.getAllTrails = () => {
  return connection.select("*").from("otley_run");
};
