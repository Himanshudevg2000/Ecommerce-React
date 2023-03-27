import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CartButton from "./Cart/CartBtn";
import classes from './Header.module.css'

const Header = (props) => {

    return (
        <Fragment>
            <header className={classes.header}>
                {/* <div> */}
                    <Link className={classes.links} to='/'>Home</Link>
                    <Link className={classes.links} to='/store'>Store</Link>
                    <Link className={classes.links} to='/about'>About</Link>
                    <Link className={classes.links} to='/movies'>Movies</Link>
                    <Link className={classes.links} to='/contact'>Contact</Link>
                {/* </div> */}
                <span className={classes.cartbtn}>
                    <CartButton onClickCartBtn={props.onShowCart} />
                </span>
            </header>
            {/* <h1>The Generics</h1> */}
        </Fragment>
    )
}

export default Header;