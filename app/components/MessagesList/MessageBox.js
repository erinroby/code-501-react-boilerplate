import React from 'react'
import format from 'date-fns/format'

import MessagesList from './MessagesList'

const MessageBox = ({ author, message, date, id }) =>
  <li className='MessageBox'>
    <div className='message-header'>
      <img src={`http://message-list.appspot.com/${author.photoUrl}`} alt={author.name} />
      <h4>{author.name}</h4>
      <p>{format(date, 'MMM D YYYY, h:mm a')}</p>
      <button onClick={id => console.log(id)}>Delete</button>
    </div>
    <div className='message-body'>
      <p>{message}</p>
    </div>
  </li>

const propTypes = {
  author: React.PropTypes.object,
  message: React.PropTypes.string,
  date: React.PropTypes.date,
  id: React.PropTypes.number
}

export default Object.assign(MessageBox, propTypes)
