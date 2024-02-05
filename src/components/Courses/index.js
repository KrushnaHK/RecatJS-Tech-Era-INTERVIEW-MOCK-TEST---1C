import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class Courses extends Component {
  render() {
    const {details} = this.props
    const {id, logoUrl, name} = details

    return (
      <Link to={`courses/${id}`}>
        <li className="listItem">
          <div>
            <img src={logoUrl} alt={name} />
          </div>
          <p className="linkItems">{name}</p>
        </li>
      </Link>
    )
  }
}

export default Courses
