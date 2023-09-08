// Importing components from other files
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// Function to render the feedback list
function FeedbackList() {
  // Retrieve feedback data from context
  const { feedback } = useContext(FeedbackContext);

  // If no feedback is present, display a message
  if (!feedback || feedback.length === 0) {
    return <h1>No Feedback to display</h1>;
  }

  // Render the feedback list
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem key={item.id} item={item}></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Export the component
export default FeedbackList;
