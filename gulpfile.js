const { watch, series, parallel } = require("gulp");
const browserSync = require("browser-sync").create();

const path = require("./config/path.js");

// Задачи
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const scss = require("./task/scss.js");
const images = require("./task/images.js");

//Сервер(синхронизация
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

//Наблюдение
const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.images.watch, images).on("all", browserSync.reload);
};

//Задачи
exports.html = html;
exports.scss = scss;
exports.images = images;

//Сборка
exports.dev = series(
  clear,
  parallel(html, scss, images),
  parallel(watcher, server)
);
