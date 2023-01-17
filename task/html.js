const { src,dest} = require("gulp"); 

const path = require("../config/path.js");
const app = require("../config/app.js");


const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include"); //плагин шаблонизации
const htmlmin = require("gulp-htmlmin"); //плагин сжатия файла html
const gulpPlumber = require("gulp-plumber");
const size = require("gulp-size"); // плагин просмотра размера сатия файла

 





//Задачи для HTML
const html = () => {
     return src(path.html.src)
     .pipe(plumber({
        errorHandler: notify.onError(error => ({
            title: "HTML",
            massage: error.massage
        }))
     }))



     .pipe( fileInclude())//шаблонизация повторяющихся элементов HTML
     .pipe(size({title: "До сжатия"}))  //смотрим сколько весит файл до сжатия                   
     .pipe(htmlmin(app.htmlmin))
     .pipe(size({title: "После сжатия"}))  //смотрим сколько весит файл после сжатия
     .pipe(dest(path.html.dest)) //Сборка в единый файл HTML(сборка формируется в папке pablic)
    
    }

 module.exports = html;