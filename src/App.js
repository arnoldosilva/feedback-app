

import React from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutLink from './components/AboutLink'
import { FeedbackProvider } from './context/FeedbackContext'


export default function App() {



  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            } >
            </Route>
            <Route path='/about' element={<About />} />

          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}
