import React from 'react'
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";


const Home = () => {
  return (
    <div>
        <FeedbackForm handFormSubmission={handleSubmit}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList handleDelete={deleteFeedback} feedback={feedback}/>
    </div>
  )
}

export default Home