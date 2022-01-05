import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

export default function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is a react app to leave feedback</p>
        <p>Version 1.0.0</p>
        <p>
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    </Card>
  )
}
