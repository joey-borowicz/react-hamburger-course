import React from 'react';

import Png from '../../../../assets/images/burger-logo.png';
import classes from './MenuButton.css';

const menuBtn = (props) => (
    <div className={classes.MenuLogo}>
        <img src={Png} alt="Menu" onClick={props.clicked} />
    </div>
);

export default menuBtn;