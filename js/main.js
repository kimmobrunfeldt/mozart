require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'
  }
});

require([
  'domready',
  'musicgenerator',
  'player'
], function(domReady, MusicGenerator, Player) {
  'use strict';

  domReady(function () {
    var noteList = MusicGenerator.compose('Nekke');
    Player.playNotes(noteList);
  });

});