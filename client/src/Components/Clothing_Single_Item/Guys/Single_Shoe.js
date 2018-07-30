import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';

import './Clothing_Single.css';

class Single_Shoe extends Component {
  state = { active_shoe: [], activeState: ["Add To Cart"] }

  componentDidMount() {
    const shoes_id = this.props.location.state.shoes;
    axios.get(`/api/guys/shoes/${shoes_id}`)
      .then(shoe => this.setState({ active_shoe: shoe }))
  }

  sizeData = [
    { size: 7 },
    { size: 7.5 },
    { size: 8 },
    { size: 8.5 },
    { size: 9 },
    { size: 9.5 },
    { size: 10 },
    { size: 10.5 },
    { size: 11 },
    { size: 11.5 },
    { size: 12 },
    { size: 12.5 },
    { size: 13 },
    { size: 13.5 },
  ]

  quantityData = [
    { amount: 1 },
    { amount: 2 },
    { amount: 3 },
  ]
  render() {
    return (
      <div className="Single_Object NoOverflow">
        <ClothingNavBar />
        {this.state.active_shoe.length !== 0 &&
          <div className="Single_Container">
            <img src={this.state.active_shoe.data.src} alt="" />
            <div className="Single_Content">
              <h2>{this.state.active_shoe.data.name}</h2>
              <hr style={{ height: "2px", backgroundColor: "lightGreen", border: "none" }} />
              <h3>{this.state.active_shoe.data.description}</h3>
              <div className="Size_Select">
                <h4>Size:</h4>
                <select name="size">
                  {this.sizeData.map((e, size) => {
                    return (
                      <option key={size} value={e.size}>{e.size}</option>
                    )
                  })}
                </select>
              </div>
              <div className="Size_Select">
                <h4>Qty:</h4>
                <select name="size">
                  {this.quantityData.map((e, amount) => {
                    return (
                      <option key={amount} value={e.amount}>{e.amount}</option>
                    )
                  })}
                </select>
              </div>
              <h4>${this.state.active_shoe.data.price}</h4>
              <h5 onClick={() => this.setState({ activeState: "Item Added To Cart!" })}>{this.state.activeState}</h5>
              <h6><Link to="/guys/shoes">Continue Shopping</Link></h6>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Single_Shoe;