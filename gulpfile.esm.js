import { src, dest } from "gulp";
import browserSync from "browser-sync";
import pug from "gulp-pug";
import sass from "gulp-sass";
import nodeSass from "node-sass";

sass.compiler = nodeSass;

const localServer = browserSync.create();

function server() {
  localServer.init({
    server: {
      baseDir: "build",
    },
  });
}

export function html() {
  return src("src/views/pages/*.pug").pipe(pug()).pipe(dest("build"));
}

export function css() {
  return src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("build/css"));
}

export const serve = server;
export default (cb) => {
  cb();
};
