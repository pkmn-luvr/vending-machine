import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the new Navbar component
import VendingMachine from './components/VendingMachine';
import Ramen from './components/Ramen';
import Sushi from './components/Sushi';
import PokeBowl from './components/PokeBowl';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/ramen" element={<Ramen />} />
        <Route path="/sushi" element={<Sushi />} />
        <Route path="/poke-bowl" element={<PokeBowl />} />
      </Routes>
    </Router>
  );
}

export default App;
