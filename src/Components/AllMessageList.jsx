import React from 'react'
import MessageList from './MessageList'
import { useSelector } from 'react-redux'

const AllMessageList = () => {
  const { messagesWithMembersList } = useSelector((state) => state.messagesData)

  return <MessageList list={messagesWithMembersList} />
}

export default AllMessageList
