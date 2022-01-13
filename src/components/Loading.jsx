import {Dots} from 'react-activity';
import "react-activity/dist/Dots.css";
import React,{useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';

export default function Loading() {

  const {loading} = useContext(FeedbackContext)

  return loading ?
   (
    <div className='loading'>
      <Dots size={30} color='#fff'/>
    </div>
  ) :
   <></> 
}
