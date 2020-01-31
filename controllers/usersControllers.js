const { getAllUsers } = require("../models/usersModels");
exports.sendAllUsers = (req, res, next) => {
  console.log("Inside of model");
  getAllUsers()
    .then(response => {
      res.status(200).send({ response });
    })
    .catch(error => {
      console.log(error, "<<<<ERROR");
    });
};
