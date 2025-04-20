import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './public/Login';
import SignUp from './public/SignUp';
import Home from './public/Home';
import Chat from './public/Chat';  // Page de chat pour les patients
import Hopital from './public/Hopital';  // Page d'hôpital pour les médecins

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/hopital" element={<Hopital />} />
      </Routes>
    </Router>
  );
};

export default App;
