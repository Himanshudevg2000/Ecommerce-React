import { Fragment, useContext } from "react";
import classes from './Cart.module.css';
import CartContext from "../../Store/Cart-context";

const CartList = (props) => {

    const cartCtx = useContext(CartContext);

    const removeItemFromCart = (event) => {
        cartCtx.removeItem(event.target.id);
    }

    let totalAmount = 0;

    const ItemList = props.products.map((product) => {
        const increaseQty = event => {
            cartCtx.increaseQty(event.target.id);
        }

        const decreaseQty = event => {
            cartCtx.decreaseQty(event.target.id);
        }
        totalAmount += product.price * product.quantity;
        return (
            <ul className={classes['cart-items']}>
                {console.log(cartCtx)}
                {
                    // cartElements.map((item) => (
                    <div id={product.title}>
                        <li>
                            <span className={classes.space} >{product.title}</span>
                            <span className={classes.space} >{product.price}</span>
                            <span className={classes.space} > <img src={product.imageUrl} alt={product.title} width="50px" /></span>
                            <span className={classes.space} >{product.quantity}</span>
                            <button className={classes.space} onClick={increaseQty} >+</button>
                            <button className={classes.space} onClick={decreaseQty} >-</button>
                            <span> <button id={product.title} onClick={removeItemFromCart}  >remove</button> </span>
                        </li>
                    </div>
                    // ))
                }
            </ul >
        )

    })

    return (
        <Fragment>
            {ItemList}{" "}
            <div>
                <span>TotalAmount: {totalAmount}</span>
            </div>
        </Fragment>
    )
}

export default CartList;