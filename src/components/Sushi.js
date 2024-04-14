import React from 'react';
import MenuItem from './MenuItem';
import sushiImg from '../images/sushi.png'; 

function Sushi() {
  return (
    <MenuItem
      name="Sushi Platter"
      imageSrc={sushiImg}
      description="An assortment of fresh sushi, including nigiri, sashimi, and several rolls. 🤤"
    />
  );
}

export default Sushi;
