import React, { useEffect } from 'react'
import { checkWin } from '../helpers/helpers'

/**
 * Creates the popup and shows win/lose message to user.
 * In case of victory, generates the popup with a congratulations message and 
 * sets 'playable' to false; game restarts.
 * In case of loss, generates the popup with a loss message revealing the 
 * selected word and sets 'playable' to false; game restarts.
 * @author [Mirko Viviano](https://github.com/mirkoviviano)
 * @param {array}       correctLetters  Array of correct letters
 * @param {array}       wrongLetters    Array of wrong letters
 * @param {string}      selectedWord    Selected word
 * @param {function}    setPlayable     Function to set the playable status
 * @param {function}    playAgain       Function to reset the game
 * @returns {JSX.Element}               Win/lose message. 
 */
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    // check if user won
    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win'){
        finalMessage = 'Congrats! You won!';
        playable = false; 
    }
    // check if user lost
    else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose'){
        finalMessage = 'You lost!';
        finalMessageRevealWord = `...the word was ${selectedWord}`;
        playable = false;
    }

    // set playable status
    useEffect(() => setPlayable(playable));

    return (
        <div className="popup-container" style={finalMessage != '' ?  {display: 'flex'} : {}}>
            <div className="popup">
            <h2>{finalMessage}</h2>
            <h3>{finalMessageRevealWord}</h3>
            <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup