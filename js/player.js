define([
  'jquery',
  'midi'
], function($, MIDI) {
  'use strict';

  var playChords = function(chords) {
    MIDI.loadPlugin(function() {
      chords.forEach(function(chord) {
        MIDI.chordOn(0, chord.notes, chord.velocity, chord.delay);
      });
    });
  };

  return { playChords: playChords };
});