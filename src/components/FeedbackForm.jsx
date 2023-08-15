import React, { useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackForm = () => {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text, setText] = useState("")
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage]= useState("")

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ""){
            setBtnDisabled(true)
            setMessage(null)
        }else if(text !== "" && text.trim().length <= 10) {
            setMessage("Text must be at least 10 characters")
            setBtnDisabled(true)
        }else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handFormSubmission = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            let newFeedback = {
                text, 
                rating
            }

            if(feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback)
            }else {
                addFeedback(newFeedback)
            }
            setText("")
        }
    }
  return (
    <Card>
        <form onSubmit={handFormSubmission}>
            <h2>How would you rate your service with us</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className='input-group'>
                <input value={text} onChange={handleTextChange} type="text" placeholder='Write a review'/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm