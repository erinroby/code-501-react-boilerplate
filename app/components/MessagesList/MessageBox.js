import React from 'react'

const MessageBox = ({ author, message, date }) =>
  <li className='MessageBox'>
    <div>
      <img src={`http://message-list.appspot.com/${author.photoUrl}`} alt={author.name} />
      <h4>{author.name}</h4>
    </div>
    <div>
      <p>{date}</p>
    </div>
    <div>
      <p>{message}</p>
    </div>
  </li>

const propTypes = {
  author: React.PropTypes.object,
  message: React.PropTypes.string,
  date: React.PropTypes.date
}

export default Object.assign(MessageBox, propTypes)
