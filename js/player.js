define([
  'jquery',
  'midi'
], function($, Midi) {
  'use strict';

  var playNotes = function(notes) {
    var noteEvents = [],
      track,
      song;
    notes.forEach(function(note) {
        Array.prototype.push.apply(noteEvents, MidiEvent.createNote(note[1]));
    });
    track = new MidiTrack({ events: noteEvents });
    song  = MidiWriter({ tracks: [track] });
    song.play();
  };

  return { playNotes: playNotes };
});