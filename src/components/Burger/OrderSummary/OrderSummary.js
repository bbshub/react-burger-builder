import React from 'react';
import WrapperPlaceHolder from '../../../hoc/WrapperPlaceHolder';
import classes from './OrderSummary.css';


const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
                                .map((igKey) => {
                                   return (
                                    <li key={igKey}>
                                        <span style={{textTransform: "capitalize"}}>{igKey}</span> : {props.ingredients[igKey]}
                                    </li>
                                   );    
                                });
    return (
        <WrapperPlaceHolder>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <button 
                onClick={props.canceled}
                className={classes.cancel}>Cancel</button>
            <button 
                onClick={props.continue}
                className={classes.continue}>Continue</button>
        </WrapperPlaceHolder>
    )
}

export default orderSummary;