define([
  'jquery',
  'midi'
], function($, MIDI) {
  'use strict';

  var playChords = function(chords) {
    MIDI.loadPlugin(function() {
      chords.forEach(function(chord) {
        MIDI.chordOn(0, chord.notes, chord.velocity, chord.delay);
        setTimeout(function() {
          var $letter = $('<span></span>');
          $('#playback').append($letter);
          $letter.hide();
          $letter.append(chord.str);
          $letter.fadeIn('fast');
        }, chord.delay * 1000);
      });
    });
  };

  return { playChords: playChords };
});