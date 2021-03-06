import React from 'react';
import { Link } from 'react-router-dom';




const Top = props => (
  <div className="idk">
    {props.shirt.map(shirt => {
      return (

        <div className="Clothing_Style Top" key={shirt._id}>
          <div className="Clothing_Single_Item">
            <Link to={{
              pathname: `/girls/tops/${shirt._id}`,
              state: { shirt: shirt._id }
            }}>
              <img src={shirt.src} alt="shirt" />
            </Link>
            <div className="Clothing_Info">
              <h3>{shirt.name}</h3>
              <hr />
              <h4>{shirt.description}</h4>
              <h5>${shirt.price}</h5>
            </div>
          </div>
        </div>

      )
    })}
  </div >
)

export default Top;