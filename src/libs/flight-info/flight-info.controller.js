const FlightInfoModel = require("./flight-info.model");
const fs = require("fs");

exports.findAllFlightData = (req, res) => {
  let origin = req.query.origin,
    destination = req.query.destination,
    departureDate = req.query.departure_date,
    returnDate = req.query.return_date,
    ticketPrice = req.query.ticket_price;

  if (origin && destination && departureDate && !returnDate && !ticketPrice) {
    FlightInfoModel.findFlightsByOrgDestDep(
      origin,
      destination,
      departureDate
    ).then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      }
    );
  } else if (
    origin &&
    destination &&
    departureDate &&
    ticketPrice &&
    !returnDate
  ) {
    FlightInfoModel.findFlightsByOrgDestDepPrice(
      origin,
      destination,
      departureDate,
      ticketPrice
    ).then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      }
    );
  } else if (
    origin &&
    destination &&
    departureDate &&
    returnDate &&
    !ticketPrice
  ) {
    FlightInfoModel.findFlightsByOrgDestDepRet(
      origin,
      destination,
      departureDate,
      returnDate
    ).then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      }
    );
  } else if (
    origin &&
    destination &&
    departureDate &&
    returnDate &&
    ticketPrice
  ) {
    FlightInfoModel.findFlightsByOrgDestDepRetPrice(
      origin,
      destination,
      departureDate,
      returnDate,
      ticketPrice
    ).then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      }
    );
  } else if (
    ticketPrice &&
    !origin &&
    !destination &&
    !departureDate &&
    !returnDate
  ) {
    FlightInfoModel.findFlightsByTicketPrice(ticketPrice).then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      }
    );
  } else {
    FlightInfoModel.findAllFlightInfos().then(
      (result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(406).send(err);
      }
    );
  }
};
