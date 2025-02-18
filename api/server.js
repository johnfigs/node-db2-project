const express = require("express")

const CarsRouter = require('./cars/cars-router')

const server = express()

server.use(express.json())

server.use('/api/cars', CarsRouter)

// eslint-disable-next-line
server.use( ( err, req, res, next ) => {
  res.status( err.status || 500 ).json({
    message: err.message
  })
})


module.exports = server


