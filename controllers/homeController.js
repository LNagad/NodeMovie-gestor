const MovieModel = require("../models/Movie");

exports.getHomePage = (req, res, next) => {
  MovieModel.GetAll((movies) => {
    res.status(200).render("home", {
      title: "Home",
      homeActive: true,
      moviesList: movies,
      hasMovie: movies.length > 0
    });
  });
};

exports.getMoviesFiltered = (req, res, net) => {
  const gender = req.body.MovieFilter;
  
  if (!gender) {
    return res.status(302).redirect('/')
  }  

  MovieModel.GetMoviesByFilter(gender, (movies) => {
      res.status(302).render('home', {
        title: "Home",
        homeActive: true,
        moviesList: movies,
        hasMovie: movies.length > 0
      })
  });

};
