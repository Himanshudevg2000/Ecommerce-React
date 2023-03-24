import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

import CartList from "./CartList";

const Cart = (props) => {
    return (
        <Modal onHideCart={props.onHideCart}>
            <div>
                <span className="title">Title</span>
                <span className="price">Price</span>
                <span className="quantity">Quantity</span>
            </div>
            <div className={classes.cart}>
                <CartList />
            </div>
        </Modal>
    )
}

export default Cart;