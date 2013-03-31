require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min'
  }
});

require([
  'domready',
  'musicgenerator',
  'player'
], function(domReady, musicGenerator, player) {
  'use strict';

  domReady(function () {
    var noteList = musicGenerator.compose('Nekke');
    player.playNotes(noteList);
  });

});