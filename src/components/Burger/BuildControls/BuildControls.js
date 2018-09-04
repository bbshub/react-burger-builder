import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const buildControls = props => {
  return (
    <div className={classes.buildControls}>
      <BuildControl />
      <BuildControl />
    </div>
  );
};

export default buildControls;
