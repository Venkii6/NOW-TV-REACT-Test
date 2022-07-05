import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MessageList from '../MessageList/MessageList'
import './UserMessageList.css'

const UserMessageList = () => {
  const { id } = useParams()
  const data = useSelector((state) => state.messagesData)

  const filteredUserMessages = () => {
    return data.messagesWithMembersList.filter((item) => item.userId === id)
  }

  return (
    <section className="user-message-list">
      <MessageList list={filteredUserMessages()} />
    </section>
  )
}

export default UserMessageList
