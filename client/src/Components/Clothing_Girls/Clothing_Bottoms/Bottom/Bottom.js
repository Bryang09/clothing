import React from 'react';
import { Link } from 'react-router-dom';




const Bottom = props => (
  <div className="idk">
    {props.bottom.map(bottom => {
      return (

        <div className="Clothing_Style Top" key={bottom._id}>
          <div className="Clothing_Single_Item">
            <Link to={{
              pathname: `/girls/bottoms/${bottom._id}`,
              state: { bottom: bottom._id }
            }}>
              <img src={bottom.src} alt="bottoms" />
            </Link>
            <div className="Clothing_Info">
              <h3>{bottom.name}</h3>
              <hr />
              <h4>{bottom.description}</h4>
              <h5>${bottom.price}</h5>
            </div>
          </div>
        </div>

      )
    })}
  </div >
)

export default Bottom;