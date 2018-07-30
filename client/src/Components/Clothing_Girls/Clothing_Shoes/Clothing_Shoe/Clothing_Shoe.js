import React from 'react';
import { Link } from 'react-router-dom';




const Shoe = props => (
  <div className="idk">
    {props.shoes.map(shoe => {
      return (

        <div className="Clothing_Style Top" key={shoe._id}>
          <div className="Clothing_Single_Item">
            <Link to={{
              pathname: `/girls/shoes/${shoe._id}`,
              state: { shoe: shoe._id }
            }}>
              <img src={shoe.src} alt="shoe" />
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
  </div >
)

export default Shoe;