// Importing createContext, useState and useEffect from React library
import { createContext, useState, useEffect } from "react";
// Importing uuidv4 from uuid library

// Creating a new context for feedback
const FeedbackContext = createContext();

// Creating a provider component to provide the context
export const FeedbackProvider = ({ children }) => {
  // Setting initial state of feedback
  const [feedback, setFeedback] = useState([]);

  // Setting initial state of feedbackEdit
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fecthFeedbackData("/feedback?_sort=id&_order=desc");
  }, []);

  const fecthFeedbackData = async (url) => {
    const result = await fetch(url);
    const data = await result.json();
    setFeedback(data);
    setIsLoading(false);
  };

  // Function to delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      await fetch(`/feedback/${id}`, {
        method: "DELETE",
      });

      let temp = feedback.filter((item) => item.id !== id);
      setFeedback(temp);
    }
  };

  // Function to add feedback
  const addFeedback = async (newFeedback) => {
    //newFeedback.id = uuidv4();
    //console.log(newFeedback.id);
    const res = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await res.json();
    setFeedback([data, ...feedback]);
  };

  // Function to update feedback
  const updateFeedback = async (id, updItem) => {
    const res = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await res.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
        isLoading,
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
