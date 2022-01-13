import axios from 'axios'
import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
const FeedbackContext = createContext()

const apiHttp = 'http://localhost:5000/feedback'

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([])
  const [loading, setloading] = useState(false)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    getFeedback()
  }, [])

  const getFeedback = () => {
    setloading(true)
    axios.get(`${apiHttp}?_sort=id&_order=desc`).then((res) => {
      setFeedback(res.data)
    }).finally(() => setloading(false))
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  const deleteFeedback = (id) => {
    setloading(true)
    if (window.confirm('Are you shure you want do delete?')) {
      // setFeedback(feedback.filter((item) => item.id !== id))
      axios.delete(`${apiHttp}/${id}`).then(() => {
        getFeedback()
      }).finally(() => setloading(false))

    }
  }

  const addFeedback = (newFeedback) => {
    setloading(true)
    axios.post(apiHttp, newFeedback).then((_) => {
      getFeedback()
    }).finally(() => setloading(false))

  }

  const updateFeedback = (id, updItem) => {
    setloading(true)
    axios.put(`${apiHttp}/${id}`, updItem).then((_) => {
      getFeedback()
    }).finally(() => setloading(false))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
        loading
      }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext