import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Clothing_Guys.css';
import ClothingNavBar from '../Clothing_NavBar/Clothing_NavBar';




class Guys extends Component {
  state = {
    guys: [
      {
        key: 0,
        link: "/guys/shirts",
        src: "https://purepng.com/public/uploads/large/purepng.com-denim-blue-full-plain-shirtgarmentdressshirtfitfront-buttonfront-pocketdenim-bluefull-1421526313681j3qsz.png",
        type: "Shirts",
        id: "Guys_Shirt",
        alt: "shirts"
      },
      {
        key: 1,
        link: "/guys/pants",
        src: "https://images-dynamic-arcteryx.imgix.net/S18/450x625/Starke-Pant-Silversword.png?auto=format",
        type: "Pants",
        id: "Guys_Pants",
        alt: "pants"
      },
      {
        key: 2,
        link: "/guys/shoes",
        src: "https://pngriver.com/wp-content/uploads/2018/02/download-Leather-Formal-Shoes-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-4867_large_file_EnrouteMenBrownFormalShoes_L.png",
        type: "Shoes",
        id: "Guys_Shoes",
        alt: "shoes"
      },
      {
        key: 3,
        link: "/girls",
        src: "https://i2.wp.com/www.datelikeawoman.com/wp-content/uploads/2017/08/iStock-506821582-smile.png?w=1080",
        type: "Girls Clothing",
        id: "Girls_Link",
        alt: "girls link"
      },

    ]
  }
  render() {
    const Objects = this.state.guys.map(object => {
      return (
        <div className="Home_Row" key={object.key}>
          <Link to={object.link}>
            <div className="idkfs" id={object.id} >
              <img src={object.src} alt={object.alt} />
              <div className="Home_Description">
                <h4>{object.type}</h4>
              </div>
            </div>
          </Link>
        </div>

      )
    })

    return (
      <div className="Home_Main_Container" >
        <ClothingNavBar />
        <div className="Home_Main_Pic">
          <img src="https://images.unsplash.com/photo-1528977695568-bd5e5069eb61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9c071a597ac682d3682549c12501c63&auto=format&fit=crop&w=1050&q=80" alt="guys" />
        </div>
        <div className="Clothing_Row">
          {Objects}
        </div>
      </div>
    )
  }



}

export default Guys;