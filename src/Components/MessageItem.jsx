import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './MessageItem.css'

const MessageItem = ({ userId, message, timestamp, email, avatar, name }) => {
  const [hover, setHover] = useState(false)

  const history = useHistory()
  const TakeToUserMessages = () => {
    history.push(`/${userId}`)
  }

  return (
    <div className="message-data">
      <div className="message-avatar">
        {avatar ? (
          <img src={avatar} alt={`${email} avatar`} />
        ) : (
          <img
            src={'http://dummyimage.com/100x100.bmp/5fa2dd/#FFFF00'}
            alt={`${email} avatar`}
          />
        )}
      </div>
      <div className="message-content">
        <div
          className="message-message"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}>
          <span>{message ?? ''}</span>
        </div>
        <div className="email-user-timereceived">
          {email.length > 0 && hover && (
            <span className="message-email"> {email} </span>
          )}
          <time className="message-time">{timestamp}</time>
          {name.length > 0 && (
            <button
              type="button"
              aria-label={name}
              onClick={TakeToUserMessages}
              className="message-username">
              {name}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MessageItem
