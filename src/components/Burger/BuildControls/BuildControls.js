import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {label: 'Meat', type: 'meat'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
]

const buildControls = props => {
  return (
    <div className={classes.buildControls}>
      <p>Current Price: {(props.price).toFixed(2)}</p>
      {
        controls.map((control) => {
          return (
            <BuildControl 
              key={control.label} 
              label={control.label} 
              disabled={props.disabledInfo[control.type]}
              remove={() => props.removeIngredient(control.type)}
              add={() => props.addIngredient(control.type)}/>
          );
        })
      }
      <button 
        onClick={props.purchasing}
        disabled={!props.purchasable}
        className={classes.orderButton}>ORDER NOW</button>
    </div>
  );
};

export default buildControls;
