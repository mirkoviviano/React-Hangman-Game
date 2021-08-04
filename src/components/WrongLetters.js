import React from 'react'


/**
 * Shows all the wrong letters pressed by the user. 
 * @author [Mirko Viviano](https://github.com/mirkoviviano)
 * @param {array}       wrongLetters    Array of wrong letters
 * @returns {JSX.Element}               Wrong letters pressed. 
 */
const WrongLetters = ({ wrongLetters }) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && <p>Wrong</p>}
                {wrongLetters
                    .map((letter, index) => <span key={index}>{letter}</span>)
                    // add a comma if current letter is not the last letter in the map
                    .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)
                }
            </div>
        </div>
    )
}

export default WrongLetters