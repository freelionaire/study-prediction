import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Questionnaire from './Questionnaire';
import ResultPage from './ResultPage';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
