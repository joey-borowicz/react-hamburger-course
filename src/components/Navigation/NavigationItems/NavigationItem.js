import React from 'react';

import classes from './NavigationItems.css';

const navItem = (props) => (

    <li className={classes.NavigationItem}>
        <a href={props.href} className={props.active ? classes.active : null}>{props.children}</a>
    </li>

);

export default navItem;