const MovieModel = require("../models/Movie");

exports.getAdminPage = (req, res, next) => {
  MovieModel.GetAll((movies) => {
    res.status(200).render("admin/admin", {
      title: "Admin",
      adminActive: true,
      moviesList: movies,
    });
  });
};

exports.getAddMoviePage = (req, res, next) => {
  res.status(200).render("admin/save-movie", {
    title: "Add movie",
    addMovieActive: true,
  });
};

exports.postAddMovie = (req, res, next) => {
  const name = req.body.Name;
  const description = req.body.Description;
  const imageUrl = req.body.ImageUrl;
  const gender = req.body.Gender;

  if (!name || !description || !gender || !imageUrl) {
    console.log("error");
  } else {
    const movie = new MovieModel(
      null,
      name,
      description,
      imageUrl,
      null,
      gender
    );
    movie.Save();
  }

  res.status(302).redirect("/");
};

exports.getEditMoviePage = (req, res, next) => {
  const editMode = req.query.edit;
  const movieId = req.params.movieId;

  if (!editMode) {
    return res.status(302).redirect("/");
  }

  MovieModel.GetById(movieId, (movie) => {
    res.status(200).render("admin/save-movie", {
      title: "Edit movie",
      editMode,
      movie,
    });
  });
};

exports.postEditMovie = (req, res, next) => {
  const id = req.body.Id;
  const name = req.body.Name;
  const description = req.body.Description;
  const imageUrl = req.body.ImageUrl;
  const gender = req.body.Gender;

  if (!name || !description || !gender || !imageUrl) {
    console.log("error");
  } else {
    let status = req.body.Status;

    if (status === "true") {
      status = true;
    } else {
      status = false;
    }

    const movie = new MovieModel(id,name,description,imageUrl,status,gender);

    movie.Update();
  }

  res.status(302).redirect("/admin/admin");
};

exports.postDeleteMovie = (req,res,next) => {
  const movieId = req.params.movieId;

  MovieModel.Delete(movieId)
  res.status(302).redirect("/admin/admin");
}