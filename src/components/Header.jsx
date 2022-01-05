import React from 'react'

export default function Header(props) {
  return (
    <header style={{
      backgroundColor:'rgba(0,0,0,0.4)',
      color:'#ff6a95'
    }}>
      <div className='container'>
        <h2>{props.text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps ={
  text: 'Feedback UI'
}