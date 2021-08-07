const express = require("express");
const env = require("./configs/env");
const flightInfo = require("./libs/flight-info/flight-info.route");

const moment = require("moment");
moment.tz.setDefault("UTC");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header("Access-Control-Expose-Headers", "Content-Length");
  res.header(
    "Access-Control-Allow-Headers",
    "Accept, Authorization, Content-Type, X-Requested-With, Range"
  );
  if (req.method === "OPTIONS") {
    return res.send(200);
  } else {
    return next();
  }
});

app.use(express.json());
flightInfo.flightInfoRoutes(app);

// app.listen(env.port, () => {
//   console.log("app listening at port %s", env.port);
// });

app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
