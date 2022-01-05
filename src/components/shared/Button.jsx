import React from 'react'
import PropTypes from 'prop-types'

export default function Button({children, version, type,isDisable}) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProp = {
  version:'primary',
  type: 'button',
  isDisable:'false'
}

Button.propTypes= {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisable: PropTypes.bool
}