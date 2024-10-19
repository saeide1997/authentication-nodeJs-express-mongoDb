const express = require('express')
const {register, login} = require( '../controllers/authController')

const router = express.Router()

//------------ Login Route ------------//
router.get('/login', (req, res) => res.render('login'));

//------------ Register Route ------------//
router.get('/register', (req, res) => res.render('register'));

router.post("/register", register)
router.post("/login", login)

module.exports = router