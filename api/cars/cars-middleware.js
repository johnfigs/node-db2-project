const Cars = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const foundAccount = await Accounts.getById(req.params.id)
    if ( foundAccount ) {
      req.account = foundAccount
      next()
    } else {
      next( { status: 404, message: 'account not found'})
    }
  }
  catch( error ) {
    next ( error )
  }
}

const checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
}

const checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
}
