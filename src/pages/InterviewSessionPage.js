import React, { useState } from "react";
import PageLayout from "../components/layout/PageLayout";

function InterviewSessionPage({
  currentPage,
  onNavigate,
  selectedMode,
  setupData,
  onEndInterview,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const correctQuizAnswer = "Queue";

  const hasSubmitted =
    feedbackType === "correct" ||
    feedbackType === "incorrect" ||
    feedbackType === "submitted";

  function getQuestionText() {
    if (selectedMode === "Quiz Style") {
      return "Which data structure uses First In, First Out behavior?";
    }

    if (selectedMode === "Code Style") {
      return "Write a function that checks whether a string is a palindrome.";
    }

    return "Explain the difference between a stack and a queue, and give one real use case for each.";
  }

  function handleSubmit() {
    if (selectedMode === "Quiz Style") {
      if (!selectedAnswer) {
        setFeedbackType("warning");
        setFeedbackMessage("Please select an answer before submitting.");
        setIsCorrect(null);
        return;
      }

      const answerIsCorrect = selectedAnswer === correctQuizAnswer;
      setIsCorrect(answerIsCorrect);
      setFeedbackType(answerIsCorrect ? "correct" : "incorrect");
      setFeedbackMessage(
        answerIsCorrect
          ? "Correct! Queue follows First In, First Out behavior."
          : "Incorrect. The correct answer is Queue."
      );
      return;
    }

    if (!writtenAnswer.trim()) {
      setFeedbackType("warning");
      setFeedbackMessage("Please enter an answer before submitting.");
      return;
    }

    setFeedbackType("submitted");
    setFeedbackMessage("Answer submitted successfully.");
  }

  function handleNextQuestion() {
    // Placeholder for future next-question behavior
  }

  function handleEndInterview() {
    if (selectedMode === "Quiz Style") {
      const answerWasSubmitted =
        feedbackType === "correct" || feedbackType === "incorrect";
      const eloChange = !answerWasSubmitted ? "0" : isCorrect ? "+2" : "-2";
      const score = !answerWasSubmitted ? "0%" : isCorrect ? "100%" : "0%";

      onEndInterview({
        mode: selectedMode || "Quiz Style",
        date: "May 4, 2026",
        score,
        questionsAnswered: answerWasSubmitted ? 1 : 0,
        eloChange,
        isCorrect,
        answerSubmitted: answerWasSubmitted,
      });
      return;
    }

    const hasWrittenAnswer = writtenAnswer.trim().length > 0;

    onEndInterview({
      mode: selectedMode || "Interview Mode",
      date: "May 4, 2026",
      score: hasWrittenAnswer ? "100%" : "0%",
      questionsAnswered: hasWrittenAnswer ? 1 : 0,
      eloChange: "0",
      isCorrect: null,
      answerSubmitted: hasWrittenAnswer,
    });
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
              <input
                type="radio"
                name="quizAnswer"
                value="Stack"
                checked={selectedAnswer === "Stack"}
                onChange={(event) => setSelectedAnswer(event.target.value)}
              />
              Stack
            </label>

            <label className="quizOption">
              <input
                type="radio"
                name="quizAnswer"
                value="Queue"
                checked={selectedAnswer === "Queue"}
                onChange={(event) => setSelectedAnswer(event.target.value)}
              />
              Queue
            </label>

            <label className="quizOption">
              <input
                type="radio"
                name="quizAnswer"
                value="Tree"
                checked={selectedAnswer === "Tree"}
                onChange={(event) => setSelectedAnswer(event.target.value)}
              />
              Tree
            </label>

            <label className="quizOption">
              <input
                type="radio"
                name="quizAnswer"
                value="Graph"
                checked={selectedAnswer === "Graph"}
                onChange={(event) => setSelectedAnswer(event.target.value)}
              />
              Graph
            </label>
          </div>
        ) : (
          <textarea
            className="answerBox"
            placeholder="Type your answer here..."
            value={writtenAnswer}
            onChange={(event) => setWrittenAnswer(event.target.value)}
          />
        )}

        {feedbackMessage && (
          <div className={`quizFeedback ${feedbackType}`}>
            {feedbackMessage}
          </div>
        )}

        <div className="actionRow">
          <button className="secondaryButton" onClick={handleSubmit}>
            Submit
          </button>

          <button
            className="secondaryButton"
            onClick={() => onNavigate("dashboard")}
          >
            Back
          </button>

          {hasSubmitted && (
            <button className="secondaryButton" onClick={handleNextQuestion}>
              Next Question
            </button>
          )}

          <button className="primaryButton" onClick={handleEndInterview}>
            End Interview
          </button>
        </div>
      </div>
    </PageLayout>
  );
}

export default InterviewSessionPage;