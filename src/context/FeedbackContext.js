import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

  useEffect(() => {
    fetchFeedback()
  }, [])

  const fetchFeedback = async () => {
    try {
      const response = await fetch(`/feedback?_sort=id&_order=desc`);
      const data = await response.json();
      console.log(data)
      setFeedback(data); 
      setIsLoading(false)
      // Update the feedback state with fetched data
    } catch (error) {
      console.error('Error fetching feedback:', error);
    }
  }
  

  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback) // Corrected line
    });
  
    if (response.ok) {
      // Assuming your server responds with the newly added feedback
      const addedFeedback = await response.json();
      setFeedback([addedFeedback, ...feedback]);
    } else {
      console.error('Failed to add feedback');
    }
  };

  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete")) {
        await fetch(`/feedback/${id}`, {method: "DELETE"})
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    });
  }

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(updItem)
    })
    const data = await response.json()
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
    console.log(id, updItem);
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
        isLoading
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
