const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + "/*.html",
    watch: pathSrc + "/**/*.html",
    dest: pathDest,
  },
  pug: {
    src: pathSrc + "/pug/*.pug",
    watch: pathSrc + "/pug/**/*.pug",
    dest: pathDest,
  },
  css: {
    src: pathSrc + "/css/*.css",
    watch: pathSrc + "/css/**/*.css",
    dest: pathDest + "/css",
  },
  scss: {
    src: pathSrc + "/sass/*.{sass,scss}",
    watch: pathSrc + "/sass/**/*.{sass,scss}",
    dest: pathDest + "/css",
  },
  images: {
    src: pathSrc + "/images/**/*",
    watch: pathSrc + "/images/**/*",
    dest: pathDest + "/images",
  },
};
