import Header from "./components/Header";
//import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import { useState } from "react";
import feebackData from "./data/FeedbackData";
import FeedbackStat from "./components/FeedbackStat";
import FeebackForm from "./components/FeebackForm";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(feebackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete? ")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    console.log(newFeedback.id);
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <FeebackForm handleAdd={addFeedback}></FeebackForm>
        <FeedbackStat feedback={feedback}></FeedbackStat>
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}></FeedbackList>
      </div>
    </>
  );
}

export default App;
