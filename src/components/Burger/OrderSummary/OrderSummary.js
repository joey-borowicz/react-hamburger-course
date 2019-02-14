import React from 'react';

import Aux from '../../../hoc/Auxilary';
//import Button from '../../GeneralUI/Button/Button';
import { Button } from 'reactstrap';

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
            <Button onClick={props.cancelPurchase} color="danger">Return</Button>
            <Button onClick={props.confirmPurchase} color="success">Purchase</Button>
            {/* <Button clicked={props.cancelPurchase} btnType="Danger">Return</Button>
            <Button clicked={props.confirmPurchase} btnType="Success">Purchase</Button> */}
        </Aux>
    );
};

export default orderSummary;