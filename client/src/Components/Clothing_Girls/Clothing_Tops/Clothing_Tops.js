import React, { Component } from 'react';
import axios from 'axios';

import Top from './Clothing_Top/Clothing_Top';
import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';
import TypeG from '../../Clothing_TypeG/Clothing_TypeG';
import './Clothing_Tops.css'

class Shirts extends Component {
  state = {
    shirts: []
  };

  componentDidMount() {
    axios.get('/api/girls/shirts')
      .then(shirt => {
        this.setState({ shirts: shirt.data })
      })
  }

  lowToHigh = () => {
    function compare(a, b) {
      let comparison = 0;
      let priceA = a.price
      let priceB = b.price

      if (priceA > priceB) {
        comparison = 1;
      } else if (priceB > priceA) {
        comparison = -1;
      }
      return comparison;
    }

    const arr = this.state.shirts;
    const low = arr.sort(compare)

    this.setState({ shirts: low })
  }

  highToLow = () => {
    function comparing(a, b) {
      let comparison = 0;
      let highPriceA = a.price
      let highPriceB = b.price

      if (highPriceA > highPriceB) {
        comparison = 1;
      } else if (highPriceB > highPriceA) {
        comparison = -1;
      }
      return comparison * -1;
    }

    const arr = this.state.shirts;
    const high = arr.sort(comparing)

    this.setState({ shirts: high })
  }

  render() {
    return (
      <div className="NoOverflow">
        <ClothingNavBar />
        <div className="Clothing_Guys">
          <div className="Clothing_Contain">
            <TypeG />
            <div className="Clothing_Content_">
              <div className="Clothing_Intro_G">
                <h1>Tops</h1>
                <hr />
                <h2>Sort By:</h2>
                <div className="Clothing_Sort_G">
                  <ul>
                    <a onClick={this.lowToHigh}><li>Low to High</li></a>
                    <a onClick={this.highToLow}><li>High to Low</li></a>
                  </ul>
                </div>
              </div>
              <div className="Clothing_Contain_Content">
                <Top shirt={this.state.shirts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shirts;