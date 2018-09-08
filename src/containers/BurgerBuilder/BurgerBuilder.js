import React, { Component } from "react";
import WrapperPlaceHolder from "../../hoc/WrapperPlaceHolder";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  purchasingHandler = () => {
    this.setState({
      purchasing: true
    });
  }

  isPurchasable = (ingredients) => {

    const totalIngredients = Object.keys(ingredients).map((iKey) => {
      return ingredients[iKey];
    }).reduce((sum, i) => {
      return sum + i;
    },0);

    this.setState({
      purchasable: totalIngredients > 0
    })
  }

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

    this.isPurchasable(updatedIngredients);
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
    this.isPurchasable(updatedIngredients);
  }

  purchasingCancelHandler = () => {
    this.setState(
      {
        purchasing: false
      }
    )
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
        <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler}>
          <OrderSummary 
            ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            continue={this.purchasingCancelHandler}
            canceled={this.purchasingCancelHandler}></OrderSummary>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.purchasingHandler}
          disabledInfo={disabledInfo}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}/>
      </WrapperPlaceHolder>
    );
  }
}

export default BurgerBuilder;
