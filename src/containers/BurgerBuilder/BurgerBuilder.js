import React, { Component } from 'react';
import axios from '../../axios-orders';

import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/GeneralUI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/GeneralUI/Spinner/Spinner';

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
            purchaseable: false,
            purchasing: false,
            loading: false
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

    purchaseHander = () => {
        this.setState({ purchasing: true });
    };

    cancelPurchaseHandler = () => {
        this.setState({ purchasing: false });
    };

    makeid = () => {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };

    confirmPurchaseHandler = () => {
        this.setState({ loading: true });
        const orderObj = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice.toFixed(2),
            customer: {
                id: this.makeid(),
                zip: Math.floor(Math.random() * 90000) + 10000
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', orderObj)
            .then(resp => {
                console.log(resp);
                this.setState({ loading: false, purchasing: false });
            })
            .catch(err => {
                console.log("ERROR", err);
                this.setState({ loading: false, purchasing: false });
            });
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
        let orderSummary = <OrderSummary ingredients={this.state.ingredients}
            cancelPurchase={this.cancelPurchaseHandler}
            confirmPurchase={this.confirmPurchaseHandler} />;
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRem={this.remIngredientHandler}
                    disabled={disabled}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    orderClicked={this.purchaseHander}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;