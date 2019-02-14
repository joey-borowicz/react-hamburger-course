import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem';

const navItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem href="/" active>Burger Builder</NavigationItem>
        <NavigationItem href="/">Checkout</NavigationItem>
    </ul>
);

export default navItems;