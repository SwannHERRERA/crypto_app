const express = require('express')

const tokenController = require('../controllers/token')

const router = express.Router()

// GET /token/posts
router.get('/listing', tokenController.listing)

module.exports = router
