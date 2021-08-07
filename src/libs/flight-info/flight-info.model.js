const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const sequelize = require("../../configs/connection");
const FlightInfo = require("../../models/flight-info")(sequelize, Sequelize);

FlightInfo.sync();

exports.findAllFlightInfos = () => {
  return new Promise((resolve, reject) => {
    FlightInfo.findAll({
      attributes: [
        "id",
        "departure_date",
        "origin_departure_time",
        "origin_arrival_time",
        "return_departure_time",
        "return_arrival_time",
        "return_date",
        "flight_name",
        "flight_number",
        "flight_origin",
        "flight_destination",
        "flight_origin_code",
        "flight_destination_code",
        "ticket_price",
      ],
    }).then(
      (FlightInfo) => {
        resolve(FlightInfo);
      },
      (err) => {
        reject({ error: err });
      }
    );
  });
};

exports.findFlightsByOrgDestDep = (origin, destination, departureDate) => {
  return new Promise((resolve, reject) => {
    FlightInfo.findAll({
      attributes: [
        "id",
        "departure_date",
        "origin_departure_time",
        "origin_arrival_time",
        "return_departure_time",
        "return_arrival_time",
        "return_date",
        "flight_name",
        "flight_number",
        "flight_origin",
        "flight_destination",
        "flight_origin_code",
        "flight_destination_code",
        "ticket_price",
      ],
      where: {
        departure_date: departureDate,
        [Op.and]: [
          {
            [Op.or]: [
              { flight_origin: origin },
              { flight_origin_code: origin },
            ],
          },
          {
            [Op.or]: [
              { flight_destination: destination },
              { flight_destination_code: destination },
            ],
          },
        ],
      },
    }).then(
      (FlightInfo) => {
        resolve(FlightInfo);
      },
      (err) => {
        reject({ error: err });
      }
    );
  });
};

exports.findFlightsByOrgDestDepRet = (
  origin,
  destination,
  departureDate,
  returnDate
) => {
  return new Promise((resolve, reject) => {
    FlightInfo.findAll({
      attributes: [
        "id",
        "departure_date",
        "origin_departure_time",
        "origin_arrival_time",
        "return_departure_time",
        "return_arrival_time",
        "return_date",
        "flight_name",
        "flight_number",
        "flight_origin",
        "flight_destination",
        "flight_origin_code",
        "flight_destination_code",
        "ticket_price",
      ],
      where: {
        departure_date: departureDate,
        return_date: returnDate,
        [Op.and]: [
          {
            [Op.or]: [
              { flight_origin: origin },
              { flight_origin_code: origin },
            ],
          },
          {
            [Op.or]: [
              { flight_destination: destination },
              { flight_destination_code: destination },
            ],
          },
        ],
      },
    }).then(
      (FlightInfo) => {
        resolve(FlightInfo);
      },
      (err) => {
        reject({ error: err });
      }
    );
  });
};

exports.findFlightsByOrgDestDepPrice = (
  origin,
  destination,
  departureDate,
  ticketPrice
) => {
  return new Promise((resolve, reject) => {
    FlightInfo.findAll({
      attributes: [
        "id",
        "departure_date",
        "origin_departure_time",
        "origin_arrival_time",
        "return_departure_time",
        "return_arrival_time",
        "return_date",
        "flight_name",
        "flight_number",
        "flight_origin",
        "flight_destination",
        "flight_origin_code",
        "flight_destination_code",
        "ticket_price",
      ],
      where: {
        departure_date: departureDate,
        ticket_price: {
          [Op.lte]: ticketPrice,
        },
        [Op.and]: [
          {
            [Op.or]: [
              { flight_origin: origin },
              { flight_origin_code: origin },
            ],
          },
          {
            [Op.or]: [
              { flight_destination: destination },
              { flight_destination_code: destination },
            ],
          },
        ],
      },
    }).then(
      (FlightInfo) => {
        resolve(FlightInfo);
      },
      (err) => {
        reject({ error: err });
      }
    );
  });
};

exports.findFlightsByOrgDestDepRetPrice = (
  origin,
  destination,
  departureDate,
  returnDate,
  ticketPrice
) => {
  return new Promise((resolve, reject) => {
    FlightInfo.findAll({
      attributes: [
        "id",
        "departure_date",
        "origin_departure_time",
        "origin_arrival_time",
        "return_departure_time",
        "return_arrival_time",
        "return_date",
        "flight_name",
        "flight_number",
        "flight_origin",
        "flight_destination",
        "flight_origin_code",
        "flight_destination_code",
        "ticket_price",
      ],
      where: {
        departure_date: departureDate,
        return_date: returnDate,
        ticket_price: {
          [Op.lte]: ticketPrice,
        },
        [Op.and]: [
          {
            [Op.or]: [
              { flight_origin: origin },
              { flight_origin_code: origin },
            ],
          },
          {
            [Op.or]: [
              { flight_destination: destination },
              { flight_destination_code: destination },
            ],
          },
        ],
      },
    }).then(
      (FlightInfo) => {
        resolve(FlightInfo);
      },
      (err) => {
        reject({ error: err });
      }
    );
  });
};

exports.findFlightsByTicketPrice = (ticketPrice) => {
  return new Promise((resolve, reject) => {
    FlightInfo.findAll({
      attributes: [
        "id",
        "departure_date",
        "origin_departure_time",
        "origin_arrival_time",
        "return_departure_time",
        "return_arrival_time",
        "return_date",
        "flight_name",
        "flight_number",
        "flight_origin",
        "flight_destination",
        "flight_origin_code",
        "flight_destination_code",
        "ticket_price",
      ],
      where: {
        ticket_price: {
          [Op.lte]: ticketPrice,
        },
      },
    }).then(
      (FlightInfo) => {
        resolve(FlightInfo);
      },
      (err) => {
        reject({ error: err });
      }
    );
  });
};
