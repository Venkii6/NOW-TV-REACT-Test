import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MessageList from './MessageList'

const UserMessageList = () => {
  const { id } = useParams()
  const data = useSelector((state) => state.messagesData)

  const filteredUserMessages = () => {
    return data.messagesWithMembersList.filter((item) => item.userId === id)
  }

  return (
    <div>
      {' '}
      <MessageList list={filteredUserMessages()} show={false} />
    </div>
  )
}

export default UserMessageList
