import React, { useContext } from "react";
import CartContext from "../../Store/Cart-context";
import classes from './CartButton.module.css';

const CartButton = (props)=> {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.items.reduce((curNumb,item)=> {
        return curNumb + Number(item.quantity)
    },0);

    return(
        <div>
            <button className={classes.cartbtn} onClick={props.onClickCartBtn} >Cart: {totalAmount} </button>
        </div>
    )
}

export default CartButton;