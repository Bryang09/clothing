import React from 'react';

import './Clothing_TypeG.css';

import { Link } from 'react-router-dom';

const Type = () => (
  <div className="Clothing_TypeG">
    <ul>
      <li><Link to="/girls/tops">Tops</Link></li>
      <li><Link to="/girls/bottoms">Bottoms</Link></li>
      <li><Link to="/girls/shoes">Shoes</Link></li>
    </ul>
  </div>
)

export default Type