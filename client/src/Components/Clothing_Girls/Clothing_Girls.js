

// https://images.unsplash.com/photo-1504731083966-70c4cb10e1ee?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54dffc0ab3675e8fa071ca9c4daa4536&auto=format&fit=crop&w=634&q=80

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Clothing_Girls.css';
import ClothingNavBar from '../Clothing_NavBar/Clothing_NavBar';




class Girls extends Component {
  state = {
    girls: [
      {
        key: 0,
        link: "girls/tops",
        src: "https://2lth8w1uv77536l8d72pqh10-wpengine.netdna-ssl.com/wp-content/uploads/1940s-estelle-blouse-350x454.png",
        type: "Tops",
        id: "Guys_Shirt",
        alt: "tops"
      },
      {
        key: 1,
        link: "/girls/bottoms",
        src: "https://www.sabahilbert.com/wp-content/uploads/2017/07/Classic_Short_HIndigo.png",
        type: "Bottoms",
        id: "Guys_Pants",
        alt: "pants"
      },
      {
        key: 2,
        link: "/girls/shoes",
        src: "https://cdn.shopify.com/s/files/1/1429/9478/products/track_down2-black.png?v=1474056949",
        type: "Shoes",
        id: "Guys_Shoes",
        alt: "shoes"
      },
      {
        key: 3,
        link: "/guys",
        src: "https://i.pinimg.com/originals/77/21/b4/7721b47eb60d47d1ae09493398105517.png",
        type: "Guys Clothing",
        id: "Girls_Link",
        alt: "guys link"
      },

    ]
  }
  render() {
    const Objects = this.state.girls.map(object => {
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
          <img src="https://d39l2hkdp2esp1.cloudfront.net/img/photo/139535/139535_00_2x.jpg?20180131024127" alt="guys" />
        </div>
        <div className="Clothing_Row">
          {Objects}
        </div>
      </div>
    )
  }



}

export default Girls;