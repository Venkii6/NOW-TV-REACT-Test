import React from 'react'
import { mount, shallow } from 'enzyme'
import App from './App'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router'
import { MessageServices } from '../Services/AllServices'

const mockStore = configureStore()
const initialState = {
  messagesData: {
    messagesList: [],
    membersList: [],
    messagesWithMembersList: [],
  },
  router: {},
}

const member = [
  {
    id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
    userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
    message:
      'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
    timestamp: '2017-02-09T04:27:38Z',
  },
]

const message = [
  {
    id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
    firstName: 'Martin',
    lastName: 'Bradley',
    email: 'mbradley0@google.it',
    avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
    ip: '166.124.172.160',
  },
]

jest.mock('../../Services/AllServices', () => {
  return {
    MessageServices: {
      loadData: jest.fn().mockImplementation(() =>
        Promise.resolve([
          {
            id: 'cd445e6d-e514-424f-ba8f-16ec842002c6',
            userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
            message:
              'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            timestamp: '2017-02-09T04:27:38Z',
          },
        ])
      ),
    },
    MemberServices: {
      loadData: jest.fn().mockImplementation(() => {
        console.log('entered')
        return Promise.resolve([
          {
            id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
            firstName: 'Martin',
            lastName: 'Bradley',
            email: 'mbradley0@google.it',
            avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
            ip: '166.124.172.160',
          },
        ])
      }),
    },
  }
})

const store = mockStore(initialState)

const renderComp = (mockStore = store, props) => {
  return mount(
    <Provider store={mockStore}>
      <MemoryRouter>
        <App {...props} />
      </MemoryRouter>
    </Provider>
  )
}
describe('App component', () => {
  it('App rendered', async () => {
    const wrapper = await renderComp()
    wrapper.find('MessageItem').length
    console.log(store.getState(), wrapper.find('MessageItem').length)
    expect(wrapper).toBeDefined()
  })

  it('App rendered with list', async () => {
    const localStore = {
      messagesData: {
        membersList: member,
        messagesList: message,
        messagesWithMembersList: [
          {
            id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
            firstName: 'Martin',
            lastName: 'Bradley',
            name: 'Martin Bradley',
            email: 'mbradley0@google.it',
            avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
            ip: '166.124.172.160',
            userId: 'fe27b760-a915-475c-80bb-7cdf14cc6ef3',
            message:
              'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
            timestamp: '2017-02-09T04:27:38Z',
          },
        ],
      },
    }
    const localMockStore = mockStore(localStore)
    const wrapper = await renderComp(localMockStore)
    expect(wrapper).toBeDefined()
    expect(wrapper.find('MessageItem').length).toBe(1)
  })
})
