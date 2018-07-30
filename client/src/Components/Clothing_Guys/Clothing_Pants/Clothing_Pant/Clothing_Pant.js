import React from 'react';
import { Link } from 'react-router-dom';

import './Clothing_Pant.css';

const Pant = props => (
  <div className="idk">
    {props.pants.map(pant => {
      return (
        <div className="Clothing_Style" key={pant._id}>
          <div className="Clothing_Single_Item">
            <Link to={{
              pathname: `/guys/pants/${pant._id}`,
              state: { pants: pant._id }
            }}>
              <img src={pant.src} alt="pants" />
            </Link>
            <div className="Clothing_Info">
              <h3>{pant.name}</h3>
              <hr />
              <h4>{pant.description}</h4>
              <h5>${pant.price}</h5>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

export default Pant;