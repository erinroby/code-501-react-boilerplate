import React from 'react'
import _ from 'lodash'

// class Bio extends React.Component {
//   render () {
//     return (
//       <div className='Bio'>
//         <p>{this.props.name} is {this.props.age}.</p>
//         <p>{_.capitalize(this.props.pronoun.nominative)} enjoys {this.props.favoriteActivity}.</p>
//       </div>
//     )
//   }
// }

const Bio = ({myName, age, pronoun, favoriteActivity}) =>
  <div className='Bio'>
    <p>{myName} is {age}.</p>
    <p>{_.capitalize(pronoun.nominative)} enjoys {favoriteActivity}.</p>
  </div>

const propTypes = {
  myName: React.PropTypes.string,
  age: React.PropTypes.number,
  pronoun: React.PropTypes.object,
  favoriteActivity: React.PropTypes.string
}

export default Object.assign(Bio, propTypes)
