import React from 'react'
import MessageList from '../MessageList/MessageList'
import { useSelector } from 'react-redux'
import './AllMessageList.css'

const AllMessageList = () => {
  const { messagesWithMembersList } = useSelector((state) => state.messagesData)

  return (
    <ul className="message-list">
      <MessageList list={messagesWithMembersList} />
    </ul>
  )
}

export default AllMessageList
