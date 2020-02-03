const {
  sendAllUsers,
  sendSingleUser,
  updateSingleUser
} = require("../controllers/usersControllers");
const userRouter = require("express").Router();

userRouter.route("/").get(sendAllUsers);
userRouter
  .route("/:id")
  .get(sendSingleUser)
  .patch(updateSingleUser);
module.exports = { userRouter };
