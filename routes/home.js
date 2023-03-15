const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

router.get('/', homeController.getHomePage)
router.get('/movie-details/:movieId', homeController.getMovieDetailsPage)

router.post('/filter-movie', homeController.getMoviesFiltered)

module.exports = router