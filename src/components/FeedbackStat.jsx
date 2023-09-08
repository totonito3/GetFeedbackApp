// Import useContext hook from React to access the FeedbackContext
import { useContext } from "react";

// Import the FeedbackContext to access the feedback data
import FeedbackContext from "../context/FeedbackContext";

// Function to display the feedback stats
function FeedbackStat() {
  // Get the feedback data from the context
  const { feedback } = useContext(FeedbackContext);

  // Calculate the average rating of the feedback
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  // Format the average rating to one decimal place
  average = average.toFixed(1).replace(/[.,]0$/, "");

  // Return the feedback stats
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

// Export the FeedbackStat component
export default FeedbackStat;
