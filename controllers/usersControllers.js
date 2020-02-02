const {
  getAllUsers,
  getSingleUser,
  patchSingleUser
} = require("../models/usersModels");
exports.sendAllUsers = (req, res, next) => {
  getAllUsers()
    .then(users => {
      res.status(200).send({ users });
    })
    .catch(error => {});
};
exports.sendSingleUser = (req, res, next) => {
  getSingleUser(req.params).then(response => {
    const user = response[0];
    res.status(200).send({ user });
  });
};
exports.updateSingleUser = (req, res, next) => {
  patchSingleUser(req.params, req.body)
    .then(response => {
      const updatedUser = response[0];
      res.status(201).send({ updatedUser });
    })
    .catch(error => {
      console.log("updatedSingleUser Error ", error);
    });
};
