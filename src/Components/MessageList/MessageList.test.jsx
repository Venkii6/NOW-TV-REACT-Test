import React from 'react'
import { shallow } from 'enzyme'
import MessageList from './MessageList'

const renderComp = (props) => {
  return shallow(<MessageList {...props} />)
}
describe('MessageList component', () => {
  it('list rendered', () => {
    const wrapper = renderComp()
    const MessageItem = wrapper.find('MessageItem')
    expect(MessageItem.length).toBe(0)
  })

  it('list rendered', () => {
    const prop = {
      list: [
        {
          id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
          firstName: 'Martin',
          lastName: 'Bradley',
          email: 'mbradley0@google.it',
          avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
          ip: '166.124.172.160',
          userId: '16373df5-da0a-4074-8295-f916b94269f4',
          message:
            'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          timestamp: '2016-11-09T05:04:58Z',
        },
        {
          id: 'e837c9f5-247f-445f-bcc3-7d434348336b',
          firstName: 'Martin',
          lastName: 'Bradley',
          email: 'mbradley0@google.it',
          avatar: 'http://dummyimage.com/100x100.png/5fa2dd/ffffff',
          ip: '166.124.172.160',
          userId: '16373df5-da0a-4074-8295-f916b94269f4',
          message:
            'Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.',
          timestamp: '2016-11-09T05:04:58Z',
        },
      ],
    }
    const wrapper = renderComp(prop)
    console.log(wrapper.debug())
    const MessageItem = wrapper.find('MessageItem')
    expect(MessageItem.length).toBe(2)
  })
})
