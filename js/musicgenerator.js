define([
  'jquery'
], function($) {
  'use strict';

    var defaultOptions = {

    };
    var options = {};
    options = $.extend(true, {}, defaultOptions, options);

    var my = {},
        notes = {'A': [64, 67, 71], 'C': [57, 60, 64], 'B': [60, 62, 64], 'E': [62, 69, 72], 'D': [62, 69, 72], 'G': [55, 57, 59], 'F': [64, 67, 71], 'I': [64, 67, 71], 'H': [57, 60, 64], 'K': [55, 57, 59], 'J': [62, 66, 69], 'M': [55, 57, 59], 'L': [62, 69, 72], 'O': [62, 69, 72], 'N': [57, 60, 64], 'Q': [62, 69, 72], 'P': [62, 66, 69], 'S': [62, 66, 69], 'R': [62, 66, 69], 'U': [57, 60, 64], 'T': [55, 57, 59], 'W': [55, 57, 59], 'V': [55, 57, 59], 'Y': [60, 62, 64], 'X': [64, 67, 71], 'Z': [60, 62, 64], 'a': [64, 67, 71], 'c': [62, 69, 72], 'b': [62, 66, 69], 'e': [62, 66, 69], 'd': [59, 62, 66], 'g': [60, 62, 64], 'f': [55, 57, 59], 'i': [62, 69, 72], 'h': [55, 57, 59], 'k': [62, 69, 72], 'j': [60, 62, 64], 'm': [59, 62, 66], 'l': [59, 62, 66], 'o': [57, 60, 64], 'n': [57, 60, 64], 'q': [59, 62, 66], 'p': [59, 62, 66], 's': [59, 62, 66], 'r': [59, 62, 66], 'u': [60, 62, 64], 't': [64, 67, 71], 'w': [60, 62, 64], 'v': [55, 57, 59], 'y': [55, 57, 59], 'x': [62, 66, 69], 'z': [59, 62, 66]};



    function init() {

    }

    //
    // Public methods
    //

    // Creates a tra
    my.compose = function(text) {
        var track = [],
            pauseAddition = 0;

        for (var i = 0; i < text.length; i++) {
            var chord = {};
            chord.str = text[i];
            chord.delay = 0.4 * i + pauseAddition;

            if (text[i] === " ") {
                chord.velocity = 0;
                chord.notes = [60];
                pauseAddition += 1;
            } else {
                chord.velocity = 50;
                chord.notes = notes[text[i]];
            }

            track.push(chord);
        }

        return track;
    };

    //
    // Private methods
    //

    function a() {

    }

    init();
    return my;
});