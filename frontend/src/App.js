import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import CMS from './components/CMS';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const MainContent = styled.main`
  padding-top: 2rem;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cms" element={<CMS />} />
          </Routes>
        </MainContent>
      </AppContainer>
    </Router>
  );
}

export default App;
