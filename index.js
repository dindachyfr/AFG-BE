require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const helper = require("./src/helper/common")
const userRoute = require("./src/route/user")
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
  });
  
app.use(cors());
// access json data
app.use(express.json());

// memermudah debugging
app.use(morgan("dev"));

app.use("/users", userRoute);

// handle wrong endpoint
app.use(helper.handleNotFound);

// handle error
app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: message
  });
});

