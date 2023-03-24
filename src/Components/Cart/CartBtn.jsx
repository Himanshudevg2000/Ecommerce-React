import React from "react";
import classes from './CartButton.module.css';

const CartButton = (props)=> {
    return(
        <div>
            <button className={classes.cartbtn} onClick={props.onClickCartBtn} >Cart</button>
        </div>
    )
}

export default CartButton;