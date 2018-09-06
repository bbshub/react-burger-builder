import React from "react";
import classes from './BuildControl.css';

const buildControl = props => {
  return <div className={classes.buildControl}>
      <label>{props.label}</label>
      <button 
        className={classes.less} 
        disabled={props.disabled}
        onClick={props.remove}>Less</button>
      <button 
        className={classes.more} 
        onClick={props.add}>More</button>
    </div>;
};

export default buildControl;
