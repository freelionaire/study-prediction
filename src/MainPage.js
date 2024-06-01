import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  box-sizing: border-box;
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
  line-height: 1.5;
`;

const FeedbackSection = styled.div`
  /* Adjust margin-top to control the space between sections */
  margin-top: 4rem;
  width: 80%;
  max-width: 800px;
  text-align: left;
`;

const FeedbackTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
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
  text-align: left;
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

  const feedbacks = [
    "Ali Khan: This tool changed my life! I finally know when to study.",
    "Ayesha Ahmed: I can't believe how accurate this is. Highly recommended!",
    "Bilal Hussain: Thanks to this tool, I can manage my study schedule better.",
    "Fatima Javed: It's like magic! I know exactly when to hit the books.",
    "Zainab Ali: A must-have for every student struggling with procrastination.",
    "Mohammad Rizwan: This predictor is spot on. Helped me a lot!",
    "Sara Sheikh: Amazing tool! My grades have improved thanks to this.",
    "Usman Tariq: Never thought a tool could be this accurate. Kudos!",
    "Mariam Arif: This has been a game-changer for my study routine.",
    "Fahad Saeed: Spot-on predictions. Really helpful!",
    "Hina Qureshi: Thanks to this, I am more organized with my studies.",
    "Naveed Akhtar: Highly accurate and very useful for students.",
    "Sadia Bashir: My go-to tool for planning my study schedule.",
    "Ahmed Raza: Fantastic tool! Helped me overcome procrastination.",
    "Rabia Khan: This tool is a lifesaver for last-minute crammers.",
    "Haris Mehmood: I can't study without this tool anymore. So accurate!",
    "Sana Malik: My grades are improving because of this. Thanks!",
    "Tariq Jamil: Really impressed with the accuracy. A must-use!",
    "Sabeen Zafar: Perfect for keeping my study schedule on track.",
    "Imran Shah: This tool has made studying so much easier."
  ];

  return (
    <MainPageContainer>
      {/* Main Section */}
      <Title>When Will You Actually Study?</Title>
      <Subtitle>
        Our system uses a state-of-the-art patented system<br/>
        that can predict the exact date you will start studying.
      </Subtitle>
      <StartButton onClick={() => navigate('/questionnaire')}>
        Start
      </StartButton>

      {/* Feedback Section */}
      <FeedbackSection>
        <FeedbackTitle>What our thousands of customers are saying</FeedbackTitle>
        <FeedbackList>
          {feedbacks.map((feedback, index) => (
            <FeedbackItem key={index}>{feedback}</FeedbackItem>
          ))}
        </FeedbackList>
      </FeedbackSection>
    </MainPageContainer>
  );
};

export default MainPage;
