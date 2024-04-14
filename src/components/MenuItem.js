import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuItem.css';

function MenuItem({ name, imageSrc, description }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageSrc} alt={name} style={{ width: "200px" }} />
      <p>{description}</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default MenuItem;