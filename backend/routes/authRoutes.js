const express = require('express')
const authController=require('../controllers/authController')
const router = express.Router()

router.post('/login', authController.loginUser_post)
router.post('/signup', authController.signupUser_post)

module.exports = router
