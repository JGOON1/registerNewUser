const newUserController = require('../controllers/newUserController')

// create a Router object from express
const router = require('express').Router()

// add a new User to the table
router.post('/', newUserController.addUser)

// access all the cUsers in the table
router.get('/', newUserController.getAllUsers)