const { sendAllTrails } = require("../controllers/trailControllers");
const trailRouter = require("express").Router();

trailRouter.route("/").get(sendAllTrails);

module.exports = { trailRouter };
