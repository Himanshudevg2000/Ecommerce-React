import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartButton from "./Cart/CartBtn";
import classes from './Header.module.css'

const Header = (props) => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = async ()=> {
        await localStorage.clear();
        console.log("logged out successfully");
        navigate('/login');
    };

    return (
        <Fragment>
            <header className={classes.header}>
                {auth ? <ul>

                    <Link className={classes.links} to='/'>Home</Link>
                    <Link className={classes.links} to='/store'>Store</Link>
                    <Link className={classes.links} to='/about'>About</Link>
                    <Link className={classes.links} to='/movies'>Movies</Link>
                    <Link className={classes.links} to='/contact'>Contact</Link>
                    <span className={classes.cartbtn}>
                        <CartButton onClickCartBtn={props.onShowCart} />
                    </span>
                    <Link  to="/logout"> <button className={classes.logoutbtn} onClick={logout} > Logout  ( {JSON.parse(auth).name} ) </button> </Link>
                </ul>
                    :
                    <ul>
                        <Link className={classes.links} to='/signUp'>SignUp</Link>
                        <Link className={classes.links} to='/login'>Login</Link>
                    </ul>
                }
            </header>
            {/* <h1>The Generics</h1> */}
        </Fragment>
    )
}

export default Header;