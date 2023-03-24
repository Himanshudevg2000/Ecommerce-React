import { Fragment } from "react";
// import classes from './Cart.module.css';

const CartList = (props) => {

    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ]

    const cartlist = cartElements.map((item) => (
        <div>
            {console.log(item)}
            <li>{item.title}</li>
            <li>{item.price}</li>
            <li>{item.quantity}</li>
        </div>
    ))

    return (
        <Fragment>
            {cartlist}
        </Fragment>
    )
}

export default CartList;