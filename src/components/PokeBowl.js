import React from 'react';
import MenuItem from './MenuItem';
import pokeBowlImg from '../images/poke-bowl.png';

function PokeBowl() {
  return (
    <MenuItem
      name="Poke Bowl"
      imageSrc={pokeBowlImg} 
      description="A Hawaiian-inspired poke bowl with diced tuna & salmon, rice, fresh vegetables, and spicy mayonnaise. 🌺"
    />
  );
}

export default PokeBowl;