import React,{useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext';


export default function FeedbackForm() {
  const [text, setText] = useState('')
  const [btnDisable, setbtnDisable] = useState(true)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(null)
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisable(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }


    // return () => {
    //   cleanup
    // }
  }, [feedbackEdit])

  const handleTextChange = (e)=>{
    if (text === '') {
      setbtnDisable(true)
      setMessage(null)
    } else if(text !== '' && text.trim().length <= 10){
      setMessage('Text must be at least 10 characters')
      setbtnDisable(true)
    }else{
      setMessage(null)
      setbtnDisable(false)
    }
    
    setText(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback ={
        text,
        rating
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else{
      addFeedback(newFeedback)
    }
      
      setText('')
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate your service with us?</h2>
          <RatingSelect select={(rating)=>{setRating(rating)}}/>
        <div className="input-group">
          <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text}/>
          <Button type='submit' version='secondary' isDisable={btnDisable}>Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}
