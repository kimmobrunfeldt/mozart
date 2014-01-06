"""
Creates chords and notes for javascript.
TODO: Convert to JS..
"""

import random
import string

chords = {
    "G": [55, 57, 59],
    "Am": [57, 60, 64],
    "Bm": [59, 62, 66],
    "C": [60, 62, 64],
    "D": [62, 66, 69],
    "Em": [64, 67, 71],
    "F#dim": [62, 69, 72],
}

scale = [55, 57, 59, 60, 62, 64, 66, 67]


def main():
    random.seed(1)

    song_chords = {}
    for char in string.ascii_letters:
        note = random.choice(chords.keys())
        song_chords[char] = [x - 12 for x in chords[note]]

    print song_chords

    song_notes = {}
    for char in string.ascii_letters:
        note = random.choice(scale)
        song_notes[char] = note

    print song_notes


if __name__ == '__main__':
    main()
