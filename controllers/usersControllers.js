const { getAllUsers } = require("../models/usersModels");
exports.sendAllUsers = (req, res, next) => {
  getAllUsers()
    .then(response => {
      console.log(response, "response in model");
      res.status(200).send({ response });
    })
    .catch(error => {});
};
