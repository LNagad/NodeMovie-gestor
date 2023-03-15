const express = require('express')
const router = express.Router()

const adminController = require('../controllers/adminController')

router.get('/admin', adminController.getAdminPage)

router.get('/add-movie', adminController.getAddMoviePage)
router.post('/add-movie', adminController.postAddMovie)

router.get('/edit-movie/:movieId', adminController.getEditMoviePage)
router.post('/edit-movie', adminController.postEditMovie)

router.get('/delete-movie/:movieId', adminController.postDeleteMovie)

module.exports = router