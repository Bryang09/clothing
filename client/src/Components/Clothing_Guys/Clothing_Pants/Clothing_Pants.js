import React, { Component } from 'react';
import axios from 'axios';

import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';
import TypeB from '../../Clothing_TypeB/Clothing_TypeB';
import Pant from './Clothing_Pant/Clothing_Pant';


class Pants extends Component {
  state = {
    pants: []
  }

  componentDidMount() {
    axios.get("/api/guys/pants")
      .then(pants => this.setState({ pants: pants.data }))

  }

  lowToHigh = () => {
    function compare(a, b) {
      let comparison = 0;
      let priceA = a.price;
      let priceB = b.price;

      if (priceA > priceB) {
        comparison = 1;
      } else if (priceB > priceA) {
        comparison = -1;
      }
      return comparison;
    }

    let arr = this.state.pants
    let high = arr.sort(compare)

    this.setState({ pants: high })
  }

  highToLow = () => {
    function comparing(a, b) {
      let comparison = 0;
      let highPriceA = a.price;
      let priceB = b.price;

      if (highPriceA > priceB) {
        comparison = 1;
      } else if (priceB > highPriceA) {
        comparison = -1;
      }
      return comparison * -1;
    }

    const res = this.state.pants

    const result = res.sort(comparing)
    this.setState({ pants: result })
  }

  render() {
    return (
      <div className="NoOverflow">
        <ClothingNavBar />
        <div className="Clothing_Guys">
          <div className="Clothing_Contain">
            <TypeB />
            <div className="Clothing_Content_">
              <div className="Clothing_Intro">
                <h1>Pants</h1>
                <hr />
                <h2>Sort By:</h2>
                <div className="Clothing_Sort">

                  <ul>
                    <a onClick={this.lowToHigh}><li>Low to High</li></a>
                    <a onClick={this.highToLow}><li>High to Low</li></a>
                  </ul>
                </div>
              </div>
              <div className="Clothing_Contain_Content">
                {/* {Pants} */}
                <Pant pants={this.state.pants} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Pants;