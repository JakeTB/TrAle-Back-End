const { sendAllTrails } = require("../controllers/trailControllers");
const trailRouter = require("express").Router();
console.log("Inside of router");
trailRouter.route("/").get(sendAllTrails);

module.exports = { trailRouter };
