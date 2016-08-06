import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const NavItem = props => {
  let className = props.active ? 'nav-item active' : 'nav-item'

  return (
    <span className={className}>
      <Link to={props.url}>
        {props.text}
      </Link>
    </span>
  )
}

NavItem.propTypes = {
  active: PropTypes.bool,
  url: PropTypes.string,
  text: PropTypes.string
}

export default NavItem
