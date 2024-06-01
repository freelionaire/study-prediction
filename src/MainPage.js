import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 80%;
`;

const FeedbackSection = styled.div`
  margin-top: 3rem;
  width: 80%;
  max-width: 800px;
  text-align: left;
`;

const FeedbackTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const FeedbackList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FeedbackItem = styled.li`
  background-color: #2e2e2e;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 5px;
`;

const StartButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  background-color: #ff5722;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e64a19;
  }
`;

const MainPage = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/getReviews');
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <MainPageContainer>
      <Title>Procrastination Prediction Tool</Title>
      <Subtitle>Our system uses a state-of-the-art patented system that can predict the exact date you will start studying.</Subtitle>
      <StartButton onClick={() => navigate('/questionnaire')}>
        Start
      </StartButton>
      <FeedbackSection>
        <FeedbackTitle>What our thousands of customers are saying</FeedbackTitle>
        <FeedbackList>
          {feedbacks.map((feedback, index) => (
            <FeedbackItem key={index}>{feedback.review}</FeedbackItem>
          ))}
        </FeedbackList>
      </FeedbackSection>
    </MainPageContainer>
  );
};

export default MainPage;
