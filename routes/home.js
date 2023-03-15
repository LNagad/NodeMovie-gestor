const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

router.get('/', homeController.getHomePage)

router.post('/filter-movie', homeController.getMoviesFiltered)

module.exports = router