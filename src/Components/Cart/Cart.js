import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    const { name, image } = cart;
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Cart;