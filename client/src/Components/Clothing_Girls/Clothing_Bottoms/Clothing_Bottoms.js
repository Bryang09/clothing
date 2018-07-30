import React, { Component } from 'react';
import axios from 'axios';

import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';
import TypeG from '../../Clothing_TypeG/Clothing_TypeG';
import Bottom from './Bottom/Bottom';

class Bottoms extends Component {
  state = {
    bottoms: []
  }

  componentDidMount() {
    axios.get('/api/girls/bottoms')
      .then(res => this.setState({ bottoms: res.data }))
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

    const arr = this.state.bottoms;
    const low = arr.sort(compare)

    this.setState({ bottoms: low })
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

    const arr = this.state.bottoms;
    const high = arr.sort(comparing)

    this.setState({ shirts: high })
  }

  render() {
    return (
      <div className="NoOverflow">
        <ClothingNavBar />
        <div className="Clothing_Girls">
          <div className="Clothing_Contain">
            <TypeG />
            <div className="Clothing_Content_">
              <div className="Clothing_Intro_">
                <h1>Bottoms</h1>
                <hr />
                <h2>Sort By:</h2>
                <div className="Clothing_Sort_">
                  <ul>
                    <a onClick={this.lowToHigh}><li>Low to High</li></a>
                    <a onClick={this.highToLow}><li>High to Low</li></a>
                  </ul>
                </div>
              </div>
              <div className="Clothing_Contain_Content">
                <Bottom bottom={this.state.bottoms} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bottoms;