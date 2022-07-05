import React from 'react'
import MessageList from '../MessageList/MessageList'
import { useSelector } from 'react-redux'

const AllMessageList = () => {
  const { messagesWithMembersList } = useSelector((state) => state.messagesData)

  return (
    <ul>
      <MessageList list={messagesWithMembersList} />
    </ul>
  )
}

export default AllMessageList
