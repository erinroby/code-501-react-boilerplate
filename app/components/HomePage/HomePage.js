import React from 'react'
import Bio from '../Bio/Bio'
import BooksList from '../BooksList/BooksList'
import MessagesList from '../MessagesList/MessagesList'
// const portrait = require('../../img/erin-portrait.jpg')

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Bio
        // imgSrc={portrait}
        // imgAlt='Portrait of Erin'
          myName='Erin Roby'
          age={33}
          pronoun={{
            nominative: 'she',
            accusative: 'her',
            possessive: 'hers',
            reflexive: 'herself'
          }}
          favoriteActivity='drawing'
        />
        <BooksList />
        <MessagesList />
      </div>
    )
  }
}

export default HomePage
