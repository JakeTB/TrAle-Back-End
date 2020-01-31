const { sendAllUsers } = require("../controllers/usersControllers");
const userRouter = require("express").Router();
console.log("Inside of router");
userRouter.route("/").get(sendAllUsers);

module.exports = { userRouter };
