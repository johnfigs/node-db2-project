const express = require('express')

const Cars = require('./cars-model')

//const { middleware } = require(middleware path)

const router = express.Router()

// [GET] /api/cars/
router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(next)
})

module.exports = router