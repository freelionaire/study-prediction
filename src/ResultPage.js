import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import besharmoMeme from './assets/besharmo.gif'; // Correctly import the GIF

const ResultPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 20px;
  background-color: #1e1e1e;
  border: 1px solid #444;
  border-radius: 10px;
  box-sizing: border-box;
`;

const CongratulationMessage = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
`;

const Message = styled.div`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 100%;
  line-height: 1.6;
`;

const Meme = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ResultPage = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <ResultPageContainer>
      <ContentWrapper>
        <CongratulationMessage>Congratulations!</CongratulationMessage>
        <Message>
          <p>{userName}, if you spent as much time studying as you just did here, you'd already have one topic mastered.</p>
          <p>Your commitment to procrastination is truly impressive. Maybe start studying next year?</p>
          <p>Seriously, {userName}? You think you’re going to magically understand genomic and industrial processes, you genius slacker? Absolutely not.</p>
          <p>You're not like your teachers – "na demagh na tension."</p>
        </Message>
        <Meme src={besharmoMeme} alt="Meme" />
      </ContentWrapper>
    </ResultPageContainer>
  );
};

export default ResultPage;
