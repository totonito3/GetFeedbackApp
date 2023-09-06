import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <h1>No Feedback to display</h1>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}></FeedbackItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //   return (
  //     <div className="feedback-list">
  //       {feedback.map((item) => (
  //         <FeedbackItem
  //           key={item.id}
  //           item={item}
  //           handleDelete={handleDelete}></FeedbackItem>
  //       ))}
  //     </div>
  //   );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      //id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;