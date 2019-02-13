import React, { Component } from 'react';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const PRICES = {
    lettuce: 0.19,
    cheese: .25,
    bacon: 0.7,
    egg: .98,
    patty: 1.89
}

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
            },
            totalPrice: 3.45,
            purchaseable: false
        }
    }

    updatePurchaseState(qualifiedIngredients) {
        const sum = Object.keys(qualifiedIngredients)
            .map(fixKey => {
                return qualifiedIngredients[fixKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        const qualifiedIngredients = (({ egg, bacon, patty }) => ({ egg, bacon, patty }))(updatedIngredients);
        this.updatePurchaseState(qualifiedIngredients);
    }

    remIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtract = PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtract;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        const qualifiedIngredients = (({ egg, bacon, patty }) => ({ egg, bacon, patty }))(updatedIngredients);
        this.updatePurchaseState(qualifiedIngredients);
    }

    render() {
        const disabled = {
            ...this.state.ingredients
        }
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRem={this.remIngredientHandler}
                    disabled={disabled}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;