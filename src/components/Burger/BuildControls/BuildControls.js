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
        {controls.map(ctrl => (
            <Control key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;