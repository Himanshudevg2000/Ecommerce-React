import React from "react";
import {Link} from "react-router-dom";
import classes from './Header.module.css'

const Header = ()=> {
    return(
        <div className={classes.header}>
        <Link className={classes.links} to='/home'>Home</Link>
        <Link className={classes.links} to='/store'>Store</Link>
        <Link className={classes.links} to='/about'>About</Link>
        <button className={classes.cartbtn}>Cart</button>
        </div>
    )
}

export default Header;