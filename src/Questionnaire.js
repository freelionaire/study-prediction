import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const QuestionnaireContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
`;

const Question = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  max-width: 80%;
`;

const InputField = styled.input`
  padding: 0.5rem;
  font-size: 1.2rem;
  width: 80%;
  max-width: 400px;
  margin-bottom: 1rem;
  border: 1px solid #ff5722;
  border-radius: 5px;
  color: #000;
`;

const NextButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  background-color: #ff5722;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e64a19;
  }
`;

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-top: 1rem;
`;

const LoadingMessage = styled.div`
  font-size: 1.2rem;
  margin-top: 2rem;
`;

const questions = [
  "What's your name?",
  "How many hours a day do you typically spend on social media?",
  "If you could be any biotech tool, which one would you be and why?",
  "How often do you check your phone while studying?",
  "What is your favorite biotech innovation of the past decade?",
  "On a scale of 1 to 10, how confident are you in understanding genomic processes?",
  "What time of day do you feel most productive for studying?",
  "How do you think we can improve the rate of secondary metabolites?",
  "Do bacteria have brains?"
];

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleNextClick = () => {
    if (answers[currentQuestionIndex].trim() === "") {
      setError("This field is required.");
    } else {
      setError("");
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        if (currentQuestionIndex === 0) {
          localStorage.setItem("userName", answers[0]);
        }
        if (currentQuestionIndex + 1 < questions.length) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          navigate('/result');
        }
      }, 1000);
    }
  };

  return (
    <QuestionnaireContainer>
      <Question>{questions[currentQuestionIndex]}</Question>
      <InputField
        type="text"
        value={answers[currentQuestionIndex]}
        onChange={handleInputChange}
        maxLength="250"
      />
      <NextButton onClick={handleNextClick}>Next</NextButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {loading && <LoadingMessage>Adjusting parameters...</LoadingMessage>}
    </QuestionnaireContainer>
  );
};

export default Questionnaire;
