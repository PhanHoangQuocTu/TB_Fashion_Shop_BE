const express = require('express')
const router = express.Router()
const authController = require('../app/controllers/authController.js')


router.get('/', authController.index);
router.post('/checkLogin', authController.login)
// router.get('/checkLogin', authController.login)



module.exports = router