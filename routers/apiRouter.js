const apiRouter = require("express").Router();
const { userRouter } = require("./usersRouters");
apiRouter.use("/users", userRouter);
apiRouter.route("/").get((req, res, next) => {
  res.status(200).send({ message: "Hello" });
});
module.exports = { apiRouter };
