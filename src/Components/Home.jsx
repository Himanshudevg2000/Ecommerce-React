import React, { Fragment, useState } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart/Cart";
import classes from './Home.module.css'

const Home = (props) => {

    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        console.log("showcartHandler")
        setShowCart(true);
    };

    const hideCartHandler = () => {
        setShowCart(false);
    };


    return (
        <Fragment>
            {showCart && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <ProductList />
        </Fragment>
    )
}

export default Home;