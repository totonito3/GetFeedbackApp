// Importing createContext and useState from React library
import { createContext, useState } from "react";
// Importing uuidv4 from uuid library
import { v4 as uuidv4 } from "uuid";

// Creating a new context for feedback
const FeedbackContext = createContext();

// Creating a provider component to provide the context
export const FeedbackProvider = ({ children }) => {
  // Setting initial state of feedback
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from coniuyh itext",
      rating: 10,
    },
    {
      id: 2,
      text: "This is from tyuik yftcontext",
      rating: 4,
    },
    {
      id: 3,
      text: "This is fjh drs oirom context",
      rating: 1,
    },
  ]);

  // Setting initial state of feedbackEdit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Function to delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Function to add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback.id);
    setFeedback([newFeedback, ...feedback]);
  };

  // Function to update feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  // Function to edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Returning the provider with the value of all functions and states
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

// Exporting the context
export default FeedbackContext;
