import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CartButton from "./Cart/CartBtn";
import classes from './Header.module.css'

const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                <Link className={classes.links} to='/home'>Home</Link>
                <Link className={classes.links} to='/store'>Store</Link>
                <Link className={classes.links} to='/about'>About</Link>
                <CartButton onClickCartBtn={props.onShowCart} />
            </header>
        </Fragment>
    )
}

export default Header;