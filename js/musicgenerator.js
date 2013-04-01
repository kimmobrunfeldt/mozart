define([
  'jquery'
], function($) {
  'use strict';

    var defaultOptions = {

    };
    var options = {};
    options = $.extend(true, {}, defaultOptions, options);

    var my = {},
        chords = {'A': [52, 55, 59], 'C': [43, 45, 47], 'B': [48, 50, 52], 'E': [48, 50, 52], 'D': [43, 45, 47], 'G': [48, 50, 52], 'F': [48, 50, 52], 'I': [50, 54, 57], 'H': [43, 45, 47], 'K': [45, 48, 52], 'J': [52, 55, 59], 'M': [47, 50, 54], 'L': [43, 45, 47], 'O': [50, 57, 60], 'N': [48, 50, 52], 'Q': [52, 55, 59], 'P': [50, 57, 60], 'S': [45, 48, 52], 'R': [50, 54, 57], 'U': [50, 57, 60], 'T': [47, 50, 54], 'W': [45, 48, 52], 'V': [50, 54, 57], 'Y': [50, 54, 57], 'X': [47, 50, 54], 'Z': [47, 50, 54], 'a': [52, 55, 59], 'c': [45, 48, 52], 'b': [45, 48, 52], 'e': [43, 45, 47], 'd': [48, 50, 52], 'g': [47, 50, 54], 'f': [43, 45, 47], 'i': [52, 55, 59], 'h': [45, 48, 52], 'k': [45, 48, 52], 'j': [52, 55, 59], 'm': [45, 48, 52], 'l': [43, 45, 47], 'o': [43, 45, 47], 'n': [52, 55, 59], 'q': [48, 50, 52], 'p': [45, 48, 52], 's': [50, 57, 60], 'r': [50, 57, 60], 'u': [52, 55, 59], 't': [52, 55, 59], 'w': [50, 57, 60], 'v': [43, 45, 47], 'y': [48, 50, 52], 'x': [50, 54, 57], 'z': [50, 54, 57]},
        notes = {'A': 62, 'C': 66, 'B': 67, 'E': 66, 'D': 62, 'G': 62, 'F': 57, 'I': 62, 'H': 67, 'K': 59, 'J': 60, 'M': 67, 'L': 62, 'O': 66, 'N': 55, 'Q': 67, 'P': 66, 'S': 66, 'R': 64, 'U': 62, 'T': 62, 'W': 55, 'V': 60, 'Y': 62, 'X': 66, 'Z': 57, 'a': 67, 'c': 62, 'b': 66, 'e': 55, 'd': 62, 'g': 66, 'f': 57, 'i': 57, 'h': 60, 'k': 64, 'j': 62, 'm': 59, 'l': 64, 'o': 62, 'n': 60, 'q': 62, 'p': 66, 's': 60, 'r': 60, 'u': 55, 't': 55, 'w': 67, 'v': 64, 'y': 60, 'x': 62, 'z': 57};

    function init() {

    }

    //
    // Public methods
    //

    // Creates a track from text
    my.compose = function(text) {
        var track = [],
            words = text.split(" "),
            delayBetweenChars = 0.4,
            delay = 0;


        for (var i = 0; i < words.length; i++) {

            var word = words[i],
                chord = {};

            for (var j = 0; j < word.length; j++) {

                if (j === 0) {
                    chord = {str: word[j], delay: delay, velocity: 50,
                             notes: chords[word[i]]};
                    track.push(chord);
                } else {
                    chord = {str: word[j], delay: delay, velocity: 70,
                             notes: [notes[word[j]]]};
                    track.push(chord);
                    delay += delayBetweenChars;
                }
            }

            track.push(placeHolderNote(" ", delay));
            delay += 1;
        }

        return track;
    };

    //
    // Private methods
    //

    function placeHolderNote(str, delay) {
        return {str: str, velocity: 0, notes: [60], delay: delay};
    }

    init();
    return my;
});