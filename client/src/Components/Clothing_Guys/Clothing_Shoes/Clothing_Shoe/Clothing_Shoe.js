import React from 'react';

import { Link } from 'react-router-dom';

const Shoe = (props) => (

  <div className="idk">
    {props.shoes.map(shoe => {
      return (
        <div className="Clothing_Style" key={shoe._id}>
          <div className="Clothing_Single_Item">
            <Link to={{
              pathname: `/guys/shoes/${shoe._id}`,
              state: { shoes: shoe._id }
            }}>
              <img src={shoe.src} alt="shoes" />
            </Link>
            <div className="Clothing_Info">
              <h3>{shoe.name}</h3>
              <hr />
              <h4>{shoe.description}</h4>
              <h5>${shoe.price}</h5>
            </div>
          </div>
        </div>
      )
    })}
  </div>
)

export default Shoe;