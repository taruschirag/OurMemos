// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import QuestionnairePage from './pages/QuestionnairePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/questionnaire" element={<QuestionnairePage />} />
      </Routes>
    </Router>
  );
}

export default App;