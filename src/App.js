import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MainPage from './MainPage';
import Questionnaire from './Questionnaire';
import ResultPage from './ResultPage';
import { initGA, logPageView } from './analytics';
import GoogleTagManager from './GoogleTagManager';

const App = () => {
  return (
    <Router>
      <GoogleTagManager />
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    initGA('G-EG9QV76K1H'); // Replace with your Tracking ID
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/questionnaire" element={<Questionnaire />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
};

export default App;
