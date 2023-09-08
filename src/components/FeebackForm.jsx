// Importing necessary components from React and other files
import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

// Function to create the feedback form
function FeebackForm() {
  // Setting up state variables for text, rating, button disabled, and message
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  // Using the context to access functions related to feedback
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  // Use effect hook to check if the feedback is being edited
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // Function to handle changes in the text input
  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  // Function to handle submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      // Checking if the feedback is being edited or added
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  };

  // Rendering the form
  return (
    <Card>
      <form action="" onSubmit={handleSubmit}>
        <h2>How would you rate your service with us? </h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className="input-group">
          <input
            type="text"
            name=""
            id=""
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeebackForm;
