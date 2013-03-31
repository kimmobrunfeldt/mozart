var MusicGenerator = (function(options) {

    var defaultOptions = {

    };
    options = $.extend(true, {}, defaultOptions, options);

    var my = {},
        notes = {'A': 'B8', 'C': 'D2', 'B': 'B5', 'E': 'Bb8', 'D': 'C8', 'G': 'C1', 'F': 'B2', 'I': 'A3', 'H': 'D9', 'K': 'G7', 'J': 'Bb3', 'M': 'B7', 'L': 'Db9', 'O': 'Bb2', 'N': 'C0', 'Q': 'A5', 'P': 'Bb2', 'S': 'C3', 'R': 'Db8', 'U': 'C7', 'T': 'G2', 'W': 'F8', 'V': 'Eb2', 'Y': 'B7', 'X': 'Ab1', 'Z': 'F5', 'a': 'Db1', 'c': 'E3', 'b': 'Ab7', 'e': 'Db4', 'd': 'D3', 'g': 'Ab0', 'f': 'C0', 'i': 'F9', 'h': 'B3', 'k': 'Eb8', 'j': 'E7', 'm': 'A0', 'l': 'G0', 'o': 'Eb1', 'n': 'Eb2', 'q': 'A5', 'p': 'Ab2', 's': 'A1', 'r': 'D1', 'u': 'Eb4', 't': 'B2', 'w': 'C6', 'v': 'Db2', 'y': 'Db8', 'x': 'Ab6', 'z': 'E9'};


    function init() {

    }

    //
    // Public methods
    //

    my.compose = function(text) {
        var track = [];

        for (var i = 0; i < text.length; i++) {
            track.push([250 * i, notes[text[i]]]);
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