import React from 'react';

import classes from './Burger.css';
import Fixing from './Fixings/Fixings';

const burger = (props) => {
    return (
        <div className={classes.Burger}>
            <Fixing type="bun-top" />
            <Fixing type="lettuce" />
            <Fixing type="bacon" />
            <Fixing type="cheese" />
            <Fixing type="egg" />
            <Fixing type="patty" />
            <Fixing type="bun-bottom" />
        </div>
    );
};

export default burger;
