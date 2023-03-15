const MovieModel = require('../models/Movie')

exports.getHomePage = (req, res, next) => {
    MovieModel.GetAll( (movies) => {
        res.status(200).render('home', {
            title: 'Home',
            homeActive: true,
            moviesList: movies
        })
    })
}