const fs = require("fs");
const path = require("path");

const dataPath = path.join(
  path.dirname(require.main.filename),
  "data",
  "movies.json"
);

const GetAllMoviesFromFile = function (callBack) {
  fs.readFile(dataPath, function (error, data) {
    if (error) {
      callBack([]);
    } else {
      callBack(JSON.parse(data));
    }
  });
};

module.exports = class Movie {
  constructor(id, name, description, imageUrl, status, gender) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
    this.status = status;
    this.gender = gender;
  }

  static GetAll(cb) {
    GetAllMoviesFromFile(cb);
  }

  static GetById(id, cb) {
    GetAllMoviesFromFile((movies) => {
      const movie = movies.find((p) => p.id === id);
      cb(movie);
    });
  }

  Save() {
    GetAllMoviesFromFile((movies) => {
      this.id = Math.random().toString();
      this.status = true;

      movies.push(this);

      fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
        console.log(error);
      });
    });
  }

  Update() {
    GetAllMoviesFromFile((movies) => {
      if (this.id) {
        const editMovieIndex = movies.findIndex(
          (movie) => movie.id === this.id
        );

        movies[editMovieIndex] = this;

        fs.writeFile(dataPath, JSON.stringify(movies), function (error) {
          console.log(error);
        });
      }
    });
  }
};
