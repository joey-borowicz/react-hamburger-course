import React from 'react';
import Spin from '../../../assets/images/Spin.svg';

const spinner = () => (
    <div style={{ textAlign: 'center' }}>
        <img src={Spin} alt="Loading... plz wait!" />
    </div>
);

export default spinner;