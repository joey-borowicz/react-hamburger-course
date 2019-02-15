import React from 'react';

import Logo from '../../GeneralUI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../GeneralUI/Backdrop/Backdrop';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxilary';

const sideDrawer = (props) => {
    let attClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        attClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed} />
            <div className={attClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav className={classes.Nav}>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;