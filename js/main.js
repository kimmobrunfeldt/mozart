require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'
  }
});

require([
  'musicgenerator'
], function (musicGenerator) {
  'use strict';

  domReady(function () {
    // Firing the generator
    musicGenerator.initialize();
  });

});