import React from 'react'
import axios from 'axios'
import MessageBox from './MessageBox'
import _ from 'lodash'

class MessagesList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      messageList: [],
      token: ''
    }
  }

  getMessages () {
    axios.get(`http://message-list.appspot.com/messages?limit=10&pageToken=${this.state.token}`)
    .then((res) => {
      const oldMessages = this.state.messageList
      const newMessages = oldMessages.concat(res.data.messages)
      this.setState({
        messageList: newMessages,
        token: res.data.pageToken
      })
    })
    .catch((res) => {
      console.log(res)
    })
  }

  componentDidMount () {
    this.getMessages()
  }

  render () {
    if (this.state.messageList.length > 0) {
      const sortedMessages = _.orderBy(this.state.messageList, (o) => o.updated, 'desc')
      return (
        <ul className='MessagesList'>
          {sortedMessages.map((message, i) =>
            <MessageBox
              key={i}
              author={message.author}
              message={message.content}
              date={message.updated}
            />
          )}
        </ul>
      )
    } else {
      return (
        <div>No Messages!</div>
      )
    }
  }
}

export default MessagesList
