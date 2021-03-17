let mix = require("laravel-mix");

mix
  .sass("scss/style.scss", "css/")
  // .browserSync("http://permies-d9.ddev.site:81");
  .browserSync({
    proxy: "http://permies-d9.ddev.site:81",
    files: ["scss/style.scss"],
  });

// // REPLACE THE THEME NAME
// var themename = "THEME_NAME_HERE";
// const themePath = "web/themes/" + themename + "";
// // Source files eg uncompiled js & scss will be in the theme under /src folder
// // within src folder there will be /js/ and /scss/ folder
// const resources = themePath + "/src";

// // Public path is where the files will be created
// // assets/css/app.css
// // assets/js/app.js
// mix.setPublicPath(`${themePath}/assets`);
// mix.sass(`${resources}/scss/app.scss`, `${themePath}/assets/css`).sourceMaps();
// mix.js(`${resources}/js/app.js`, `${themePath}/assets/js`);
// // Uncomment for browser sync
// //mix.browserSync('https://mywebsite.test');
