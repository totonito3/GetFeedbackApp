// Importing react icons and prop types
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

// Importing Card component
import Card from "./shared/Card";

// Importing FeedbackContext to access context functions
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

// Function to render a single feedback item
function FeedbackItem({ item }) {
  // Destructuring context functions
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  // Rendering the card with rating, delete and edit buttons
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="purple"></FaTimes>
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

// Defining prop types for the component
FeedbackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};

// Exporting the component
export default FeedbackItem;
