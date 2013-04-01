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
  'domready',
  'musicgenerator',
  'player'
], function(domReady, musicGenerator, player) {
  'use strict';

  domReady(function () {
    //var noteList = musicGenerator.compose('Nekke');
    var chords = [
      { "delay": 5, "velocity": 127, "notes": [100, 80, 110, 45] },
      { "delay": 10, "velocity": 127, "notes": [100, 90, 60] },
      { "delay": 15, "velocity": 127, "notes": [20, 80, 10] }
    ];
    player.playChords(chords);
  });

});