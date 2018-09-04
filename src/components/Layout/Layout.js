import React from "react";
import WrapperPlaceHolder from "../../hoc/WrapperPlaceHolder";
import Classes from "./Layout.css";

const layout = props => {
  return (
    <WrapperPlaceHolder>
      <div>Toolbar, Sidedrawer, Backdrop</div>
      <main className={Classes.content}>{props.children}</main>
    </WrapperPlaceHolder>
  );
};

export default layout;
