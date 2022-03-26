import React from 'react';
import './Phone.css';

const Phone = ({ addToCart, phone }) => {
    const { image, name, price } = phone;
    return (
        <div className='phone'>
            <img src={image} alt="" />
            <div className='phone-info'>
                <h3>Name: {name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <button
                onClick={() => addToCart(phone)}
                className='btn-cart'
            >Add to Cart</button>
        </div>
    );
};

export default Phone;