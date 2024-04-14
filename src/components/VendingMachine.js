import React from 'react';
import { Link } from 'react-router-dom';
import vendingMachineImg from '../images/vending-machine.png';
import '../styles/VendingMachine.css';

function VendingMachine() {
  return (
    <div>
    <h1>Best Vending Machine</h1>
    <img src={vendingMachineImg} alt="Vending Machine" style={{ maxWidth: '29%', height: 'auto' }} />
  </div>
  );
}

export default VendingMachine;
