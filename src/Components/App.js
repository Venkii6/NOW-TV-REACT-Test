import React, { useEffect } from 'react'
import { MessageServices, MemberServices } from '../Services/AllServices'
import Home from './Home'
import { Switch, Route } from 'react-router'
import UserMessageList from './UserMessageList'

import { useDispatch, useSelector } from 'react-redux'
import { defaultMember } from '../utils/defaultMember'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    MessageServices.loadData(dispatch)
    MemberServices.loadData(dispatch)
  }, [dispatch])

  const data = useSelector((state) => state.messagesData)

  function findMember(userId) {
    return (
      data.membersList.find((m) => m.id === userId) || defaultMember(userId)
    )
  }

  useEffect(() => {
    const sortedMessages = data.messagesList.sort((a, b) => {
      return Date.parse(a.timestamp) - Date.parse(b.timestamp)
    })
    const messagesWithMembersData = sortedMessages.map(
      ({ userId, message, timestamp, id }) => {
        const user = findMember(userId)
        const name = `${user?.firstName} ${user?.lastName}`
        return {
          userId,
          message,
          timestamp,
          email: user.email,
          avatar: user.avatar,
          name,
          id,
        }
      }
    )
    dispatch({
      type: 'SET_MEMBERSANDMESSAGES',
      payload: messagesWithMembersData || [],
    })
  }, [data.messagesList, data.membersList])

  return (
    <Switch>
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/:id" render={() => <UserMessageList />} />
    </Switch>
  )
}

export default App
