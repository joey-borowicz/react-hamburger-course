import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    closeSideDrawerHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    showSideDrawerHandler = () => {
        this.setState({ showSideDrawer: true });
    }

    render() {
        return (
            <Aux>
                <Toolbar show={this.showSideDrawerHandler} />
                <SideDrawer show={this.state.showSideDrawer} closed={this.closeSideDrawerHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;