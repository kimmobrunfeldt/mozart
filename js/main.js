require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'
  }
});

require([
  'domready',
  'player'
], function(domReady, Player) {
  'use strict';

  domReady(function () {
    Player.playNotes(['C4', 'E4', 'G4']);
  });

});