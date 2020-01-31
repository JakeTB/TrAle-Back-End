const apiRouter = require("express").Router();
const { userRouter } = require("./usersRouters");
const { trailRouter } = require("./trailRouter");
apiRouter.use("/users", userRouter);
apiRouter.use("/trails", trailRouter);
apiRouter.route("/").get((req, res, next) => {
  res.status(200).send({ message: "Hello" });
});
module.exports = { apiRouter };
