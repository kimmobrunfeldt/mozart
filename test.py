

import random
import string

notes = {
    "G": [55, 57, 59],
    "Am": [57, 60, 64],
    "Bm": [59, 62, 66],
    "C": [60, 62, 64],
    "D": [62, 66, 69],
    "Em": [64, 67, 71],
    "F#dim": [62, 69, 72],
}


def main():
    a = {}
    for char in string.ascii_letters:

        note = random.choice(notes.keys())
        a[char] = notes[note]

    print a


if __name__ == '__main__':
    main()
