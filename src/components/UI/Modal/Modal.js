import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
import WrapperPlaceHolder from '../../../hoc/WrapperPlaceHolder';

const modal = (props) => {
    return (
        <WrapperPlaceHolder>
            <Backdrop show={props.show} clicked={props.modalClosed}/>
            <div 
                className={classes.modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </WrapperPlaceHolder>
       
    )
}

export default modal;