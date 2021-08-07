// module.exports = {
//   port: 4000,
//   appEndpoint: "http://localhost:4000",
//   apiEndpoint: "http://localhost:4000",
//   environment: "dev",
//   db_name: "flight-search-app",
//   db_username: "postgres",
//   db_password: "root",
//   db_host: "localhost",
//   db_dialect: "postgres",
// };

module.exports = {
  port: process.env.DB_PORT,
  appEndpoint: process.env.APP_ENDPOINT,
  apiEndpoint: process.env.API_ENDPOINT,
  environment: process.env.ENVIRONMENT,
  db_name: process.env.DB_DATABASE,
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_dialect: process.env.DB_DIALECT,
};
