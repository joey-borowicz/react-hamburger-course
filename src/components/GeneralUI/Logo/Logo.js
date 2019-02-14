import React from 'react';

import burgerLogo from '../../../assets/images/good-burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} />
    </div>
);

export default logo;