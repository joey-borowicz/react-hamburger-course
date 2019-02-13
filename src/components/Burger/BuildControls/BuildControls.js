import React from 'react'

import classes from './BuildControls.css';
import Control from './Control/Control';


const controls = [
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Egg', type: 'egg' },
    { label: 'Patty', type: 'patty' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>
            Current Price: <strong>${props.price.toFixed(2)}</strong>
        </p>
        {controls.map(ctrl => (
            <Control
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRem(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.orderClicked}>ORDER YOUR GOODBURGER</button>
    </div>
);

export default buildControls;