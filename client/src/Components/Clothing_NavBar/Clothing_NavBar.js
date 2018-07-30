import React from 'react';

import './Clothing_NavBar.css';
import { Link } from 'react-router-dom';

const Clothing_NavBar = () => {
  return (
    <div className="Clothing_NavBar">
      <h2><Link to="/">Bryan's Clothing</Link></h2>
      <div className="Clothing_Navigation">
        <h3><Link to="/guys">Guys</Link></h3>
        <h3><Link to="/girls">Girls</Link></h3>
      </div>
    </div>
  )
}

export default Clothing_NavBar;