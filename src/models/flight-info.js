module.exports = (sequelize, DataTypes) => {
  const flightInfo = sequelize.define("flight-info", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    departure_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    origin_departure_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin_arrival_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_departure_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_arrival_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    flight_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_origin_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flight_destination_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return flightInfo;
};
