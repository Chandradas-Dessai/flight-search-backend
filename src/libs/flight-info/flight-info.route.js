const FlightInfoController = require("./flight-info.controller");
const FlightInfoModel = require("./flight-info.model");

exports.flightInfoRoutes = function (app) {
  app.get("/api/flight_info/", [FlightInfoController.findAllFlightData]);
};
