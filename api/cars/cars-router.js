const express = require('express')

const Cars = require('./cars-model')

const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique} = require('./cars-middleware')

const router = express.Router()

// [GET] /api/cars/
router.get('/', (req, res, next) => {
    Cars.getAll()
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(next)
})

// [GET] /api/cars/id
router.get('/:id', checkCarId, (req, res) => {
    res.status(200).json(req.car)
})

// [POST] /api/cars/
router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, 
async (req, res, next) => {
    try {
        const newCar = await Cars.create(req.body)
        res.json(newCar)
    } catch( err ) {
        next( err )
    }
})

module.exports = router