import { src, dest } from "gulp";
import bs from "browser-sync";
import pug from "gulp-pug";

const browserSync = bs.create();

function server() {
  browserSync.init({
    server: {
      baseDir: "build",
    },
  });
}

export function html() {
  return src("src/views/pages/*.pug").pipe(pug()).pipe(dest("build"));
}

export const serve = server;
export default (cb) => {
  cb();
};
