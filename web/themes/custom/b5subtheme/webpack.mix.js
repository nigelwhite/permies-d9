let mix = require("laravel-mix");

mix
  .sass("scss/style.scss", "css/")
  // .browserSync("http://permies-d9.ddev.site:81");
  .browserSync({
    proxy: "http://permies-d9.ddev.site:81",
    files: ["scss/style.scss"],
  });
