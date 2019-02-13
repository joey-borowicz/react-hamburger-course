import React from 'react';

import classes from './Burger.css';
import Fixing from './Fixings/Fixings';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(fixKey => {
            return [...Array(props.ingredients[fixKey])].map((_, i) => {
                return <Fixing key={fixKey + i} type={fixKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding your fixings!</p>
    }
    return (
        <div className={classes.Burger}>
            <Fixing type="bun-top" />
            {transformedIngredients}
            <Fixing type="bun-bottom" />
        </div>
    );
};

export default burger;
