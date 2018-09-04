import React, { Component } from "react";
import WrapperPlaceHolder from "../../hoc/WrapperPlaceHolder";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };

  render() {
    return (
      <WrapperPlaceHolder>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </WrapperPlaceHolder>
    );
  }
}

export default BurgerBuilder;
