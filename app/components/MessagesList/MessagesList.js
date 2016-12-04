import React from 'react'
import axios from 'axios'
import MessageBox from './MessageBox'

class MessagesList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      messageList: []
    }
  }

  componentDidMount () {
    axios.get('http://message-list.appspot.com/messages?limit=15')
    .then((res) => {
      this.setState({
        messageList: res.data.messages
      })
    })
    .catch((res) => {
      console.log(res)
    })
  }

  render () {
    if (this.state.messageList.length > 0) {
      return (
        <ul>
          {this.state.messageList.map((message, i) =>
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
