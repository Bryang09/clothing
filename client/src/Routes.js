import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Components/Home/Home';
import Guys from './Components/Clothing_Guys/Clothing_Guys';
import GuysPants from './Components/Clothing_Guys/Clothing_Pants/Clothing_Pants'
import GuysShirts from './Components/Clothing_Guys/Clothing_Shirts/Clothing_Shirts';
import GuysShoes from './Components/Clothing_Guys/Clothing_Shoes/Clothing_Shoes';

import Girls from './Components/Clothing_Girls/Clothing_Girls';
import GirlsBottoms from './Components/Clothing_Girls/Clothing_Bottoms/Clothing_Bottoms'
import GirlsTops from './Components/Clothing_Girls/Clothing_Tops/Clothing_Tops'
import GirlsShoes from './Components/Clothing_Girls/Clothing_Shoes/Clothing_Shoes'

import SingleBottom from './Components/Clothing_Single_Item/Girls/Bottoms_Single';
import SingleShoe from './Components/Clothing_Single_Item/Girls/Shoes_Single';
import SingleTop from './Components/Clothing_Single_Item/Girls/Tops_Single';

import SingleShirt from './Components/Clothing_Single_Item/Guys/Clothing_Single';
import SinglePant from './Components/Clothing_Single_Item/Guys/Single_Pant';
import SingleShoes from './Components/Clothing_Single_Item/Guys/Single_Shoe';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/guys" component={Guys} />
      <Route exact path="/guys/pants" component={GuysPants} />
      <Route exact path="/guys/shirts" component={GuysShirts} />
      <Route exact path="/guys/shoes" component={GuysShoes} />

      <Route exact path="/girls" component={Girls} />
      <Route exact path="/girls/bottoms" component={GirlsBottoms} />
      <Route exact path="/girls/tops" component={GirlsTops} />
      <Route exact path="/girls/shoes" component={GirlsShoes} />

      <Route exact path="/girls/bottoms/:id" component={SingleBottom} />
      <Route exact path="/girls/shoes/:id" component={SingleShoe} />
      <Route exact path="/girls/tops/:id" component={SingleTop} />

      <Route exact path="/guys/shirts/:id" component={SingleShirt} />
      <Route exact path="/guys/pants/:id" component={SinglePant} />
      <Route exact path="/guys/shoes/:id" component={SingleShoes} />



    </Switch>
  </BrowserRouter>
)

export default Routes;