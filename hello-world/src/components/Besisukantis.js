import React from 'react';
import logo from '../logo.svg';

const style = {height: '70px'};
const besisukantis = (props) => {
    return (
        <div>
            <img src={logo}
                 className={props.className1}
                 onMouseOver={props.mouseIn}
                 onMouseOut={props.mouseOut}
                 style={style} alt="logo"/>
        </div>
    )
};

export default besisukantis;