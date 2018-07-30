import React, { Component } from 'react';
import axios from 'axios';


import ClothingNavBar from '../../Clothing_NavBar/Clothing_NavBar';
import TypeB from '../../Clothing_TypeB/Clothing_TypeB';
import Shoe from './Clothing_Shoe/Clothing_Shoe';

class Shoes extends Component {
  state = {
    shoes: []
  }

  componentDidMount() {
    axios.get("/api/guys/shoes")
      .then(shoes => this.setState({ shoes: shoes.data }))
  }


  lowToHighShoes = () => {
    function shoes(a, b) {
      let order = 0;
      const shoeA = a.price;
      const shoeB = b.price;

      if (shoeA > shoeB) {
        order = 1;
      } else if (shoeB > shoeA) {
        order = -1;
      }
      return order;
    }

    const stat = this.state.shoes
    const result = stat.sort(shoes)
    this.setState({ shoes: result })
  }
  highToLowShoes = () => {
    function shoesHigh(a, b) {
      let orderH = 0;
      const shoeA = a.price;
      const shoeB = b.price;

      if (shoeA > shoeB) {
        orderH = 1;
      } else if (shoeB > shoeA) {
        orderH = -1;
      }
      return orderH * -1;
    }
    const result = this.state.shoes;
    const order = result.sort(shoesHigh);

    this.setState({ shoes: order })
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
                <h1>Shoes</h1>
                <hr />
                <h2>Sort By:</h2>
              </div>
              <div className="Clothing_Sort">
                <ul>
                  <a onClick={this.lowToHighShoes}><li>Low to High</li></a>
                  <a onClick={this.highToLowShoes}><li>High to Low</li></a>
                </ul>
              </div>
              <div className="Clothing_Contain_Content">
                {/* {Shoes} */}
                <Shoe shoes={this.state.shoes} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Shoes;