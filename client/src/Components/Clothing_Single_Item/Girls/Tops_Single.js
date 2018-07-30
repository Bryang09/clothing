import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';

// import './Tops_Single.css';

class Single_Top extends Component {
  state = { active: [], activeColor: [], activeState: ["Add To Cart"] }

  sizeData = [
    { size: 'XS' },
    { size: 'S' },
    { size: 'M' },
    { size: 'L' },
    { size: 'XL' },
  ]

  shirtColor = [
    { color: ', Blue', hex: '#0d47a1' },
    { color: ', Red', hex: '#d50000' },
    { color: ', Black', hex: '#000' },
  ]

  quantityData = [
    { amount: 1 },
    { amount: 2 },
    { amount: 3 },
  ]
  componentDidMount() {
    const id = this.props.location.state.shirt;
    axios.get(`/api//girls/shirts/${id}`)
      .then(result => this.setState({ active: result }))

  }

  render() {
    return (
      <div className="Single_Object NoOverflow">
        <ClothingNavBar />
        {this.state.active.length !== 0 &&
          <div className="Single_Container Single_Girls">
            <img src={this.state.active.data.src} alt="" />
            <div className="Single_Content">
              <h2>{this.state.active.data.name}{this.state.activeColor}</h2>
              <hr style={{ height: "2px", backgroundColor: "lightBlue", border: "none" }} />
              <h3>{this.state.active.data.description}</h3>
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
                      this.shirtColor.map((e, color) => {
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
              <h4>${this.state.active.data.price}</h4>
              <h5 onClick={() => this.setState({ activeState: "Item Added To Cart!" })}>{this.state.activeState}</h5>
              <h6><Link to="/girls/tops">Continue Shopping</Link></h6>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Single_Top;