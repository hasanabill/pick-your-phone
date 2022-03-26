import React from 'react';

const Cart = ({ cart }) => {
    const { name } = cart;
    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;