require.config({
  paths: {
    'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
    'midi': 'MIDI'
  },
  shim: {
    'base64binary': {
      exports: 'base64binary'
    },
    'midi': {
      deps: ['base64binary'],
      exports: 'MIDI'
    }
  }
});

require([
  'jquery',
  'domready',
  'musicgenerator',
  'player'
], function($, domReady, musicGenerator, player) {
  'use strict';

  domReady(function () {
    $('#musify').click(function() {
      var chords = musicGenerator.compose($('#song-textarea').val());
      player.playChords(chords);
    });
  });

});