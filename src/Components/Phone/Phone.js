import React from 'react';
import './Phone.css';

const Phone = (props) => {
    const { image, name, price } = props.phone;
    return (
        <div className='phone'>
            <div className='phone-info'>
                <img src={image} alt="" />
                <h3>Name: {name}</h3>
                <h4>Price: {price}</h4>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Phone;