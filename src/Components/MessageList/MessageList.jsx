import React from 'react'
import MessageItem from '../MessageItem/MessageItem'
import { formatDate } from '../../utils/formatData'

const MessageList = ({ list }) => {
  return list
    ? list.map(({ id, userId, message, timestamp, email, avatar, name }) => {
        return (
          <MessageItem
            key={id}
            userId={userId}
            message={message}
            timestamp={formatDate(timestamp)}
            email={email}
            avatar={avatar}
            name={name}
          />
        )
      })
    : null
}

export default MessageList
