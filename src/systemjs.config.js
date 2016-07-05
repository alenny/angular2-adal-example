/**
 * System configuration for Angular 2 application
 */
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app',
    '@angular': 'lib/@angular',
    'angular2-in-memory-web-api': 'lib/angular2-in-memory-web-api',
    'rxjs': 'lib/rxjs',
    'angular2-cookie': 'lib/angular2-cookie',
    'angular2-adal': 'lib/angular2-adal',
    'adal': 'lib/adal-angular/lib'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'angular2-cookie': { main: 'core.js', defaultExtension: 'js' },
    'angular2-adal': { main: 'core.js', defaultExtension: 'js' },
    'adal': { main: 'adal.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function (pkgName) {
    packages['@angular/' + pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
