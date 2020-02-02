const {
  sendAllUsers,
  sendSingleUser,
  updateSingleUser
} = require("../controllers/usersControllers");
const userRouter = require("express").Router();

userRouter.route("/").get(sendAllUsers);
userRouter
  .route("/:user_id")
  .get(sendSingleUser)
  .patch(updateSingleUser);
module.exports = { userRouter };
