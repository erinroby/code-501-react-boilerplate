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
    .catch((error) => {
      console.log(error)
    })
  }

  deleteMessage (id) {
    const oldMessages = this.state.messageList()
    const newMessages = oldMessages.filter((o) => o.id !== id)
    this.setState({
      messageList: newMessages
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
          <button onClick={this.getMessages.bind(this)}>Get More Messages</button>
          {sortedMessages.map((message, i) =>
            <MessageBox
              key={i}
              author={message.author}
              message={message.content}
              date={message.updated}
              onDelete={this.deleteMessage.bind(this, message.id)}
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
