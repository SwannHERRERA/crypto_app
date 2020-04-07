const express = require('express')

const userController = require('../controllers/user')

const router = express.Router()

// GET /user/posts
router.get('/listing', userController.listing)

router.post('/', userController.insert)

module.exports = router
