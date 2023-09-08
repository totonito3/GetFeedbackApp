// This component is used to render a rating selector
import { useState, useEffect } from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  // Set the initial state of the selected rating
  const [selected, setSelected] = useState(10);

  // Get the feedbackEdit context
  const { feedbackEdit } = useContext(FeedbackContext);

  // Use effect hook to update the selected rating when the feedbackEdit context changes
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);

  // Handle change event for the rating selector
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  return (
    <ul className="rating">
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
