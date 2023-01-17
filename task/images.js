const { src, dest } = require("gulp");

const path = require("../config/path.js");

//Задачи для images
const images = () => {
  return src(path.images.src).pipe(dest(path.images.dest));
};

module.exports = images;
