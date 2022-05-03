import React from 'react'
import PropTypes from 'prop-types'
export default function TodoHeader(props) {
  return (
    <>
      <h1>
        {props.desc}
      </h1>
      <h3>
        {props.children}
      </h3>
      <p>{props.x + props.y }</p>
    </>
  )
}

TodoHeader.propTypes = {
  desc: PropTypes.string.isRequired,
  // children: PropTypes.isRequired
  // x: PropTypes.number.isRequired,
  // y: PropTypes.number
}
TodoHeader.defaultProps = {
  desc:'默认的desc'
}