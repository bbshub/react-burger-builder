import React from 'react';
import WrapperPlaceHolder from '../../hoc/WrapperPlaceHolder';

const layout = (props) => {
    return (
        <WrapperPlaceHolder>
            <div>Toolbar, Sidedrawer, Backdrop</div>
            <main>
                {props.children}
            </main>
        </WrapperPlaceHolder>
    )
}

export default layout;