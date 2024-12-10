import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SchedulerComponent from './components/SchedulerComponent'; // Adjust the path as necessary
import Home from './pages/Home';
import Chat from './pages/Chat';
import Appointment from './pages/Appointment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scheduler" element={<SchedulerComponent />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/appointments" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
