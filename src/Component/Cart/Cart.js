import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cartItems = props.courses;
    let total = 0;
    cartItems.map(x => {
        total = total + x.price
    });
    return (
            <div className="cart-box">
                <div>
                    <h3>Course Enrolled: {cartItems.length}</h3>
                    <h2>Total Price: $ {total.toFixed(2)}</h2>
                </div>
            </div>
    );
};

export default Cart;