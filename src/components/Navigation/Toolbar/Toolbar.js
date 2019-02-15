import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../GeneralUI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuButton from '../SideDrawer/MenuButton/MenuButton';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <MenuButton clicked={props.show} />
        <div className={classes.Logo + ' ' + classes.DesktopOnly}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;