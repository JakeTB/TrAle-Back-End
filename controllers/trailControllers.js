const { getAllTrails } = require("../models/trailsModels");
exports.sendAllTrails = (req, res, next) => {
  console.log("Inside of model");
  getAllTrails()
    .then(response => {
      console.log("Response", response);
      res.status(200).send({ response });
    })
    .catch(error => {
      console.log(error, "<<<<ERROR");
    });
};
