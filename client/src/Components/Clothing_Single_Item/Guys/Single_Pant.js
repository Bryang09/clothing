import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';

import './Clothing_Single.css';

class Single_Pant extends Component {
  state = { active_pant: [], activeColor: [], buttonState: 'Add To Cart' }

  sizeData = [
    { size: 28 },
    { size: 30 },
    { size: 32 },
    { size: 34 },
    { size: 36 },
    { size: 38 },
    { size: 40 },

  ]

  colorData = [
    { color: ", Black", hex: "#000", },
    { color: ", Forrest Green", hex: "#5a5c51", },
    { color: ", Navy", hex: "#252839", },
  ]

  quantityData = [
    { amount: 1 },
    { amount: 2 },
    { amount: 3 },
  ]

  componentDidMount() {
    const pant_id = this.props.location.state.pants;
    axios.get(`/api/guys/pants/${pant_id}`)
      .then(pant => this.setState({ active_pant: pant }))
  }
  render() {
    return (
      <div className="Single_Object NoOverflow">
        <ClothingNavBar />
        {this.state.active_pant.length !== 0 &&
          <div className="Single_Container">
            <img src={this.state.active_pant.data.src} alt="" />
            <div className="Single_Content">
              <h2>{this.state.active_pant.data.name}{this.state.activeColor}</h2>
              <hr style={{ height: "2px", backgroundColor: "salmon", border: "none" }} />
              <h3>{this.state.active_pant.data.description}</h3>
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
              <div className="Color_Select">
                <h4>Color:</h4>
                <div className="Colors">
                  <ul>
                    {
                      this.colorData.map((e, color) => {
                        const Style = {
                          backgroundColor: e.hex,
                        }
                        return (
                          <div className="Color" key={color}>
                            <li style={Style} onClick={() => this.setState({ activeColor: e.color })}></li>
                          </div>
                        )
                      })}</ul>
                </div>
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
              <h4>${this.state.active_pant.data.price}</h4>
              <h5 onClick={() => this.setState({ buttonState: 'Item Added To Cart!' })}>{this.state.buttonState}</h5>
              <h6><Link to="/guys/pants">Continue Shopping</Link></h6>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Single_Pant;