const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// Load middlewares
// const logger = require("./middlewares/logger");

// Route files
const bootcamps = require("./routes/bootcamps");

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// Mount middlewares
//app.use(logger);

// Development Logging Middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    "\x1b[4m",
    "\x1b[35m",
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `
  )
);
