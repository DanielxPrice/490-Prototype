import React from "react";
import PageLayout from "../components/layout/PageLayout";

function InterviewSessionPage({
  currentPage,
  onNavigate,
  selectedMode,
  setupData,
}) {
  function getQuestionText() {
    if (selectedMode === "Quiz Style") {
      return "Which data structure uses First In, First Out behavior?";
    }

    if (selectedMode === "Code Style") {
      return "Write a function that checks whether a string is a palindrome.";
    }

    return "Explain the difference between a stack and a queue, and give one real use case for each.";
  }

  return (
    <PageLayout
      title="Practice Session"
      subtitle={`Mode: ${selectedMode || "Interview Mode"}`}
      currentPage={currentPage}
      onNavigate={onNavigate}
    >
      <div className="sessionInfoPanel">
        <h2 className="panelTitle">Session Setup Summary</h2>
        <p><strong>Job Role:</strong> {setupData.jobRole || "Not provided"}</p>
        <p><strong>Experience Level:</strong> {setupData.experienceLevel || "Not provided"}</p>
        <p><strong>Practice Goals:</strong> {setupData.practiceGoals || "Not provided"}</p>
      </div>

      <div className="questionPanel">
        <h2 className="panelTitle">First Question</h2>
        <p className="questionText">{getQuestionText()}</p>
      </div>

      <div className="answerPanel">
        <h2 className="panelTitle">Your Answer</h2>

        {selectedMode === "Quiz Style" ? (
          <div className="quizOptions">
            <label className="quizOption">
              <input type="radio" name="quizAnswer" />
              Stack
            </label>

            <label className="quizOption">
              <input type="radio" name="quizAnswer" />
              Queue
            </label>

            <label className="quizOption">
              <input type="radio" name="quizAnswer" />
              Tree
            </label>

            <label className="quizOption">
              <input type="radio" name="quizAnswer" />
              Graph
            </label>
          </div>
        ) : (
          <textarea
            className="answerBox"
            placeholder="Type your answer here..."
          />
        )}

        <div className="actionRow">
          <button className="secondaryButton">Submit</button>
          <button
            className="secondaryButton"
            onClick={() => onNavigate("dashboard")}
          >
            Back
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default InterviewSessionPage;