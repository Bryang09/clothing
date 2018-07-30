import React from 'react';
import './Home.css';
import ClothingNavBar from '../Clothing_NavBar/Clothing_NavBar';

const Home = () => {
  return (
    <div className="Clothing_Home">
      <ClothingNavBar />
      <h1>Welcome to Bryan's Clothing!</h1>
      <hr />
      <h3>Here, you'll find any and everything you are looking for! We have everything from shirts to pants and even shoes. Better yet, we got great selections for both Guys and Girls!</h3>
      <div className="Clothing_Home_">
        <div className="Clothing_shirts"><img src="https://i.pinimg.com/originals/18/88/38/1888388462ea02c9754d2ae0d99bfa95.png" alt="shirt" /></div>
        <div className="Clothing_pants" style={{ overflowY: 'hidden' }}><img src="https://i.pinimg.com/originals/01/b8/8e/01b88ee8f8ff0fb5f257ab4cf9b22004.png" alt="pants" /></div>
        <div className="Clothing_shoes"><img src="https://underarmour.scene7.com/is/image/Underarmour/180117_ULTIMATE_SPEED_W_SHOE?fmt=png-alpha&wid=800" alt="shoes" /></div>
      </div>
    </div>

  )
}

export default Home;