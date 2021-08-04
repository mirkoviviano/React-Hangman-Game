import React from 'react'

/**
 * Notification component. Generates a notification message if the showNotification state is set to show.
 * @author [Mirko Viviano](https://github.com/mirkoviviano)
 * @param {string} showNotification Shows notification if param is set to 'show'.
 * @returns JSX Elements Shows the notification message.
 */
const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`}>
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification