/**
 * Trigger notitication popup. Set it to true and then hide it after 2 seconds.
 * @author [Mirko Viviano](https://github.com/mirkoviviano) 
 * @param {boolean} setter Set the notification status.
 */
export function showNotification(setter){
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000)
}

/**
 * Check if user has won. Takes correct and wrong letters, as well as the selected
 * word. Start selecting the status to win and check in the letter is in word. 
 * If the length of wrong letters is 6 then user has lost.
 * @author [Mirko Viviano](https://github.com/mirkoviviano)
 * @param {array} correct 
 * @param {array} wrong 
 * @param {string} word 
 * @returns 
 */
export function checkWin(correct, wrong, word){
    let status = 'win'; 

    // check win
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }
    })

    // check lose
    if(wrong.length === 6) status = 'lose';

    return status;
}
