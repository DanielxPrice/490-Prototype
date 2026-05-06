import React from "react";

function FeedbackBox({ feedbackType, feedbackMessage }) {
  if (!feedbackMessage) return null;

  return (
    <div className={`quizFeedback ${feedbackType}`}>
      <p>{feedbackMessage}</p>
    </div>
  );
}

export default FeedbackBox;