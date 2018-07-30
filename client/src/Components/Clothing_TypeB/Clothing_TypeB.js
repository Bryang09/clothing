import React from 'react';

import './Clothing_TypeB.css';

import { Link } from 'react-router-dom';

const Type = () => (
  <div className="Clothing_TypeB">
    <ul>
      <li><Link to="/guys/shirts">Shirts</Link></li>
      <li><Link to="/guys/pants">Pants</Link></li>
      <li><Link to="/guys/shoes">Shoes</Link></li>
    </ul>
  </div>
)

export default Type