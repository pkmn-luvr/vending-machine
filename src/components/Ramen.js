import React from 'react';
import MenuItem from './MenuItem';
import ramenImg from '../images/ramen.png';

function Ramen() {
  return (
    <MenuItem
      name="Delicious Ramen"
      imageSrc={ramenImg}
      description="A steaming bowl of ramen, filled with rich broth, chewy noodles, and topped with veggies, green onions, and soft-boiled egg. 🌸"
    />
  );
}

export default Ramen;