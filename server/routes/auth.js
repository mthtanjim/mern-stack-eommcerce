const express = require('express')
const router = express.Router()

//middlewares
const {requireSignin, isAdmin} = require("../middlewares/auth")
//controllers
const {register, login, users, secret} = require('../controllers/auth')

router.post('/register', register)
router.post('/login', requireSignin, isAdmin, login)
router.get('/users', users)

// secret routes for testing
router.get('/secret', requireSignin, isAdmin, secret)

module.exports = router
