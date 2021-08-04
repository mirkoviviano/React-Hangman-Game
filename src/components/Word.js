import React from 'react'


/**
 * Shows the _ _ _ _ in the game and rendered the typed letters. Checks
 * wether the user's pressed letter is in the selectedWord and if so
 * renders it, not otherwise.
 * @author [Mirko Viviano](https://github.com/mirkoviviano)
 * @param {string}      selectedWord    Selected word
 * @param {array}       correctLetters  Array of correct letters
 * @returns {JSX.Element}               Pressed letters. 
 */
const Word = ({ selectedWord, correctLetters }) => {
    return (
        <div className="word">
            {selectedWord.split('').map((letter, index) => {
                return (
                    <span className="letter" key={index}>
                        {correctLetters.includes(letter) ? letter : ' '}
                    </span>
                ) 
            })}
        </div>
    )
}

export default Word