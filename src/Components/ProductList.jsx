import { useContext } from 'react'
import { Link } from 'react-router-dom'
import classes from './ProductList.module.css'
import CartContext from '../Store/Cart-context'

const ProductList = (props) => {

    const cartCtx = useContext(CartContext);

    const addItemsToCart = (event) => {
        event.preventDefault();
        cartCtx.addItem({...props.products, quantity: 1});
        console.log("addItems", cartCtx);
    }

    let productId = `products/${props.products.id}`

    return (
        <div className={classes.stylediv}>
            <div className={classes.mainDIv}>
                <div className={classes.title}>
                <Link to={productId}>{props.products.title}</Link> 
                </div>
                <div className={classes.img}>
                    <img src={props.products.imageUrl} alt={props.products.title} />
                </div>
                <div className={classes.pricebtn}>
                    <span> {props.products.price} Rs</span>
                    <button className={classes.addBtn} onClick={addItemsToCart} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductList;