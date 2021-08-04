import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as Show} from './helpers/helpers'

const words  = ['application', 'programming', 'interface', 'wizard', 'pizza', 'food', 'apples']
let selectedWord = words[Math.floor(Math.random() * words.length)]

/**
 * The whole app component sets a few statuses and triggers some actions upon the change of the 
 * effect on the correct and wrong letters and playable status. 
 * 
 * @returns {JSX.Element} The whole app.
 */

function App() {
	// the game is playable
	const [playable, setPlayable] = useState(true)
	// create the correct letters array and set it to empty array
	const [correctLetters, setCorrectLetters] = useState([])
	// create the wrong letters array and set it to empty array
	const [wrongLetters, setWrongLetters] = useState([])
	// create the notification trigger and set it to false
	const [showNotification, setShowNotification] = useState(false);


	useEffect(() => {
		// start action on the keydown event 
		const handleKeydown = (event) => {
			// deconstruct the event callback
			const { key, keyCode } = event
			
			// if the game is playable and the pressed keys fall within the range, 
			// then continue with the game
			if(playable && keyCode >= 65 && keyCode <= 90){
				const letter = key.toLowerCase();

				// if the letter is included in the selected word
				if(selectedWord.includes(letter)){
					// and if the letter is not in the correct letters array yet, 
					if(!correctLetters.includes(letter)){
						// add the letter to the correct letters array
						setCorrectLetters(currentLetters => [...currentLetters, letter])
					}
					else {
						// otherwise show notification that the letter is already in the array
						Show(setShowNotification)
					}
				}
				else {
					// if the pressed letter is not in the wrong letters array
					if(!wrongLetters.includes(letter)){
						// then, add the letter to the wrong letters array
						setWrongLetters(wrongLetters => [...wrongLetters, letter])	
					}
					else{
						// otherwise show notification that the letter is already in the wrong letters array
						Show(setShowNotification)
					}
				}
			}
		}
		
		// bind the 'keydown' event to the function 'handleKeydown' above
		window.addEventListener('keydown', handleKeydown);

		// unbind the 'keydown' event to prevent continuous actions and loops 
		return () => window.removeEventListener('keydown', handleKeydown);

	}, [correctLetters, wrongLetters, playable] /*dependecy array*/ );

	/**
	 * If called this function resets the game by setting the setPlayable status to true,
	 * emptying the correct and wrong letters arrays and selecting a new random word.
	 * 
	 */
	function playAgain(){
		setPlayable(true);

		// empty arrays
		setCorrectLetters([]);
		setWrongLetters([]);
		
		// select new word
		const random = Math.floor(Math.random() * words.length)
		selectedWord = words[random];
	}

	return (
		<>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
	  <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
	  <Notification showNotification={showNotification}/>
    </>
	);
}

export default App;
