import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                lettuce: 0,
                bacon: 0,
                cheese: 0,
                egg: 0,
                patty: 0
            }
        }
    }

    // state = {
    //     ingredients: {
    //         lettuce: 1,
    //         bacon: 2,
    //         egg: 1,
    //         cheese: 1,
    //         patty: 2
    //     }
    // }

    render() {
        console.log('[BurgerBuilder.js]', this.state.ingredients)
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls />
            </Aux>
        );
    }
}

export default BurgerBuilder;