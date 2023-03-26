import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

import CartList from "./CartList";
import CartContext from "../../Store/Cart-context";

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const Products = cartCtx.items
    return (
        <Modal onHideCart={props.onHideCart}>
            {/* <div className={classes.carthead}>
                <span className={classes.head}>Title</span>
                <span className={classes.head}>Price</span>
                <span className={classes.head}>Image</span>
                <span className={classes.head}>Quantity</span>
            </div> */}
            <div className={classes.cart}>
                <h2>Cart</h2>
            </div>
            <div className={classes.cart}>
                <CartList products={Products} />
            </div>
        </Modal>
    )
}

export default Cart;