const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')

const connectDB = require('./config/database')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Load middlewares
// const logger = require("./middlewares/logger");
const errorHandler = require('./middlewares/error')

// Connect to Database
connectDB()

// Route files
const bootcamps = require('./routes/bootcamps')
const courses = require('./routes/courses')

const app = express()

//Body Parser
app.use(express.json())

// Development Logging Middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routes
app.use('/api/v1/bootcamps', bootcamps)
app.use('/api/v1/courses', courses)

// Mount middlewares
//app.use(logger);
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold)
  // Close server and exit process
  server.close(() => process.exit(1))
})
