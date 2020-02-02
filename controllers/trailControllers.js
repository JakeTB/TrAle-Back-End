const { getAllTrails } = require("../models/trailsModels");
exports.sendAllTrails = (req, res, next) => {
  getAllTrails()
    .then(response => {
      res.status(200).send({ response });
    })
    .catch(error => {});
};
