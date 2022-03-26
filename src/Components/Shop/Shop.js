import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Phone from '../Phone/Phone';
import './Shop.css'

const Shop = () => {
    const [phones, setPhones] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPhones(data))
    }, [])

    const addToCart = (selectedPhone) => {
        if (cart.length < 4) {
            const newCart = [...cart, selectedPhone]
            setCart(newCart)
        }
        else {
            alert('you cannot add more than 4 items')
        }
    }

    const chooseRandom = phone => {
        const phonesLength = phone.length;
        const random = Math.floor(Math.random() * phonesLength)
        const newCart = []
        newCart.push(cart[random])
        setCart([])
        setCart(newCart)
    }
    const clearCart = () => {
        setCart([]);
    }

    return (
        <div className='shop-container'>
            <div className='phone-container'>
                {
                    phones.map(phone => <Phone key={phone.id} phone={phone} addToCart={addToCart}></Phone>)
                }
            </div>
            <div className='selected-container'>
                <h3>Selected Phones</h3>
                {
                    cart.map(phone => <Cart key={phone.id} cart={phone}></Cart>)
                }
                <button onClick={() => chooseRandom(cart)}>Choose 1</button> <br />
                <button onClick={clearCart}>Clear selection</button>
            </div>
        </div>
    );
};

export default Shop;