import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Analytics from './pages/Analytics';
import Events from './pages/Events';
import Playgrounds from './pages/Playgrounds';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/playgrounds" element={<Playgrounds />} />
        </Routes>
      </div>
    </Router>
  );
}