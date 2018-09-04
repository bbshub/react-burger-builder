import React, { Component } from "react";
import WrapperPlaceHolder from "../../hoc/WrapperPlaceHolder";
import Burger from "../../components/Burger/Burger";

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
        <div>Burger Ingredients Control List</div>
      </WrapperPlaceHolder>
    );
  }
}

export default BurgerBuilder;
