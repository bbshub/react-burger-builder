import React, { Component } from "react";
import WrapperPlaceHolder from "../../hoc/WrapperPlaceHolder";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICE = {
      salad: 0.3,
      cheese: 0.5,
      meat: 1.5,
      bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = (type) => {
    const oldIngredientCount = this.state.ingredients[type];
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = oldIngredientCount + 1;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  }

  removeIngredientHandler = (type) => {
    const oldIngredientCount = this.state.ingredients[type];

    if (oldIngredientCount <= 0) {
      return;
    }

    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = oldIngredientCount - 1;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice:updatedPrice
    });
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <WrapperPlaceHolder>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          price={this.state.totalPrice}
          disabledInfo={disabledInfo}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}/>
      </WrapperPlaceHolder>
    );
  }
}

export default BurgerBuilder;
