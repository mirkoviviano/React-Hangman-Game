import React from 'react'

/**
 * Takes in the wrongLetters array and renders the hangman figure according
 * to the number of errors
 * @author [Mirko Viviano](https://github.com/mirkoviviano)
 * @param {array}           wrongLetters    Deconstructed from props, gives the array of wrong letters.
 * @returns {JSX.Element}                   The hangman figure based on the total number of errors.
 */
const Figure = ({ wrongLetters }) => {
    // obtain the wrong letters to later check and render the hangman
    const errors = wrongLetters.length;

    return (
        // prepare the svg for the hangman
        <svg height="250" width="200" className="figure-container">
            <line x1="60" y1="20" x2="140" y2="20" />
            <line x1="140" y1="20" x2="140" y2="50" />
            <line x1="60" y1="20" x2="60" y2="230" />
            <line x1="20" y1="230" x2="100" y2="230" />

            {/* head : is rendered if there's at least one error */}
            {errors > 0 && <circle cx="140" cy="70" r="20"/>}
            {/* body : is rendered if there's at least two errors  */}
            {errors > 1 && <line x1="140" y1="90" x2="140" y2="150"/>}
            {/* right arm : is rendered if there's at least three errors  */}
            {errors > 2 && <line x1="140" y1="120" x2="120" y2="100"/>}
            {/* left arm : is rendered if there's at least four errors */}
            {errors > 3 && <line x1="140" y1="120" x2="160" y2="100"/>}
            {/* right leg *  : is rendered if there's at least five errors */}
            {errors > 4 && <line x1="140" y1="150" x2="120" y2="180"/>}
            {/* left legs  : is rendered if there's at least six errors */}
            {errors > 5 && <line x1="140" y1="150" x2="160" y2="180"/>}
      </svg>
    )
}

export default Figure