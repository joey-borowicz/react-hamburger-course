import React from 'react';

import Aux from '../../../hoc/Auxilary';
import Button from '../../GeneralUI/Button/Button';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(fixKey => {
            return (
                <li key={fixKey}>
                    <span style={{ textTransform: 'capitalize' }}>{fixKey}</span>: {props.ingredients[fixKey]}
                </li>
            );
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>Your Goodburger with the following ingredients:</p>
            <ul>
                {ingredients}
            </ul>
            <Button clicked={props.cancelPurchase} btnType="Danger">Return</Button>
            <Button clicked={props.confirmPurchase} btnType="Success">Purchase</Button>
        </Aux>
    );
};

export default orderSummary;