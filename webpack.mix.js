let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
  .sass('resources/assets/sass/app.scss', 'public/css')
  .copy('bower_components/bootstrap/dist/css/bootstrap.css', 'public/css/bootstrap.css')
  .combine(['bower_components/jquery/dist/jquery.js','bower_components/bootstrap/dist/js/bootstrap.js',
  'bower_components/angular/angular.js','bower_components/angular-ui-router/release/angular-ui-router.js','bower_components/satellizer/dist/satellizer.js']
                 ,'public/js/bundle.js');

//let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 | D:\AngularJsApps\restaurentapp\bower_components
 */
/*
mix.combine(['resources/assets/css/app.css','bower_components/bootstrap/dist/css/bootstrap.css'],'public/css/bundle.css')
   .combine(['bower_components/jquery/dist/jquery.js','bower_components/bootstrap/dist/js/bootstrap.js','bower_components/angular/angular.js','']
                 ,'public/js/bundle.js')
   .copy('bower_components/bootstrap/dist/fonts/','public/fonts');
   */

